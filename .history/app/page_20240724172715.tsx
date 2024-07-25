import Image from "next/image";
import {
  GlobeIcon,ZapIcon, BrainCogIcon, EyeIcon, ServerCogIcon, MonitorSmartphoneIcon
} from 'lucide-react'

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
    <main className="overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-green-500">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div>
          hello
        </div>
      </div>
    </main>
  );
}