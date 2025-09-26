
import React from 'react';
import { Feather } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-md font-bold text-slate-800 dark:text-white mb-4 md:mb-0">
            <Feather className="text-cyan-400" size={24} />
            <span>NexusAI Blog</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} NexusAI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
