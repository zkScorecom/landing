import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Zap, 
  Award,
  BarChart3,
  Lock,
  Globe,
  ArrowRight,
  CheckCircle,
  Code,
  Layers,
  Database,
  Network,
  Coins,
  Target,
  Trophy,
  FileText,
  Eye
} from 'lucide-react';
import Image from 'next/image';
import ClientsLogo from './ClientsLogo';


const features = [
  {
    title: "Capital Efficiency",
    description: "Improve lending and borrowing mechanics in DeFi.",
    image: "/efficiency.svg",
  },
  {
    title: "Sybil Resistance",
    description: "Prevent gaming of rewards and airdrops.",
    image: "/resistance.svg",
  },
  {
    title: "Wallet Verification",
    description:
      "Offer a zk-proof of wallet alternative to KYC-style verification.",
    image: "/wallet-verification.svg",
  },
  {
    title: "Reputation-Based Identity",
    description: "Serve as a reputation passport across Web3 ecosystems.",
    image: "/identity.svg",
  },
];

const tabs = [
  { id: "defi", label: "DeFi Protocols" },
  { id: "loyalty", label: "Loyalty & Consumer Brands" },
  { id: "rwa", label: "RWA & Insurance Platforms" },
  { id: "users", label: "Everyday Users" },
] as const;

const tabContent = {
  defi: {
    title: "DeFi Protocols",
    description:
      "ZKScore helps lending, trading, and yield platforms build safer, more efficient markets.",
    features: [
      {
        title: "Trust-Based LTVs",
        description: "Participate in protocol governance and voting.",
      },
      {
        title: "Credible Liquidity Providers",
        description: "Participate in protocol governance and voting.",
      },
      {
        title: "Reputation-Weighted Rewards",
        description: "Participate in protocol governance and voting.",
      },
      {
        title: "Wallet-Gated Access",
        description: "Exclusive access for wallets with 2K trust.",
      },
    ],
    diagram: '/dfi-protocols.svg',
  },
  loyalty: {
    title: "Loyalty & Consumer Brands",
    description:
      "Reward real engagement and authenticity by replacing spend-based metrics with wallet-verified reputation.",
    features: [
      {
        title: "Sybil-Resistant Programs",
        description: "Reward authentic users, not bots or fakes.",
      },
      {
        title: "Real Engagement Tracking",
        description: "Track true participation without personal data.",
      },
      {
        title: "Tiered Rewards by Trustscore",
        description: "Reward tiers built on wallet reputation strength.",
      },
      {
        title: "Perks for Loyal Wallets",
        description: "Special perks for long-standing verified wallets.",
      },
    ],
    diagram: '/loyality-tab.svg',
  },
  rwa: {
    title: "RWA Platforms & Lenders",
    description:
      "Bring transparency, fairness, and efficiency to real-world lending using zk-powered reputation signals.",
    features: [
      {
        title: "Reduced KYC With ZK-Proofs",
        description: "Simplified onboarding without exposing personal info.",
      },
      {
        title: "Trust-Based Underwriting",
        description: "Automated lending powered by wallet trust.",
      },
      {
        title: "Credit Lines for Strong Wallets",
        description: "Instant credit access for credible users.",
      },
      {
        title: "Institutional Trust Benchmark",
        description: "Universal zk trust layer for institutions.",
      },
    ],
    diagram: '/rwa-platforms.svg',
  },
  users: {
    title: "Everyday Users",
    description: "Empower users to prove credibility, earn trust, and access better Web3 opportunities privately.",
    features: [
      {
        title: "Prove Credibility Privately",
        description: "Show reliability without sharing private data.",
      },
      {
        title: "Earn Reputation via Activity",
        description: "Gain trust through consistent on-chain actions.",
      },
      {
        title: "Portable Trust Identity",
        description: "One reputation carried across all ecosystems.",
      },
      {
        title: "Unlock Better Rewards",
        description: "Access perks based on earned trustscore.",
      },
    ],
    diagram: '/everyday-user.svg',
  },
};

const data = [
  {
    title: "Wallet Age",
    description: "Older wallets demonstrate long-term commitment to DeFi.",
    image: "/hourglass.svg",
    btnText: "1.5 score per bridge",
  },
  {
    title: "DEX Trading",
    description:
      "Trade on decentralized exchanges to build trading reputation.",
    image: "/coins-swap.svg",
    btnText: "1.5 score per bridge",
  },
  {
    title: "Liquidity",
    description: "Provide liquidity to earn fees and build reputation.",
    image: "/droplet.svg",
    btnText: "1.5 score per bridge",
  },
  {
    title: "Lending",
    description: "Supply liquidity and borrow assets responsibly.",
    image: "/blockchain-04.svg",
    btnText: "1.5 score per bridge",
  },
  {
    title: "NFT Trading",
    description: "Trade NFTs and participate in digital asset markets.",
    image: "/ticket.svg",
    btnText: "1.5 score per bridge",
  },

  {
    title: "Bridge",
    description: "Move assets across different blockchain networks.",
    image: "/orbit.svg",
    btnText: "1.5 score per bridge",
  },
  {
    title: "Governance",
    description: "Participate in protocol governance and voting.",
    image: "/ai-brain.svg",
    btnText: "1.5 score per bridge",
  },
  {
    title: "Staking",
    description: "Stake tokens and participate in network security.",
    image: "/hourglass.svg",
    btnText: "1.5 score per bridge",
  },
];

