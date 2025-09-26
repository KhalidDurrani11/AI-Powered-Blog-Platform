
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const AppContent: React.FC = () => {
    const { theme } = useTheme();
    return (
        <div className={`${theme} transition-colors duration-300`}>
            <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
                <Navbar />
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogs/:id" element={<BlogDetail />} />
                        <Route path="/create" element={
                            <>
                                <SignedIn>
                                    <CreatePost />
                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn />
                                </SignedOut>
                            </>
                        } />
                        <Route path="/profile" element={
                            <>
                                <SignedIn>
                                    <Profile />
                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn />
                                </SignedOut>
                            </>
                        } />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    );
};


const App: React.FC = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ThemeProvider>
        <HashRouter>
            <AppContent />
        </HashRouter>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default App;
