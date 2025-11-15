'use server'
import { generateEmbeddingsInPineconeVectorStore } from "@/lib/langchain";
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
export async function generateEmbeddings(docId : string) {
    auth().protect(); // Protect this route with CLerk

    //turning a PDF into embeddings [0.0123123, 0.123123]
    await generateEmbeddingsInPineconeVectorStore(docId)

    revalidatePath('/dashboard')

    return {completed : true}

}