const faqs = [
  {
    title: "What is ZKScore and how does it work?",
    description:
      "ZKScore is a decentralized identity and reputation system. Mint a unique .zks name (like yourname.zks) that serves as your Web3 passport. Your Trust Score is calculated from wallet age, achievements, DeFi activity, and NFT trading—all verified on-chain using zero-knowledge proofs",
  },
  {
    title: "How do I get started with ZKScore?",
    description:
      "Connect your wallet → Search for a .zks name → Mint it → Activate scoring by signing in. Once activated, your Trust Score updates automatically based on your on-chain activity, and your identity becomes soulbound (non-transferable)",
  },
  {
    title: "How does the scoring system work?",
    description:
      "Your Trust Score updates automatically based on four key metrics: Wallet Age (based on account history), Achievements (from milestones), DeFi Activity (from protocol interactions), and NFT Trading (from marketplace activity). All activities contribute points with no caps—the more you engage, the higher your score. Scores are calculated in real-time and synced on-chain every 72 hours for permanent verification",
  },
  {
    title: "What is a Trust Score and why does it matter?",
    description:
      "Your Trust Score represents your Web3 credibility, calculated from: Wallet Age, Achievements, DeFi Activity, and NFT Trading. It unlocks airdrops, reduces DeFi collateral requirements, enables governance participation, and builds trust with collaborators. Scores sync on-chain every 72 hours with an 'On-Chain Verified' badge",
  },
  {
    title: "How are scores verified and stored on the blockchain?",
    description:
      "We use a hybrid system: On-chain (total score stored in ScoreRegistry smart contract, syncs every 72 hours, cryptographically verified on the blockchain) and Off-chain (detailed breakdowns, real-time updates, historical data). This combines blockchain trustlessness with database speed. Verify your score anytime via 'View on Explorer' on your dashboard",
  },
  {
    title: "What are Achievements and how do I earn them?",
    description:
      "Achievements are verifiable milestones earned through on-chain actions. Examples: Early Adopter (100 pts), Wallet Veteran (150 pts), NFT Collector (200 pts), DeFi Pioneer (250 pts), Referral Champion (100-500 pts). They're automatically detected from your wallet activity and permanently displayed on your profile. Check your dashboard to track progress!",
  },
  {
    title: "Can I transfer or sell my .zks identity?",
    description:
      "Yes, but only before activating scoring. After minting, your .zks name can be traded like any NFT. However, once you activate scoring (by signing in and building your Trust Score), it becomes a Soulbound Token (SBT) and cannot be transferred or sold. This ensures your reputation remains authentic and prevents fraud",
  },
  {
    title: "What happens if my .zks identity expires?",
    description:
      "If your identity expires, you retain access to your .zks name, but your scoring will stop and existing Trust Scores will gradually decay. Your name won't be available for others to mint while you still hold it. If you don't activate scoring at all, your name remains yours but you won't earn any Trust Score points.",
  },
  {
    title: "Is my data private and secure on ZKScore?",
    description:
      "Yes! Privacy features include zero-knowledge proofs (prove reputation without revealing details), wallet-based authentication (no email/password needed), and selective disclosure (choose what to share). Security: audited smart contracts, open-source code, non-custodial, GDPR compliant. Public: .zks name, on-chain score, wallet address. Private: score breakdowns, profile info, email (encrypted).",
  },
];


export default function HomePage() {
  return <LandingPage />;
}

interface LandingPageProps {
  enableRevolvingAnimation?: boolean;
}

