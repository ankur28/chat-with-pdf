import { ChatOpenAI } from "@langchain/openai";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatPromptTemplate } from "@langchain/core/prompts"; 
import { createRetrievalChain} from "langchain/chains/retrieval";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";

import {HumanMessage,AIMessage } from "@langchain/core/messages";

import pineconeClient from "./pinecone";

import { PineconeStore } from "@langchain/pinecone";
import { PineconeConflictError } from "@pinecone-database/pinecone/dist/errors";
import { Index, RecordMetadata } from "@pinecone-database/pinecone";
import { adminDb } from "../firebaseAdmin";
import { auth } from "@clerk/nextjs/server";



const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    modelName: 'gpt-4o',
})

export const indexName = "chattopdf";

export async function generateDocs(docId:string) {
    const {userId}= await auth();

    if(!userId){
        throw new Error("User not found")
    }

    console.log("-- Fetching the downlaod URL from Firebase... ---")
    const firebaseRef = await adminDb.collection("users")
    .doc(userId)
    .collection("files")
    .doc(docId)
    .get();

    const downloadUrl = firebaseRef.data()?.downloadUrl;
    
    if(!downloadUrl){
        throw new Error(" Download URL not found ")
    }

    console.log(`--- Download URL fetched successfully: ${downloadUrl} ---`)
    
    //Fetch teh PDF from the specified Url
    const response = await fetch(downloadUrl);

    //load the PDF into a PDFDocument object
    const data = await response.blob();

    // load the PDF doc from the specified path
    console.log(" --- Loading the PDF Doc ---")
    const loader = new PDFLoader(data);
    const docs = await loader.load();

    //Split the PDF doc into smaller parts for easeier processing
    console.log(" --- Splitt tthe doc into smaller parts... ---")
    const splitter = new RecursiveCharacterTextSplitter();

    const splitDocs = await splitter.splitDocuments(docs);
    console.log(` --- Split into ${splitDocs.length} parts ---`)

    return splitDocs;

}


async function nameSpaceExists(
    index: Index<RecordMetadata>,
    namespace: string
    ){
    if( namespace == null) throw new Error("No namespace value provided")
    const { namespaces } = await index.describeIndexStats();
    return namespaces?.[namespace] !== undefined;
}

export async function generateEmbeddingsInPineconeVectorStore(docId:string) {
    const { userId } = await auth()

    if(!userId){
        throw new Error("User not found")
    }
    
    let pinconeVectoreStore;

    console.log(" -- Generate Embeddings for the split documesnts... ---")
    const embeddings = await new OpenAIEmbeddings();

    const index = await pineconeClient.index(indexName);
    // namespace are documents
    const namespaceAlreadyExists = await nameSpaceExists(index, docId);

    //if namespace exists, 
    if(namespaceAlreadyExists) {
        console.log(`-- Namespace ${docId} alreadyExists, resuing existing embeddings... ---`);

        pinconeVectoreStore = await PineconeStore.fromExistingIndex(embeddings, {
        pineconeIndex: index,
        namespace: docId
    })

    return pinconeVectoreStore;
    } else {
        // If namespace does not exist, download the PDF from firestore via the 
        // stored Download URL & generate the embeddings and store them in the Pincecone vectore store

        const splitdocs = await generateDocs(docId)
        console.log(`--- Storing the embeddings in namespace ${docId} in the ${indexName} Pinecone vectore store... ---`)
        
        pinconeVectoreStore = await PineconeStore.fromDocuments(
            splitdocs,
            embeddings,
            {
                pineconeIndex: index,
                namespace: docId,
            }
        );

        return pinconeVectoreStore;
    }
}