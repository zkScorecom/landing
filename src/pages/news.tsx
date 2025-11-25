"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  imageUrl?: string;
}

const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Anylayer Launches Cross-Chain Reputation System',
    excerpt: 'Revolutionary zero-knowledge proof system now supports multi-chain reputation tracking across Ethereum, Polygon, and Base networks.',
    content: `Anylayer is proud to announce the launch of our groundbreaking cross-chain reputation system, enabling users to build and maintain their on-chain reputation across multiple blockchain networks.

## Key Features

The new system introduces several innovative features:

- **Multi-Chain Support**: Track reputation across Ethereum, Polygon, Base, and Arbitrum
- **Zero-Knowledge Proofs**: Maintain privacy while proving reputation
- **Unified Identity**: Single ZKS identity works across all supported chains
- **Real-Time Scoring**: Instant reputation updates across protocols

## Technical Implementation

Our cross-chain system leverages advanced cryptographic techniques to ensure data integrity and privacy. The implementation includes:

1. **Cross-Chain Bridges**: Secure data transfer between networks
2. **ZK-SNARK Proofs**: Privacy-preserving reputation verification
3. **Consensus Mechanisms**: Multi-chain validation of reputation scores
4. **Smart Contract Integration**: Seamless protocol integration

## Impact on DeFi

This launch represents a significant milestone for the DeFi ecosystem, enabling:

- Better lending rates based on cross-chain history
- Enhanced protocol access and privileges
- Reduced collateral requirements for proven users
- Improved risk assessment for protocols

The system is already being integrated by major DeFi protocols, with over 50 partners committed to supporting Anylayer reputation in their platforms.`,
    author: 'Anylayer Team',
    publishedAt: '2024-03-15T10:00:00Z',
    readTime: '5 min read',
    category: 'Product',
    tags: ['Cross-Chain', 'ZK-Proofs', 'DeFi', 'Launch'],
    featured: true,
    imageUrl: '/api/placeholder/800/400'
  },
  {
    id: '2',
    title: 'Partnership with Uniswap Labs Announced',
    excerpt: 'Anylayer integrates with Uniswap to provide reputation-based trading benefits and reduced fees for high-reputation users.',
    content: `We're excited to announce our strategic partnership with Uniswap Labs, bringing reputation-based benefits to the world's largest decentralized exchange.

## Partnership Benefits

This collaboration introduces several new features for Anylayer users:

- **Reduced Trading Fees**: Up to 50% fee reduction for high-reputation traders
- **Priority Access**: Early access to new Uniswap features and pools
- **Enhanced Liquidity Mining**: Bonus rewards for reputable liquidity providers
- **Governance Participation**: Weighted voting based on trading reputation

## Implementation Timeline

The integration will roll out in phases:

**Phase 1 (Q2 2024)**: Basic reputation tracking for Uniswap trades
**Phase 2 (Q3 2024)**: Fee reduction implementation
**Phase 3 (Q4 2024)**: Full governance integration

This partnership demonstrates the growing adoption of reputation systems in DeFi and validates Anylayer's approach to on-chain identity.`,
    author: 'Sarah Chen',
    publishedAt: '2024-03-10T14:30:00Z',
    readTime: '3 min read',
    category: 'Partnership',
    tags: ['Uniswap', 'Partnership', 'Trading', 'Fees'],
    featured: true,
    imageUrl: '/api/placeholder/800/400'
  },
  {
    id: '3',
    title: 'Anylayer Raises $25M Series A Funding',
    excerpt: 'Leading venture capital firms invest in Anylayer\'s vision for decentralized reputation infrastructure.',
    content: `Anylayer has successfully raised $25 million in Series A funding, led by Paradigm with participation from Coinbase Ventures, a16z crypto, and other prominent investors.

## Funding Details

The round was oversubscribed, demonstrating strong investor confidence in our vision:

- **Lead Investor**: Paradigm ($10M)
- **Strategic Investors**: Coinbase Ventures ($5M), a16z crypto ($5M)
- **Other Participants**: Multicoin Capital, Electric Capital, Robot Ventures

## Use of Funds

The funding will be used to:

1. **Team Expansion**: Hiring top talent in cryptography and blockchain development
2. **Product Development**: Accelerating our roadmap and new features
3. **Partnership Growth**: Expanding integrations with DeFi protocols
4. **Research & Development**: Advancing zero-knowledge proof technology

## Market Opportunity

The reputation infrastructure market is expected to grow significantly as DeFi matures. Our investors recognize the critical need for trustless reputation systems in decentralized finance.

"Anylayer is building the missing piece of DeFi infrastructure," said Matt Huang, Co-Founder of Paradigm. "Their approach to privacy-preserving reputation will unlock new possibilities for the entire ecosystem."`,
    author: 'Michael Rodriguez',
    publishedAt: '2024-03-05T09:15:00Z',
    readTime: '4 min read',
    category: 'Funding',
    tags: ['Funding', 'Series A', 'Paradigm', 'Investment'],
    featured: false,
    imageUrl: '/api/placeholder/800/400'
  },
  {
    id: '4',
    title: 'Technical Deep Dive: Zero-Knowledge Reputation Proofs',
    excerpt: 'Understanding the cryptographic foundations that make Anylayer\'s privacy-preserving reputation system possible.',
    content: `This technical article explores the cryptographic mechanisms behind Anylayer's zero-knowledge reputation system.

## Introduction to ZK-SNARKs

Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge (ZK-SNARKs) form the foundation of our reputation system. These cryptographic proofs allow users to demonstrate their reputation without revealing underlying transaction data.

## Implementation Architecture

Our system consists of several key components:

### Circuit Design
- **Reputation Aggregation Circuit**: Combines scores from multiple protocols
- **Threshold Proof Circuit**: Proves reputation above certain levels
- **Time-Weighted Circuit**: Accounts for reputation decay over time

### Proof Generation
The proof generation process involves:

1. **Data Collection**: Gathering on-chain activity data
2. **Score Calculation**: Computing reputation using proprietary algorithms
3. **Proof Creation**: Generating ZK-SNARK proofs of reputation levels
4. **Verification**: Allowing third parties to verify proofs without seeing data

## Privacy Guarantees

Our system provides several privacy guarantees:

- **Transaction Privacy**: Individual transactions remain private
- **Balance Privacy**: Account balances are not revealed
- **Activity Privacy**: Specific protocol interactions stay confidential
- **Selective Disclosure**: Users control what reputation aspects to reveal

## Performance Optimization

We've optimized our system for practical use:

- **Proof Size**: Constant size proofs (~200 bytes)
- **Verification Time**: Sub-second verification
- **Generation Time**: Under 10 seconds for complex proofs
- **Gas Costs**: Minimal on-chain verification costs

This technical foundation enables Anylayer to provide robust reputation services while maintaining user privacy.`,
    author: 'Dr. Alex Thompson',
    publishedAt: '2024-02-28T16:45:00Z',
    readTime: '8 min read',
    category: 'Technical',
    tags: ['ZK-SNARKs', 'Cryptography', 'Privacy', 'Technical'],
    featured: false,
    imageUrl: '/api/placeholder/800/400'
  },
  {
    id: '5',
    title: 'Community Spotlight: Top Anylayer Users',
    excerpt: 'Celebrating the community members who have built exceptional on-chain reputations and contributed to the ecosystem.',
    content: `This month, we're highlighting some of the most active and reputable members of the Anylayer community.

## Featured Community Members

### Julia Chen (@julia.zks)
- **Reputation Score**: 847
- **Specialization**: DeFi Lending
- **Achievement**: Maintained perfect lending record across 15 protocols
- **Community Impact**: Mentored 50+ new DeFi users

### Marcus Thompson (@defi-trader.zks)
- **Reputation Score**: 792
- **Specialization**: DEX Trading
- **Achievement**: $2M+ trading volume with minimal slippage
- **Community Impact**: Created educational trading content

### Sarah Kim (@yield-farmer.zks)
- **Reputation Score**: 756
- **Specialization**: Yield Farming
- **Achievement**: Optimized yield strategies across 20+ protocols
- **Community Impact**: Open-sourced yield optimization tools

## Community Initiatives

Our community continues to grow and contribute:

- **Educational Content**: 100+ tutorials created by community members
- **Protocol Integrations**: Community-driven integration requests
- **Bug Bounty Program**: $50K+ paid to security researchers
- **Governance Participation**: 85% voting participation rate

## Recognition Program

We're launching a new recognition program for outstanding community members:

- **Monthly Spotlights**: Featured community members
- **Reputation Badges**: Special recognition for achievements
- **Community Grants**: Funding for community projects
- **Conference Speaking**: Opportunities to represent Anylayer

Thank you to all community members who make Anylayer possible!`,
    author: 'Community Team',
    publishedAt: '2024-02-20T12:00:00Z',
    readTime: '6 min read',
    category: 'Community',
    tags: ['Community', 'Spotlight', 'Recognition', 'Users'],
    featured: false,
    imageUrl: '/api/placeholder/800/400'
  }
];

const categories = ['All', 'Product', 'Partnership', 'Funding', 'Technical', 'Community'];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const filteredNews = mockNews.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ZK</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Anylayer</span>
            </Link>
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
              <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">Docs</Link>
              <Link href="/builder" className="text-gray-600 hover:text-gray-900 transition-colors">Builder</Link>
              <Link href="/news" className="text-gray-900 font-medium">News</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Anylayer News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, partnerships, and insights from the Anylayer ecosystem
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured News</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => router.push(`/news/${article.id}`)}
                >
                  {article.imageUrl && (
                    <div className="aspect-video bg-gray-200 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {article.author}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        {regularNews.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => router.push(`/news/${article.id}`)}
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {article.author}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