export function LandingPage({ enableRevolvingAnimation = false }: LandingPageProps = {}) {
  const { scrollY } = useScroll();
  const [headerStyle, setHeaderStyle] = useState('transparent');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>("defi");
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [resourcesDropdownTimeout, setResourcesDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const codeBlocks = [
    {
      title: "Install ZKScore SDK",
      code: "Install zkscore-sdk",
    },
    {
      title: "Initialize And Get User Score",
      code: `import { ZKScore } from '@zkscore/sdk';

const zkscore = new ZKScore({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

const userScore = await zkscore.getScore(userAddress);

// Use score for loan decisions
if (userScore.creditRating > 700) {
  enableUndercollateralizedLoan();
}`,
    },
    // Add more code blocks here as needed
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleCopy = (code: string, index: number | null) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      if (latest > 900) {
        setHeaderStyle('solid');
      } else {
        setHeaderStyle('transparent');
      }
    });
    return unsubscribe;
  }, [scrollY]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resourcesDropdownTimeout) {
        clearTimeout(resourcesDropdownTimeout);
      }
    };
  }, [resourcesDropdownTimeout]);

  return (
    <>
    <div className="relative bg-black">
        {/* Header & Banner */}
        <section className="relative pt-20 lg:pt-24 overflow-hidden bg-[url('/pattern-dotted.png')] bg-cover bg-center ">
          <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-md`}
            // initial={{ y: -100 }}
            // animate={{ y: 0 }}
            // transition={{ duration: 0.5 }}
          >
            <div className='headerMain relative'>
              <div className="max-w-screen-xl mx-auto px-5 py-5">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <Image src="/zkscore-logo.svg" alt="logo" width="160" height="64" />

                  {/* Desktop Navigation */}
                  <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex items-center gap-x-4 lg:gap-x-6 relative"
                  >
                    <button
                      onClick={() => scrollToSection('trust')}
                      className={`transition-colors text-gray-300 hover:text-white cursor-pointer text-sm whitespace-nowrap`}
                    >
                      Trust
                    </button>
                    <button
                      onClick={() => scrollToSection('reputation')}
                      className={`transition-colors text-gray-300 hover:text-white cursor-pointer text-sm whitespace-nowrap`}
                    >
                      Features
                    </button>
                    <button
                      onClick={() => scrollToSection('integration')}
                      className={`transition-colors text-gray-300 hover:text-white cursor-pointer text-sm whitespace-nowrap`}
                    >
                      Integration
                    </button>
                    <button
                      onClick={() => scrollToSection('capital')}
                      className={`transition-colors text-gray-300 hover:text-white cursor-pointer text-sm whitespace-nowrap`}
                    >
                      Capital
                    </button>
                    <button
                      onClick={() => scrollToSection('public-good')}
                      className={`transition-colors text-gray-300 hover:text-white cursor-pointer text-sm whitespace-nowrap`}
                    >
                      Reputation
                    </button>
                    {/* Resources Dropdown */}
                    <div 
                      className="relative"
                      onMouseEnter={() => {
                        if (resourcesDropdownTimeout) {
                          clearTimeout(resourcesDropdownTimeout);
                          setResourcesDropdownTimeout(null);
                        }
                        setIsResourcesDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                          setIsResourcesDropdownOpen(false);
                        }, 100);
                        setResourcesDropdownTimeout(timeout);
                      }}
                    >
                      <button
                        className={`transition-colors text-gray-300 hover:text-white cursor-pointer text-sm whitespace-nowrap flex items-center gap-1`}
                      >
                        Resources
                        <svg 
                          className={`w-4 h-4 transition-transform ${isResourcesDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isResourcesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 z-50 -mt-1 pt-1">
                          <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-6">
                            <div className="grid grid-cols-1 gap-6 px-6">
                              <div>
                                <button
                                  onClick={() => {
                                    scrollToSection('trustscore');
                                    setIsResourcesDropdownOpen(false);
                                  }}
                                  className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded transition-colors text-sm"
                                >
                                  Trustscore
                                </button>
                                <button
                                  onClick={() => {
                                    scrollToSection('faq');
                                    setIsResourcesDropdownOpen(false);
                                  }}
                                  className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded transition-colors text-sm"
                                >
                                  FAQs
                                </button>
                              </div>
                              <div>
                                <a
                                  href="https://docs.onzks.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded transition-colors text-sm"
                                >
                                  Builder
                                </a>
                                <a
                                  href="https://docs.onzks.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded transition-colors text-sm"
                                >
                                  Documentation
                                </a>
                                <a
                                  href="https://branding.zkscore.io"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded transition-colors text-sm"
                                >
                                  Brand Assets
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <a
                      href="https://app.zkscore.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="outline outline-[#0CFF85]/20 bg-gradient-to-b from-[#079950] to-[#0CFF85] text-white py-2.5 px-4 lg:px-6 rounded-full font-medium flex items-center justify-center gap-2 lg:gap-3 transition-all duration-300 shadow-[inset_0_2px_0_0_rgba(255,255,255,0.4)] whitespace-nowrap flex-shrink-0"
                    >
                      <Image src="/sparkles.svg" alt="launch app" width="20" height="18" className="w-5 h-5 lg:w-[27px] lg:h-[24px]" />
                      <span className="text-sm lg:text-base">Launch App</span>
                    </a>
                  </motion.nav>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Mobile Menu */}
                  {isMobileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="md:hidden overflow-hidden"
                    >
                      <nav className="flex flex-col gap-4 py-6 border-t border-gray-800 mt-4">
                        <button
                          onClick={() => scrollToSection('trust')}
                          className="text-gray-300 hover:text-white transition-colors py-2 px-4 hover:bg-white/5 rounded-lg text-left"
                        >
                          Trust
                        </button>
                        <button
                          onClick={() => scrollToSection('reputation')}
                          className="text-gray-300 hover:text-white transition-colors py-2 px-4 hover:bg-white/5 rounded-lg text-left"
                        >
                          Features
                        </button>
                        <button
                          onClick={() => scrollToSection('integration')}
                          className="text-gray-300 hover:text-white transition-colors py-2 px-4 hover:bg-white/5 rounded-lg text-left"
                        >
                          Integration
                        </button>
                        <button
                          onClick={() => scrollToSection('capital')}
                          className="text-gray-300 hover:text-white transition-colors py-2 px-4 hover:bg-white/5 rounded-lg text-left"
                        >
                          Capital
                        </button>
                        <button
                          onClick={() => scrollToSection('public-good')}
                          className="text-gray-300 hover:text-white transition-colors py-2 px-4 hover:bg-white/5 rounded-lg text-left"
                        >
                          Reputation
                        </button>
                        <div className="border-t border-gray-800 pt-4">
                          <button
                            onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                            className="text-gray-300 hover:text-white transition-colors py-2 px-4 hover:bg-white/5 rounded-lg text-left w-full flex items-center justify-between"
                          >
                            Resources
                            <svg 
                              className={`w-4 h-4 transition-transform ${isResourcesDropdownOpen ? 'rotate-180' : ''}`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {isResourcesDropdownOpen && (
                            <div className="mt-2 pl-4 space-y-2">
                              <button
                                onClick={() => {
                                  scrollToSection('trustscore');
                                  setIsResourcesDropdownOpen(false);
                                }}
                                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1 px-4 hover:bg-white/5 rounded-lg"
                              >
                                Trustscore
                              </button>
                              <button
                                onClick={() => {
                                  scrollToSection('faq');
                                  setIsResourcesDropdownOpen(false);
                                }}
                                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1 px-4 hover:bg-white/5 rounded-lg"
                              >
                                FAQs
                              </button>
                              <a
                                href="https://docs.onzks.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1 px-4 hover:bg-white/5 rounded-lg"
                              >
                                Builder
                              </a>
                              <a
                                href="https://docs.onzks.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1 px-4 hover:bg-white/5 rounded-lg"
                              >
                                Documentation
                              </a>
                              <a
                                href="https://branding.zkscore.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1 px-4 hover:bg-white/5 rounded-lg"
                              >
                                Brand Assets
                              </a>
                            </div>
                          )}
                        </div>
                        <a
                          href="https://app.zkscore.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full outline outline-[#0CFF85]/20 bg-gradient-to-b from-[#079950] to-[#0CFF85] text-white py-2.5 px-6 rounded-full font-medium flex items-center justify-start gap-3 transition-all duration-300 shadow-[inset_0_2px_0_0_rgba(255,255,255,0.4)]"
                        >
                          <Image src="/sparkles.svg" alt="launch app" width="27" height="24" />
                          <span>Launch App</span>
                        </a>
                      </nav>
                    </motion.div>
                  )}
              </div>
            </div>
          </motion.header>

          {/* Banner Section */}
          <div className="relative text-white overflow-hidden ">
            <div className="relative max-w-screen-xl mx-auto px-5 pt-16 pb-10 md:pb-20">
              <div className="grid lg:grid-cols-2 gap-2 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  className="text-left"
                >
                  <div className="space-y-6 z-10 text-center md:text-left">
                    <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.25rem] font-medium leading-tight">
                      Where Human, Wallet and AI Agent Trust Intersect.
                    </h1>
                    <p className="text-white text-lg opacity-70">
                      A zero-knowledge infrastructure for privacy-preserving reputation, designed to enhance capital efficiency for Humans and AI agents.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 items-center pt-0 md:pt-4">
                      <a
                        href="https://app.zkscore.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0CFF85] hover:bg-[#0CFF85]/80 text-black font-medium max-w-44 md:max-w-40 w-full px-4 md:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base lg:text-base text-center"
                      >
                        Create ID
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1yACxELpR1Qt34hMYH0DDyi6sHTQuZjVG/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neutral-900 hover:bg-neutral-700 border border-solid border-white/20 text-white font-light px-4 md:px-8 py-3 max-w-44 w-full md:max-w-full md:w-auto rounded-lg transition-all duration-300 text-sm md:text-base lg:text-base text-center"
                      >
                        Documentation
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Right Content - Circular Diagram */}
                <div className="relative flex justify-center lg:justify-end">
                  {enableRevolvingAnimation ? (
                    <div 
                      style={{
                        animation: 'revolve 20s linear infinite',
                      }}
                    >
                      <Image
                        src="/banner-graphics.svg"
                        alt="Banner Image"
                        width="500"
                        height="510"
                      />
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Image
                        src="/banner-graphics.svg"
                        alt="Banner Image"
                        width="500"
                        height="510"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <ClientsLogo />

        {/* Section 1 */}
        <section id="trust" className="relative pb-10 md:pb-20 pt-10 md:pt-40 overflow-hidden">
          <div className="relative max-w-screen-xl mx-auto px-5">
            <div className="text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium mb-8 text-white ">
                  Turning Trust Into Utility
                </h2>
                <p className="opacity-70 text-base text-white">
                  Converts multi-chain activity into a portable, privacy-first
                  trustscore. Share a proof of your history to qualify for
                  better terms across multi DeFi applications and Loyalty
                  Rewards.
                </p>
              </motion.div>
            </div>

            <div className="relative my-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="/turning-trust-large.svg"
                  alt="Turning Trust Into Utility"
                  width="1074"
                  height="400"
                  className="w-full h-full object-contain hidden md:block"
                />
                <Image
                  src="/turning-trust.svg"
                  alt="Turning Trust Into Utility"
                  width="419"
                  height="1280"
                  className="w-full h-full object-contain block md:hidden"
                />
              </motion.div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group border border-[#ffffff1a] bg-[#0A0A0A] rounded-2xl p-6"
              >
                <div className="relative flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_4px_rgba(12,255,133,1)] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#272727] to-black to-75%">
                    <Image
                      src="/wallet-01.svg"
                      alt="Turning Trust Into Utility"
                      width="24"
                      height="24"
                      className=""
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium text-white font-mono mb-2">
                      820M
                    </h4>
                    <p className="opacity-70 text-white text-base">
                      Unique wallets active globally
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group border border-[#ffffff1a] bg-[#0A0A0A] rounded-2xl p-6"
              >
                <div className="relative flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_4px_rgba(12,255,133,1)] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#272727] to-black to-75%">
                    <Image
                      src="/blockchain.svg"
                      alt="Turning Trust Into Utility"
                      width="24"
                      height="24"
                      className=""
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium text-white font-mono mb-2">
                      12+
                    </h4>
                    <p className="opacity-70 text-white text-base">
                      Multi-Chain Coverage
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative group border border-[#ffffff1a] bg-[#0A0A0A] rounded-2xl p-6"
              >
                <div className="relative flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_4px_rgba(12,255,133,1)] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#272727] to-black to-75%">
                    <Image
                      src="/plug-socket.svg"
                      alt="Turning Trust Into Utility"
                      width="24"
                      height="24"
                      className=""
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium text-white font-mono mb-2">
                      9000
                    </h4>
                    <p className="opacity-70 text-white text-base">
                      Makes trust score easy to integrate
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="reputation" className="px-5 py-10 md:py-20 max-w-screen-xl mx-auto">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[38rem]"
            >
              <h2 className="text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem] font-medium text-white mb-6 leading-tight">
                {" "}
                Reputation backbone For decentralized applications
              </h2>
              <p className="opacity-70 text-white text-base">
                A public good that bridges fragmented ecosystems through a
                unified, privacy-preserving trust layer.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-20">
            {/* Wallet ID */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="px-6 pb-7 pt-10 border border-[#ffffff1a] rounded-2xl bg-gradient-to-br from-[#ffffff0f] to-transparent">
                <Image
                  src="/wallet-id.svg"
                  alt="Turning Trust Into Utility"
                  width="270"
                  height="252"
                  className="w-full h-[252px] object-contain mb-10"
                />
                <h3 className="text-white text-2xl font-medium mb-1">
                  {"Wallet ID"}
                </h3>
                <p className="text-white opacity-70 text-sm">
                  {
                    "Your unique on-chain identity, securing reputation without depending on personal information."
                  }
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2"
            >
              <div className="px-6 pb-7 pt-10 border border-[#ffffff1a] rounded-2xl bg-gradient-to-br from-[#ffffff0f] to-transparent h-full">
                <Image
                  src="/zk-privacy.svg"
                  alt="Turning Trust Into Utility"
                  width="565"
                  height="252"
                  className="w-full h-[252px] object-contain mb-10"
                />
                <h3 className="text-white text-2xl font-medium mb-1">
                  {"ZK privacy"}
                </h3>
                <p className="text-white opacity-70 text-sm">
                  {
                    "Prove your reputation without revealing sensitive transaction details. "
                  }
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-6">
            {/* Wallet ID */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="px-6 pb-7 pt-10 border border-[#ffffff1a] rounded-2xl bg-gradient-to-br from-[#ffffff0f] to-transparent h-full">
                <Image
                  src="/realtime-analytics.svg"
                  alt="Real Time Analytics"
                  width="693"
                  height="252"
                  className="w-full h-[252px] object-contain"
                />
                <h3 className="text-white text-2xl font-medium mb-1">
                  {"Real Time Analytics"}
                </h3>
                <p className="text-white opacity-70 text-sm">
                  {
                    "Monitor reputation metrics in real-time with our advanced analytics dashboard."
                  }
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="px-6 pb-7 pt-10 border border-[#ffffff1a] rounded-2xl bg-gradient-to-br from-[#ffffff0f] to-transparent">
                <Image
                  src="/achievements.svg"
                  alt="Achievements"
                  width="270"
                  height="252"
                  className="w-full h-[252px] object-contain"
                />
                <h3 className="text-white text-2xl font-medium mb-1">
                  {"Achievements"}
                </h3>
                <p className="text-white opacity-70 text-sm">
                  {
                    "Gamified reputation building with rewards and special recognition."
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="integration" className="py-10 md:py-20 bg-[url('/code-block-bg.png')] bg-contain bg-left bg-no-repeat">
          <div className="px-5 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Left Side */}
              <div>
                  <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-[31.25rem]"
              >
                  <h2 className="text-[24px] md:text-[30px] lg:text-[2.5rem] font-medium text-white mb-6 leading-tight">
                    Easy Integration With ZKScore SDK
                  </h2>
                  <p className="opacity-70 text-white text-base">
                    ZKScore’s SDK makes it seamless to integrate reputation data
                    into your dApp or protocol. In just a few lines of code, you
                    can access wallet trust scores, request zk-proofs, and
                    tailor experiences for users based on verified credibility.
                  </p>

                  <a
                    href="https://docs.onzks.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#0CFF85] hover:bg-[#0CFF85]/80 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 mt-4 md:mt-14"
                  >
                    Build with ZKScore
                  </a>
              </motion.div>
              </div>
              {/* Right Side Code Editor */}
              <div className="codeBlock">
                {codeBlocks.map((block, index) => (
                  <motion.div
                  key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`relative bg-[#ffffff0a] p-6 border rounded-lg border-[#ffffff1a] ${
                      index < codeBlocks.length - 1 ? "mb-6" : ""
                    }`}
              >
                {/* Header with title and copy button */}
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-white text-xl font-medium">
                        {block.title}
                      </h2>
                      <button
                        onClick={() => handleCopy(block.code, index)}
                        className="p-2 hover:bg-white/5 rounded-lg transition-colors flex-shrink-0"
                        aria-label="Copy to clipboard"
                      >
                        {copiedIndex === index ? (
                          <svg
                            className="w-5 h-5 text-[#0CFF85]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Code content */}
                    <pre className="text-[#0CFF85] text-sm font-mono overflow-x-auto leading-relaxed">
                      {block.code}
                    </pre>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="capital" className="px-5 pt-6 md:pt-14 pb-12 md:pb-24 max-w-screen-xl mx-auto overflow-x-hidden">
          <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-between flex-wrap items-start mb-10"
              >
              <h2 className="text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem] font-medium text-white mb-3 md:mb-6 leading-tight max-w-[31.438rem] w-full">
                Unlock capital, not your data
              </h2>
              <p className="opacity-70 text-white text-base md:basis-2/4 max-w-[38rem] w-full">
                ZKScore is more than a credit score for Web3. It’s a trust layer
                designed for different groups in the ecosystem, each with unique
                ways to benefit from portable zk-verified reputation.
              </p>
              </motion.div>

          <div className="">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center mb-6 bg-black rounded-md overflow-x-auto"
              >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-base px-5 py-4 rounded-lg text-center border-none whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? "bg-[#ffffff1a] text-white font-medium"
                      : "bg-transparent text-white opacity-70 font-normal"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>
            {/* Protocols Sec Left */}
            <motion.div
               initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
               className="">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start px-6 md:px-10 py-6 md:py-14 border border-[#ffffff1a] rounded-3xl bg-[#ffffff0a]">
                  <div className="">
                    <h2 className="text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] text-white font-medium">
                      {tabContent[activeTab].title}
                    </h2>
                    <p className="text-white opacity-70 mt-2 md:mt-4">
                      {tabContent[activeTab].description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-4 mt-10">
                      {tabContent[activeTab].features.map((feature, index) => (
                        <div key={index}>
                          <h3 className="text-white font-medium text-base mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-white opacity-70 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Protocols Sec Right */}
                  {/* border border-[#ffffff1a] rounded-2xl bg-gradient-to-br from-[#0CFF850a] to-[#0000000a] p-6 flex justify-center items-center h-full */}
                  {/* <div className="flex justify-center lg:justify-end"> */}
                    <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3 }} className="flex justify-center lg:justify-end">
                      <Image
                        src={tabContent[activeTab].diagram}
                        alt="Tabs"
                        width="568"
                        height="360"
                        className="w-full h-auto md:h-[340px] object-contain object-right"
                      />
                    </motion.div>
                  {/* </div> */}
                </div>
               </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center justify-between px-3 md:px-10 py-4 mt-6 border border-[#ffffff1a] bg-[#ffffff0a] rounded-3xl flex-col md:flex-row gap-10 md:gap-2">
              <div className="flex items-center gap-6 justify-between md:justify-start w-full md:w-auto" >
                <h2 className="text-white text-[2rem] md:text-[3rem] lg:text-[64px] font-mono">$300</h2>{" "}
                <p className="text-white text-base md:text-xl font-medium">Starter Credits</p>
              </div>
              <div className="flex items-center gap-2 md:gap-6 flex-col md:flex-row w-full md:w-auto" >
                <p className="text-white opacity-70">
                  No credit required
                </p>
                <button className="bg-[#0CFF85] hover:bg-[#0CFF85]/80 text-black font-semibold px-4 md:px-8 py-3 w-full md:w-auto rounded-lg transition-all duration-300 transform hover:scale-105">
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="public-good" className="px-5 py-10 md:py-20  max-w-screen-xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }} className="max-w-[38rem]">
            <h2 className="text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem] font-medium text-white mb-6 leading-tight">
              ZKScore For Public Good
            </h2>
            <p className="opacity-70 text-white text-base">
              In Web3, every wallet starts from zero, no portable reputation, no
              shared benchmark of reliability. This creates inefficiencies:
              over-collateralized lending, sybil attacks in governance, spam in
              airdrops, and high barriers to real-world adoption.
            </p>
          </motion.div>

          {/* Feature Section with Flex */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                key={index}
                className="px-6 pb-7 pt-10 border border-[#ffffff1a] rounded-2xl text-center md:text-left bg-gradient-to-br from-[#ffffff0f] to-transparent"
                >
                <h3 className="text-white text-2xl font-medium mb-2 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-white opacity-70 text-sm w-full md:max-w-64 leading-normal ">
                  {item.description}
                </p>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={693}
                  height={252}
                  className="w-[528px] md:-mt-16 -mb-20 float-right object-contain"
                />
                </motion.div>
            ))}
          </div>
        </section>

        {/* Section 6 */}
        <section className="px-5 py-10 max-w-screen-xl mx-auto">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                >

                <h2 className="text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem] font-medium text-white mb-6 leading-tight">
                  From Wallet Activity <br /> To Verifiable Trust.
                </h2>
                <p className="opacity-70 text-white text-base mb-20 max-w-5xl mx-auto">
                  ZKScore turns everyday onchain actions into a portable trustscore
                  that protocols and apps can use for lending, rewards, governance,
                  and more. Built with zero-knowledge proofs, your reputation
                  remains private while still being fully verifiable.
                </p>
                </motion.div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#ffffff1a] bg-[#ffffff0a]">
              {/* Logo and Text positioned left of play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-6">
                  <div className="absolute inset-0 top-2/4 left-2/4 transform -translate-x-20 -translate-y-9 ">
                    <Image src="/zkscore-logo.svg" alt="logo" width="160" height="64" />
                  </div>
                  {/* Play Button */}
                  <button
                    onClick={handleVideoPlay}
                    className="relative group"
                    aria-label="Play video"
                  >
                    {/* Main button */}
                    <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-transparent backdrop-blur-sm border border-[#ffffff33] group-hover:border-emerald-500/50 transition-all duration-300">
                      {/* Play icon */}
                      <div className="relative ml-1">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          className="drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                        >
                          <path d="M10 8L24 16L10 24V8Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Optional: Actual video element (hidden until play) */}
              {isVideoPlaying && (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/D0UnqGm_miA?si=Ix08PWqqhgdxw52A?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </section>

        {/* Section 7  */}
        <section id="trustscore" className="px-5 py-10 md:py-20 max-w-screen-xl mx-auto">
          <div className="text-center mb-20 ">
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                >

                <h2 className="text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem] font-medium text-white mb-6 leading-tight">
                  Trustscore Through On-Chain Behavior
                </h2>
                <p className="max-w-[978px] mx-auto opacity-70 text-white text-base">
                  A trustscore that grows directly from on-chain behavior. Every
                  wallet has the ability to earn credibility through activity and
                  time, with scores awarded for transactions and wallet age. The
                  result is a score that is fair, transparent, and truly
                  decentralized.
                </p>
                </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10 pt-6 border-t border-[#ffffff33]">
            {data.map((item, index) => (
              <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                key={index}
                className="px-4 pb-4 md:border-r last:border-r-0 lg:[&:nth-child(4n)]:border-r-0 relative border-[#ffffff33] 
        before:content-[''] before:absolute before:right-0 before:-bottom-5 before:w-full before:h-[1px] before:bg-[#ffffff33] text-center md:text-left"
                >
                {/* <img
                  className="w-12 mb-4 md:mb-8"
                  src={item.image}
                  alt={item.title}
                /> */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto md:ml-0 mb-4 md:mb-8 shadow-[0_0_4px_rgba(12,255,133,1)] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#272727] to-black to-75%">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width="24"
                    height="24"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg md:text-xl mb-2 md:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#b2b4b3] text-base mb-4 md:mb-8">
                    {item.description}
                  </p>
                </div>
                <button className="px-3 py-1 text-base text-center rounded-md bg-[#ffffff1a] hover:bg-neutral-700 border border-solid border-white/10 text-white/70 font-normal">
                  {item.btnText}
                </button>
                </motion.div>
            ))}
          </div>
        </section>

        {/* Section 8  */}
        <section className="px-5 py-10 md:py-20 max-w-screen-xl mx-auto">
          <div className="text-center mb-10 md:mb-20 ">
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                >

              <h2 className="text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem] font-medium text-white mb-6 leading-tight">
                Meet Macro most trusted partners
              </h2>
              <p className="max-w-[978px] mx-auto opacity-70 text-white text-base">
                Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla erat
                morbi amet duis mattis. Ut neque facilisis etiam dolor mauris leo
                nisl. Sed dictum a eget vestibulum vel vitae et enim turpis. Nunc
                facilisi sed dignissim purus erat adipiscing adipiscing
                pellentesque.
              </p>
                </motion.div>
          </div>
          <ClientsLogo />
        </section>

        {/* Section 9 */}
        <section id="faq" className="py-10 md:py-20 bg-[url('/green-circle-background.png')] bg-contain bg-right bg-no-repeat">
          <div className="text-center mb-10 md:mb-20 px-5 max-w-screen-xl mx-auto ">
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                >

                  <h2 className="text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem] font-medium text-white leading-tight">
                    Frequently Asked Questions
                  </h2>
                </motion.div>
          </div>

          <div className="space-y-4 px-5 max-w-screen-xl mx-auto">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-[#ffffff1a] bg-[#ffffff0f] rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden"
                open={index === 0}
              >
                <summary className="flex items-center justify-between gap-1.5 text-white">
                  <h2 className="text-xl font-medium">{faq.title}</h2>

                  <div className="w-11 h-11 flex items-center justify-center rounded-md bg-[#ffffff1a]">
                    <svg
                      className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>

                <p className="pt-4 text-white opacity-70">{faq.description}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 md:py-20 bg-[#ffffff0a]">
          <div className="px-5 max-w-screen-xl mx-auto">
            <div className="flex justify-between flex-wrap gap-10">
              <div className="max-w-[588px] w-full">
                <Image src="/zkscore-logo.svg" alt="logo" width="160" height="64" />
                <div className="">
                  <h3 className="text-2xl text-white font-medium mt-6 mb-6">
                    Privacy-first trust for every wallet.
                  </h3>
                  <p className="text-base text-white opacity-70">
                    be the first to know about new features, upcoming events,
                    and everything happening in the world of zKScore.
                  </p>
                  <div
                    className="mt-3 flex flex-wrap md:flex-nowrap justify-center items-center bg-[#ffffff0a] p-[6px] rounded-lg"
                    style={{
                      boxShadow: "inset 0 0 8px 0 rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="
                    bg-transparent 
                    w-[588px]
                    px-[20px]
                    py-4
                    md:py-0
                    text-white 
                    placeholder:text-[#7a7a7a] 
                    outline-none 
                    border-none
                  "
                    />

                    <button className="bg-[#0CFF85] w-full md:max-w-[181px] px-10 text-black flex items-center justify-center py-3 text-base rounded-md font-medium">
                      <span className="mr-2"> Subscribe</span>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-1 w-4 h-4 md:w-8 md:h-8"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* social icons */}
                  <div className="flex items-center gap-3 mt-6">
                    <a href="https://t.me/zksnews#" target="_blank" className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                    <Image src="/telegram.svg" alt="telegram" width="17" height="14" />
                    </a>
                    <a href="https://discord.gg/ZmnsPMKgjw" target="_blank" className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                    <Image src="/discord.svg" alt="discord" width="16" height="12" />
                    </a>
                    <a href="https://www.linkedin.com/company/zkscore" target="_blank" className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                    <Image src="/linkedin.svg" alt="linkedin" width="17" height="17" />
                    </a>
                <a href="https://x.com/buildonzks" target="_blank" className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                    <Image src="/twitter.svg" alt="twitter" width="12" height="12" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[532px] flex flex-wrap gap-4 md:gap-20">
                <div className="w-[130px] md:w-[102px]">
                  <h3 className="font-semibold text-xl text-white mb-6">
                    Products
                  </h3>
                  <ul className="space-y-3 list-none text-white opacity-70">
                    <li>Overview</li>
                    <li>How It Works</li>
                    <li>Integrations</li>
                    <li>Docs</li>
                    <li>API Access</li>
                  </ul>
                </div>

                {/* ECOSYSTEM */}
                <div className="w-[170px] md:w-[149px]">
                  <h3 className="font-semibold text-xl text-white mb-6">
                    Ecosystem
                  </h3>
                  <ul className="space-y-3 text-white opacity-70 list-none">
                    <li>For DAOs</li>
                    <li>For DeFi Platforms</li>
                    <li>For Wallets</li>
                    <li>Partners</li>
                    <li>Community Grants</li>
                  </ul>
                </div>

                {/* COMPANY */}
                <div className="w-[80px] md:w-[107px]">
                  <h3 className="font-semibold text-xl text-white mb-6">
                    Company
                  </h3>
                  <ul className="space-y-3 list-none text-white opacity-70">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Terms</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* BOTTOM FOOTER */}
            <div className="flex justify-center md:justify-between flex-wrap mt-10 md:mt-20 gap-4 items-center text-white opacity-70">
              <p className="text-base">Copyright 2025. All Rights Reserved.</p>

              <div className="flex gap-4 md:gap-8">
                <p>Privacy Policy</p>
                <p>Terms Of Services</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}