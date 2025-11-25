import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Tag } from 'lucide-react';
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

interface NewsArticlePageProps {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
}

export default function NewsArticlePage({ article, relatedArticles }: NewsArticlePageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  // Sanitize and escape HTML content to prevent XSS
  const escapeHtml = (text: string) => {
    if (typeof window === 'undefined') {
      // Server-side: basic escaping
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
    // Client-side: use DOM
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  // Convert markdown-like content to HTML with proper sanitization
  const formatContent = (content: string) => {
    // First escape any existing HTML to prevent XSS
    const escapedContent = escapeHtml(content);
    
    return escapedContent
      .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
      .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/- (.*)/g, '<li class="mb-2">$1</li>')
      .replace(/(\d+)\. (.*)/g, '<li class="mb-2">$2</li>')
      .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-4">')
      .replace(/^/, '<p class="text-gray-700 leading-relaxed mb-4">')
      .replace(/$/, '</p>');
  };

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to News
        </Link>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between py-4 border-t border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {article.author.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-gray-900">{article.author}</div>
                <div className="text-sm text-gray-500">Author</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={shareArticle}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Share article"
              >
                <Share2 className="h-5 w-5" />
              </button>
              <button
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Bookmark article"
              >
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Article Image */}
        {article.imageUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="aspect-video bg-gradient-to-r from-orange-500 to-red-600 rounded-xl opacity-20"></div>
          </motion.div>
        )}

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
        />

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border-t border-gray-200 pt-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/news/${relatedArticle.id}`}
                  className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {relatedArticle.category}
                    </span>
                    <span className="text-xs text-gray-500">{relatedArticle.readTime}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockNews.map((article) => ({
    params: { id: article.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = mockNews.find((article) => article.id === params?.id);

  if (!article) {
    return {
      notFound: true,
    };
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = mockNews
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 2);

  return {
    props: {
      article,
      relatedArticles,
    },
  };
};
