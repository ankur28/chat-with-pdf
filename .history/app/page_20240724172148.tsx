import Image from "next/image";
import {
  GlobeIcon,ZapIcon, BrainCogIcon, EyeIcon, ServerCogIcon
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
    <main className="">
      <h1>Let's build a SAAS AI App</h1>
    </main>
  );
}
