
import React from 'react';
import { Link } from 'react-router-dom';
import { SignIn } from '@clerk/clerk-react';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] animate-fade-in">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-slate-800 dark:text-white">Welcome Back</h1>
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">Sign in to continue to Nexus Blog</p>
        
        <div className="flex justify-center">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 'bg-cyan-500 hover:bg-cyan-600 text-white',
                card: 'shadow-none bg-transparent',
                headerTitle: 'text-slate-800 dark:text-white',
                headerSubtitle: 'text-slate-500 dark:text-slate-400',
                socialButtonsBlockButton: 'border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700',
                formFieldInput: 'bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white',
                footerActionLink: 'text-cyan-500 hover:text-cyan-600'
              }
            }}
          />
        </div>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          Don't have an account? <Link to="/register" className="font-medium text-cyan-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
