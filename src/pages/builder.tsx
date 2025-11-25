import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { 
  Code, 
  Terminal, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight,
  Github,
  Copy,
  ExternalLink,
  FileText,
  Download
} from 'lucide-react';

export default function BuilderPage() {
  const { scrollY } = useScroll();
  const [headerStyle, setHeaderStyle] = useState('transparent');
  
  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      if (latest > 100) {
        setHeaderStyle('solid');
      } else {
        setHeaderStyle('transparent');
      }
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Header - Same as main page */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerStyle === 'solid' 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className={`text-xl font-bold transition-colors ${
                headerStyle === 'solid' ? 'text-black' : 'text-white'
              }`}>Anylayer</span>
            </div>

            {/* Navigation */}
            <motion.nav 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="/docs" className={`transition-colors ${
                headerStyle === 'solid' ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'
              }`}>Documentation</a>
              <a href="/builder" className={`font-medium transition-colors ${
                headerStyle === 'solid' ? 'text-black' : 'text-white'
              }`}>Builder</a>
              <a href="https://explorer-app-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                headerStyle === 'solid' ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'
              }`}>Explorer</a>
              <a href="/news" className={`transition-colors ${
                headerStyle === 'solid' ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'
              }`}>News</a>
              <div className="flex items-center space-x-3 ml-4">
                <a href="https://twitter.com/anylayer" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                  headerStyle === 'solid' ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://github.com/metalanddev/ZKScoreEVM" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                  headerStyle === 'solid' ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.nav>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-4"
            >
              <a
                href="https://app.anylayer.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Launch App
              </a>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-white">🎁 300 Free Credits • No Credit Card Required</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Builder Tools
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrate Anylayer into your dApp with our comprehensive SDK, APIs, and developer tools.
              Build the future of on-chain reputation with 300 free credits to kickstart your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-6">Quick Start</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with Anylayer in minutes. Choose your integration method and start building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* NPM Installation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Terminal className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-black">Install SDK</h3>
              </div>
              
              <div className="bg-black rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400 text-sm font-mono">terminal</span>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <code className="text-green-400 font-mono">
                  npm install @anylayer/sdk
                </code>
              </div>
              
              <p className="text-gray-600">
                Install our TypeScript SDK with full type safety and comprehensive documentation.
              </p>
            </motion.div>

            {/* Code Example */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Code className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-black">Basic Usage</h3>
              </div>
              
              <div className="bg-black rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-green-400">{`import { Anylayer } from '@anylayer/sdk';

const anylayer = new Anylayer({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

const score = await anylayer.getScore(
  '0x742d35Cc6634C0532925a3b8d4'
);`}</code>
                </pre>
              </div>
              
              <p className="text-gray-600">
                Simple, intuitive API that gets you up and running in minutes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDK Features */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-6">SDK Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to integrate reputation scoring into your application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Zero-Knowledge Proofs',
                description: 'Generate and verify ZK proofs for reputation claims without revealing sensitive data.',
                color: 'text-blue-600',
                bgColor: 'bg-blue-50'
              },
              {
                icon: Database,
                title: 'Multi-Chain Support',
                description: 'Query reputation data across Ethereum, Base, Polygon, Arbitrum, and more.',
                color: 'text-green-600',
                bgColor: 'bg-green-50'
              },
              {
                icon: Zap,
                title: 'Real-time Updates',
                description: 'Subscribe to live reputation updates with WebSocket connections.',
                color: 'text-yellow-600',
                bgColor: 'bg-yellow-50'
              },
              {
                icon: Code,
                title: 'TypeScript First',
                description: 'Full type safety with comprehensive TypeScript definitions and IntelliSense.',
                color: 'text-purple-600',
                bgColor: 'bg-purple-50'
              },
              {
                icon: Terminal,
                title: 'CLI Tools',
                description: 'Command-line interface for testing, deployment, and reputation management.',
                color: 'text-red-600',
                bgColor: 'bg-red-50'
              },
              {
                icon: FileText,
                title: 'Rich Documentation',
                description: 'Interactive docs with live examples, tutorials, and comprehensive API reference.',
                color: 'text-orange-600',
                bgColor: 'bg-orange-50'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-6">Code Examples</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-use code snippets for common use cases.
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Get User Score */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Get User Score</h3>
                <button className="text-gray-400 hover:text-white">
                  <Copy className="h-5 w-5" />
                </button>
              </div>
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`// Get comprehensive reputation score for a user
const userScore = await anylayer.getScore('0x742d35Cc6634C0532925a3b8d4');

console.log({
  overall: userScore.overall,      // 750
  lending: userScore.lending,      // 650
  trading: userScore.trading,      // 820
  staking: userScore.staking,      // 780
  level: userScore.level,          // "Gold"
  percentile: userScore.percentile // 85
});`}
              </pre>
            </motion.div>

            {/* Generate ZK Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Generate ZK Proof</h3>
                <button className="text-gray-400 hover:text-white">
                  <Copy className="h-5 w-5" />
                </button>
              </div>
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`// Generate zero-knowledge proof for reputation claim
const proof = await anylayer.generateProof({
  user: '0x742d35Cc6634C0532925a3b8d4',
  claim: 'score_above_500',
  includePrivateData: false
});

// Verify proof without revealing actual score
const isValid = await anylayer.verifyProof(proof);
console.log('Proof valid:', isValid); // true`}
              </pre>
            </motion.div>

            {/* Real-time Updates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Real-time Updates</h3>
                <button className="text-gray-400 hover:text-white">
                  <Copy className="h-5 w-5" />
                </button>
              </div>
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`// Subscribe to real-time score updates
const subscription = anylayer.subscribe('0x742d35Cc6634C0532925a3b8d4', {
  onScoreUpdate: (newScore) => {
    console.log('Score updated:', newScore);
    updateUI(newScore);
  },
  onAchievement: (achievement) => {
    console.log('New achievement:', achievement);
    showNotification(achievement);
  }
});

// Unsubscribe when component unmounts
subscription.unsubscribe();`}
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-6">Developer Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build successfully with Anylayer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: 'Documentation',
                description: 'Complete API reference and integration guides',
                link: '/docs',
                linkText: 'Read Docs'
              },
              {
                icon: Github,
                title: 'GitHub',
                description: 'Open source examples and community contributions',
                link: 'https://github.com/metalanddev/ZKScoreEVM',
                linkText: 'View Code'
              },
              {
                icon: Download,
                title: 'SDK Download',
                description: 'Latest SDK releases and version history',
                link: '#',
                linkText: 'Download'
              },
              {
                icon: ExternalLink,
                title: 'Playground',
                description: 'Interactive environment to test the API',
                link: '#',
                linkText: 'Try Now'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <resource.icon className="h-12 w-12 text-black mb-6" />
                <h3 className="text-xl font-bold text-black mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center space-x-2 text-black font-semibold hover:text-gray-700 transition-colors"
                >
                  <span>{resource.linkText}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Build?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of developers building the future of on-chain reputation.
              Get started today with 300 free credits and comprehensive documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get 300 Free Credits
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                View Examples
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
