import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import {
  Book,
  Code,
  Play,
  Copy,
  ExternalLink,
  ChevronRight,
  Search,
  FileText,
  Zap,
  Shield,
  Globe,
  Download,
  Terminal,
  Layers,
  Database,
  Key
} from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  icon: any;
  description: string;
  subsections: Array<{
    id: string;
    title: string;
    content: string;
  }>;
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Play,
    description: 'Quick start guide to integrate Anylayer into your application',
    subsections: [
      {
        id: 'installation',
        title: 'Installation',
        content: `# Install Anylayer SDK
npm install @anylayer/sdk

# Or with yarn
yarn add @anylayer/sdk

# Or with pnpm
pnpm add @anylayer/sdk`
      },
      {
        id: 'initialization',
        title: 'Initialize SDK',
        content: `import { Anylayer } from '@anylayer/sdk';

// Initialize with your API key
const anylayer = new Anylayer({
  apiKey: 'your-api-key',
  network: 'mainnet', // or 'testnet'
  version: 'v1'
});

// Connect to user's wallet
await anylayer.connect();`
      },
      {
        id: 'first-call',
        title: 'Your First API Call',
        content: `// Get user's Anylayer
const userScore = await anylayer.getScore('0x...');

console.log('User Score:', userScore.score);
console.log('Credit Rating:', userScore.creditRating);
console.log('Risk Level:', userScore.riskLevel);`
      }
    ]
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    icon: Code,
    description: 'Complete API documentation with examples',
    subsections: [
      {
        id: 'authentication',
        title: 'Authentication',
        content: `// API Key Authentication
const headers = {
  'Authorization': 'Bearer your-api-key',
  'Content-Type': 'application/json'
};

// Rate Limits:
// - 1000 requests per minute
// - 50,000 requests per day
// - Burst limit: 100 requests per second`
      },
      {
        id: 'endpoints',
        title: 'Core Endpoints',
        content: `// Get User Score
GET /api/v1/score/{address}

// Get User Identity
GET /api/v1/identity/{address}

// Get Score History
GET /api/v1/score/{address}/history

// Generate ZK Proof
POST /api/v1/proof/generate

// Verify ZK Proof
POST /api/v1/proof/verify`
      },
      {
        id: 'response-format',
        title: 'Response Format',
        content: `{
  "success": true,
  "data": {
    "address": "0x742d35Cc6634C532925a3b8D02eA01d8f2e6D6D7",
    "score": 847,
    "creditRating": "excellent",
    "riskLevel": "low",
    "lastUpdated": "2024-03-15T10:30:00Z",
    "breakdown": {
      "lending": 920,
      "trading": 780,
      "staking": 650,
      "defi": 890
    }
  },
  "meta": {
    "requestId": "req_abc123",
    "timestamp": "2024-03-15T10:30:00Z"
  }
}`
      }
    ]
  },
  {
    id: 'integration-guide',
    title: 'Integration Guide',
    icon: Layers,
    description: 'Step-by-step integration examples for popular frameworks',
    subsections: [
      {
        id: 'react-integration',
        title: 'React Integration',
        content: `import React, { useEffect, useState } from 'react';
import { Anylayer } from '@anylayer/sdk';

const ScoreDisplay = ({ address }) => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const anylayer = new Anylayer({
          apiKey: process.env.REACT_APP_ANYLAYER_API_KEY
        });
        
        const userScore = await anylayer.getScore(address);
        setScore(userScore);
      } catch (error) {
        console.error('Error fetching score:', error);
      } finally {
        setLoading(false);
      }
    };

    if (address) {
      fetchScore();
    }
  }, [address]);

  if (loading) return <div>Loading score...</div>;
  if (!score) return <div>Score not available</div>;

  return (
    <div className="score-display">
      <h3>Anylayer: {score.score}</h3>
      <p>Rating: {score.creditRating}</p>
    </div>
  );
};`
      },
      {
        id: 'nextjs-integration',
        title: 'Next.js Integration',
        content: `// pages/api/score/[address].js
import { Anylayer } from '@anylayer/sdk';

export default async function handler(req, res) {
  const { address } = req.query;
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const anylayer = new Anylayer({
      apiKey: process.env.ANYLAYER_API_KEY
    });
    
    const score = await anylayer.getScore(address);
    
    res.status(200).json({
      success: true,
      data: score
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}`
      },
      {
        id: 'smart-contract',
        title: 'Smart Contract Integration',
        content: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@anylayer/contracts/interfaces/IAnylayerOracle.sol";

contract LendingProtocol {
    IAnylayerOracle public zkScoreOracle;
    
    uint256 public constant MIN_SCORE = 600;
    
    constructor(address _zkScoreOracle) {
        zkScoreOracle = IAnylayerOracle(_zkScoreOracle);
    }
    
    function requestLoan(uint256 amount) external {
        uint256 userScore = zkScoreOracle.getScore(msg.sender);
        
        require(userScore >= MIN_SCORE, "Insufficient credit score");
        
        // Calculate loan terms based on score
        uint256 interestRate = calculateInterestRate(userScore);
        uint256 maxLoanAmount = calculateMaxLoan(userScore);
        
        require(amount <= maxLoanAmount, "Loan amount exceeds limit");
        
        // Process loan...
    }
    
    function calculateInterestRate(uint256 score) internal pure returns (uint256) {
        if (score >= 800) return 300; // 3%
        if (score >= 700) return 500; // 5%
        if (score >= 600) return 800; // 8%
        return 1200; // 12%
    }
}`
      }
    ]
  },
  {
    id: 'zero-knowledge',
    title: 'Zero-Knowledge Proofs',
    icon: Shield,
    description: 'Understanding and implementing privacy-preserving proofs',
    subsections: [
      {
        id: 'proof-generation',
        title: 'Generating Proofs',
        content: `// Generate a ZK proof for credit verification
const proof = await anylayer.generateProof({
  statement: 'creditScore >= 700',
  privateInputs: {
    creditScore: userScore.score,
    accountHistory: userScore.history
  },
  publicInputs: {
    minimumScore: 700,
    verificationTime: Date.now()
  }
});

console.log('Proof generated:', proof.proofData);
console.log('Verification key:', proof.verificationKey);`
      },
      {
        id: 'proof-verification',
        title: 'Verifying Proofs',
        content: `// Verify a ZK proof
const isValid = await anylayer.verifyProof({
  proof: proof.proofData,
  verificationKey: proof.verificationKey,
  publicInputs: {
    minimumScore: 700,
    verificationTime: proof.timestamp
  }
});

if (isValid) {
  console.log('Proof is valid - user meets credit requirements');
  // Grant access to service
} else {
  console.log('Proof is invalid');
  // Deny access
}`
      },
      {
        id: 'circuit-explanation',
        title: 'Circuit Design',
        content: `// Anylayer uses zk-SNARKs with the following circuit structure:

template CreditVerification() {
    // Private inputs (hidden from verifier)
    signal private creditScore;
    signal private accountAge;
    signal private transactionVolume;
    
    // Public inputs (known to verifier)
    signal input minimumScore;
    signal input currentTime;
    
    // Output
    signal output isEligible;
    
    // Constraints
    component scoreCheck = GreaterEqualThan(10);
    scoreCheck.in[0] <== creditScore;
    scoreCheck.in[1] <== minimumScore;
    
    // Additional privacy-preserving calculations
    component riskAssessment = RiskCalculation();
    riskAssessment.score <== creditScore;
    riskAssessment.age <== accountAge;
    riskAssessment.volume <== transactionVolume;
    
    isEligible <== scoreCheck.out * riskAssessment.eligible;
}

component main = CreditVerification();`
      }
    ]
  },
  {
    id: 'examples',
    title: 'Use Cases & Examples',
    icon: Zap,
    description: 'Real-world implementation examples and use cases',
    subsections: [
      {
        id: 'lending-protocol',
        title: 'Lending Protocol',
        content: `// DeFi Lending with Anylayer
class LendingService {
  constructor(anylayerApiKey) {
    this.anylayer = new Anylayer({ apiKey: anylayerApiKey });
  }
  
  async evaluateLoanApplication(userAddress, requestedAmount) {
    // Get user's credit score
    const userScore = await this.anylayer.getScore(userAddress);
    
    // Risk-based loan terms
    const loanTerms = this.calculateLoanTerms(userScore, requestedAmount);
    
    if (loanTerms.approved) {
      // Generate privacy-preserving proof for compliance
      const complianceProof = await this.anylayer.generateProof({
        statement: 'meetsRegulatoryRequirements',
        privateInputs: userScore,
        publicInputs: { regulatoryThreshold: 600 }
      });
      
      return {
        approved: true,
        amount: loanTerms.maxAmount,
        interestRate: loanTerms.rate,
        complianceProof: complianceProof
      };
    }
    
    return { approved: false, reason: 'Insufficient credit score' };
  }
  
  calculateLoanTerms(userScore, requestedAmount) {
    const maxLoanRatio = this.getMaxLoanRatio(userScore.score);
    const interestRate = this.getInterestRate(userScore.score);
    
    return {
      approved: userScore.score >= 500,
      maxAmount: Math.min(requestedAmount, userScore.score * maxLoanRatio),
      rate: interestRate,
      collateralRequired: userScore.score < 700
    };
  }
}`
      },
      {
        id: 'dex-integration',
        title: 'DEX Integration',
        content: `// Decentralized Exchange with Credit-based Features
class DEXWithCredit {
  async enableAdvancedTrading(userAddress) {
    const userScore = await this.anylayer.getScore(userAddress);
    
    // Unlock features based on credit score
    const features = {
      marginTrading: userScore.score >= 700,
      leverageMultiplier: this.getLeverageMultiplier(userScore.score),
      advancedOrders: userScore.score >= 600,
      priorityExecution: userScore.score >= 800
    };
    
    return features;
  }
  
  async calculateTradingFees(userAddress, tradeVolume) {
    const userScore = await this.anylayer.getScore(userAddress);
    
    // Lower fees for higher credit scores
    const baseFee = 0.003; // 0.3%
    const discount = this.getFeeDiscount(userScore.score);
    
    return {
      fee: baseFee * (1 - discount),
      discount: discount * 100, // percentage
      eligibleForRebates: userScore.score >= 750
    };
  }
  
  getLeverageMultiplier(score) {
    if (score >= 800) return 10;
    if (score >= 700) return 5;
    if (score >= 600) return 3;
    return 1; // No leverage
  }
}`
      },
      {
        id: 'insurance-protocol',
        title: 'Insurance Protocol',
        content: `// DeFi Insurance with Risk-based Pricing
class InsuranceProtocol {
  async calculatePremium(userAddress, coverageAmount, duration) {
    const userScore = await this.anylayer.getScore(userAddress);
    
    // Risk assessment based on credit score
    const riskLevel = this.assessRisk(userScore);
    const basePremium = coverageAmount * 0.02; // 2% base rate
    
    const premium = basePremium * riskLevel.multiplier;
    
    return {
      premium,
      riskLevel: riskLevel.level,
      maxCoverage: this.getMaxCoverage(userScore.score),
      deductible: this.getDeductible(userScore.score)
    };
  }
  
  assessRisk(userScore) {
    if (userScore.score >= 800) {
      return { level: 'low', multiplier: 0.7 };
    } else if (userScore.score >= 600) {
      return { level: 'medium', multiplier: 1.0 };
    } else {
      return { level: 'high', multiplier: 1.5 };
    }
  }
  
  async processClaimWithProof(userAddress, claimAmount) {
    // Generate proof that user is eligible for claim
    const eligibilityProof = await this.anylayer.generateProof({
      statement: 'hasValidInsurancePolicy',
      privateInputs: {
        policyDetails: await this.getUserPolicy(userAddress),
        claimHistory: await this.getClaimHistory(userAddress)
      },
      publicInputs: {
        claimAmount,
        currentTime: Date.now()
      }
    });
    
    return eligibilityProof;
  }
}`
      }
    ]
  }
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [activeSubsection, setActiveSubsection] = useState('installation');
  const [searchTerm, setSearchTerm] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const filteredSections = docSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.subsections.some(sub => 
      sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const currentSection = docSections.find(s => s.id === activeSection);
  const currentSubsection = currentSection?.subsections.find(s => s.id === activeSubsection);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Documentation</h1>
          <p className="text-gray-600">Complete guide to integrating Anylayer into your application</p>
        </div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-80 flex-shrink-0"
          >
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
              <nav className="space-y-2">
                {filteredSections.map((section) => (
                  <div key={section.id}>
                    <button
                      onClick={() => {
                        setActiveSection(section.id);
                        setActiveSubsection(section.subsections[0]?.id);
                      }}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-black text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <section.icon className={`h-5 w-5 ${
                        activeSection === section.id ? 'text-white' : 'text-gray-500'
                      }`} />
                      <span className="font-medium">{section.title}</span>
                    </button>
                    
                    {activeSection === section.id && (
                      <div className="ml-8 mt-2 space-y-1">
                        {section.subsections.map((subsection) => (
                          <button
                            key={subsection.id}
                            onClick={() => setActiveSubsection(subsection.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              activeSubsection === subsection.id
                                ? 'bg-gray-100 text-black font-medium'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {subsection.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              {currentSection && currentSubsection && (
                <>
                  {/* Breadcrumb */}
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <span>{currentSection.title}</span>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-black font-medium">{currentSubsection.title}</span>
                  </div>

                  {/* Content */}
                  <div className="prose max-w-none">
                    <h1 className="text-2xl font-bold text-black mb-4">
                      {currentSubsection.title}
                    </h1>
                    
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard(currentSubsection.content)}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy code"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{currentSubsection.content}</code>
                      </pre>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-gray-200">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                        <Play className="h-4 w-4" />
                        <span>Try in Playground</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Download className="h-4 w-4" />
                        <span>Download Example</span>
                      </button>
                      
                      <a
                        href="https://github.com/anylayer/examples"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View on GitHub</span>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Related Resources */}
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-black mb-4">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Terminal className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-black">API Playground</span>
                  </div>
                  <p className="text-sm text-gray-600">Test API endpoints interactively</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Database className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-black">Sample Data</span>
                  </div>
                  <p className="text-sm text-gray-600">Test with realistic mock data</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Key className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-black">API Keys</span>
                  </div>
                  <p className="text-sm text-gray-600">Manage your API credentials</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
