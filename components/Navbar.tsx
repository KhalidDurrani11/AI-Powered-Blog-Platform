
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Search, Feather } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useUser, SignInButton, SignOutButton } from '@clerk/clerk-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isSignedIn, user } = useUser();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative transition-colors duration-300 ${
      isActive
        ? 'text-cyan-400'
        : 'text-slate-600 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400'
    } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-cyan-400 after:transform after:scale-x-0 after:transition-transform after:duration-300 ${
      isActive ? 'after:scale-x-100' : 'group-hover:after:scale-x-100'
    }`;
    
  return (
    <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-slate-800 dark:text-white">
              <Feather className="text-cyan-400" size={28} />
              <span>Nexus Blog</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
              {isSignedIn && <NavLink to="/create" className={navLinkClass}>Create Post</NavLink>}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 bg-slate-200 dark:bg-slate-800 border border-transparent focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 rounded-md py-2 pl-10 pr-4 text-sm transition"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {isSignedIn ? (
               <div className="flex items-center space-x-2">
                 <Link to="/profile">
                    <img
                      src={user?.imageUrl}
                      alt="User profile"
                      className="w-9 h-9 rounded-full ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 ring-cyan-400 cursor-pointer"
                    />
                  </Link>
                  <SignOutButton>
                    <button className="px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors">
                      Sign Out
                    </button>
                  </SignOutButton>
               </div>
            ) : (
                <SignInButton>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 rounded-md transition-colors">
                    Sign In
                  </button>
                </SignInButton>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
