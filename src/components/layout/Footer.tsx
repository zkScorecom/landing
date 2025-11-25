import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-t border-slate-200 dark:border-slate-700 lg:ml-64">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2024 Anylayer. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Terms
            </Link>
            <Link href="/docs" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Docs
            </Link>
            <Link href="/support" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
