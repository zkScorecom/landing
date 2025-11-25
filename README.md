# Anylayer Landing Page

The official marketing and landing page for the Anylayer Platform - a decentralized reputation and trust scoring system built on zero-knowledge proofs.

## 🌟 Overview

This is a Next.js-based standalone web application that serves as the primary entry point for users discovering Anylayer. It provides an engaging, modern interface showcasing the platform's features, use cases, and value propositions.

## ✨ Features

- **Hero Section**: Eye-catching landing with animated elements
- **Feature Highlights**: Interactive showcase of Anylayer capabilities
- **Use Cases**: Real-world applications and integrations
- **Documentation Links**: Direct access to developer resources
- **Responsive Design**: Mobile-first, fully responsive layout
- **Performance Optimized**: Built with Next.js 15 for optimal speed
- **Modern UI**: Framer Motion animations and Tailwind CSS styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Web3**: RainbowKit, Wagmi, Viem
- **State Management**: Zustand
- **Charts**: Recharts
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/zkScorecom/landing.git

# Navigate to the project
cd landing

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
standalone-web-app/
├── public/               # Static assets
│   ├── achievements.png  # Feature images
│   ├── analytics.png
│   ├── banner*.png       # Hero banners
│   ├── favicon-logo.svg  # Logo
│   └── *.png            # Other images
├── src/
│   ├── components/      # React components
│   │   ├── Landing.tsx  # Main landing page component
│   │   └── layout/      # Layout components
│   ├── config/          # Configuration files
│   ├── pages/           # Next.js pages
│   │   ├── index.tsx    # Home page
│   │   ├── builder.tsx  # Builder tools
│   │   ├── docs.tsx     # Documentation
│   │   └── news/        # News & updates
│   ├── store/           # State management
│   └── styles/          # Global styles
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS config
├── tsconfig.json        # TypeScript config
└── vercel.json          # Vercel deployment config
```

## 🎨 Key Pages

### Home (`/`)
- Hero section with animated banners
- Feature highlights
- Use case demonstrations
- Call-to-action buttons

### Builder (`/builder`)
- Developer tools and resources
- Integration guides
- Code examples

### Docs (`/docs`)
- Documentation gateway
- API references
- Integration tutorials

### News (`/news`)
- Platform updates
- Announcements
- Blog posts

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://us-central1-zksscore.cloudfunctions.net/api
NEXT_PUBLIC_APP_URL=https://app.anylayer.org
NEXT_PUBLIC_CHAIN_ID=1
```

### Customization

- **Colors**: Edit `tailwind.config.js`
- **Fonts**: Update in `src/styles/globals.css`
- **Content**: Modify `src/components/Landing.tsx`
- **Logos**: Replace files in `public/`

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Core Web Vitals: All green

## 🔗 Related Links

- [Main Application](https://app.anylayer.org)
- [Documentation](https://docs.anylayer.org)
- [GitHub Repository](https://github.com/zkScorecom/landing)
- [Discord Community](https://discord.gg/anylayer)
- [Twitter](https://twitter.com/anylayer)

## 🤝 Contributing

We welcome contributions!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is part of the Anylayer Platform.

## 🆘 Support

- **Documentation**: [docs.anylayer.org](https://docs.anylayer.org)
- **Discord**: [Join our community](https://discord.gg/anylayer)
- **Email**: support@anylayer.org
- **Twitter**: [@anylayer](https://twitter.com/anylayer)

## 🏗️ Built With

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [RainbowKit](https://www.rainbowkit.com/) - Wallet connection
- [Lucide](https://lucide.dev/) - Icon library

## 📈 Roadmap

- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Interactive demos
- [ ] Video tutorials
- [ ] Case study section
- [ ] Partner showcase

## 🎯 About Anylayer

Anylayer is a decentralized reputation and trust scoring platform that enables users to build verifiable on-chain reputation while maintaining privacy through zero-knowledge proofs. Our scoring system analyzes wallet age, DeFi activity, NFT trading, and achievements to create comprehensive trust scores.

---

**Made with ❤️ by the Anylayer Team**

