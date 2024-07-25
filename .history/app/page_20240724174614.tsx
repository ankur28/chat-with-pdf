import {Button} from '@/components/ui/button'
import {
  GlobeIcon,ZapIcon, BrainCogIcon, EyeIcon, ServerCogIcon, MonitorSmartphoneIcon
} from 'lucide-react'
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
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-[#1db954]">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">          
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#1db954]">Your Interactive Document Companion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#212121]">Transform Your PDFs into Interactive Conversations</p>
            <p className=" mt-6 text-lg leading-8 text-[#535353]">
              Introducing{" "}
              <span className="font-bold text-[#1db954]">Chat with PDF.</span>
              <br />
              <br /> Upload your document, and our chatbot will answer questions, summarize content, and answer all your Qs. Ideal for
              everyone,<span className="text-[#1db954]"> Chat with PDF</span>{" "}
              <span className="font-bold">dynamic conversations</span>,
              enhancing productivity 10x fold effortlessly.
            </p>
          </div>
          <Button asChild  className='mt-10' >
              <Link href='/dashboard'>Get Started</Link>
            </Button>

        </div>
      </div>
    </main>
  );
}
