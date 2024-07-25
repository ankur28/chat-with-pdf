import {Button} from '@/components/ui/button'
import {
  GlobeIcon,ZapIcon, BrainCogIcon, EyeIcon, ServerCogIcon, MonitorSmartphoneIcon
} from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
  name: "keep all your important pdf files securely stored and easily accessible anytime, anywhere",
  description:
  "Store your crucial PDF files securely and enjoy seamless access from anywhere, at any time",
  icon: GlobeIcon,
  },
  {
  name: "Sizzling fast responses",
  description:
  "Experiene lightening-fast asnwers to your queries ensuring you get hte information you need instantly ",
  icon: ZapIcon,
  },
  {
  name: "store your PDF description",
  description:
  "Store your crucial PDF files securely and enjoy seamless access from anywhere, at any time",
  icon: GlobeIcon,
  },
  {
  name: "Chat Memorisation",
  description:
  "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience",
  icon: BrainCogIcon,
  },
  {
  name: "Interactive PDF viewer",
  description:
  "Engage with your PDFs like never beforeusing our intuitive and interactive viewer ",
  icon: EyeIcon,
  },
  {
  name: "Cloud Backup",
  description:
  "Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage",
  icon: ServerCogIcon,
  },
  {
  name: "Responsive Across Devices",
  description:
  "Acces and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet or smartphone",
  icon: MonitorSmartphoneIcon,
  },
  ];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600 text-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">          
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-800">Your Interactive Document Companion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#212121]">Transform Your PDFs into Interactive Conversations</p>
            <p className=" mt-6 text-lg leading-8 text-[#535353]">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF.</span>
              <br />
              <br /> Upload your document, and our chatbot will answer questions, summarize content, and answer all your Qs. Ideal for
              everyone,<span className="text-indigo-600"> Chat with PDF</span>{" "}
              <span className="font-bold">dynamic conversations</span>,
              enhancing productivity 10x fold effortlessly.
            </p>
          </div>
          <Button asChild  className='mt-10' >
              <Link href='/dashboard'>Get Started</Link>
            </Button>

        </div>
        <div className='relative overflow-hidden pt-16'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <Image
              alt="App screenshot"
              src="https://imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className='relative'>
              <div className='absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]'></div>
            </div>
          </div>
        </div>
        
        <div className='relative'>
          <dl>
            {features.map(feature => (
              <div>
                <dt className='inline font-semibold text-gray-900'>
                  <feature.icon 
                  aria-hidden='true'
                  className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </main>
  );
}
