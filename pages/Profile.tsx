
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser, SignOutButton } from '@clerk/clerk-react';
import { POSTS } from '../constants';
import { Edit, Trash2 } from 'lucide-react';
import type { Post } from '../types';

const Profile: React.FC = () => {
  const { user, isSignedIn } = useUser();
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  // For demo purposes, we'll show all posts since we don't have user-specific posts
  // In a real app, you would filter by the actual user ID from Clerk
  React.useEffect(() => {
    if (isSignedIn) {
      setUserPosts(POSTS);
    }
  }, [isSignedIn]);

  if (!isSignedIn) {
    return (
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Please sign in to view your profile</h1>
          <Link to="/login" className="text-cyan-500 hover:underline">Sign In</Link>
        </div>
      </div>
    );
  }

  const handleDelete = (postId: string) => {
    if(window.confirm('Are you sure you want to delete this post?')) {
        setUserPosts(posts => posts.filter(p => p.id !== postId));
        // In a real app, you would also make an API call to delete the post.
    }
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in space-y-12">
      <section className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 p-8 bg-white dark:bg-slate-800/50 rounded-lg shadow-md">
        <img src={user?.imageUrl} alt={user?.fullName || 'User'} className="w-24 h-24 rounded-full ring-4 ring-cyan-400" />
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">{user?.fullName || 'User'}</h1>
          <p className="text-slate-500 dark:text-slate-400">{user?.primaryEmailAddress?.emailAddress}</p>
          <SignOutButton>
            <button className="mt-4 px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
              Sign Out
            </button>
          </SignOutButton>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Your Posts</h2>
        <div className="space-y-4">
          {userPosts.length > 0 ? userPosts.map(post => (
            <div key={post.id} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/50 rounded-lg shadow-sm">
                <div>
                    <Link to={`/blogs/${post.id}`} className="font-semibold text-lg hover:text-cyan-400 transition-colors">
                        {post.title}
                    </Link>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Published on {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 text-slate-500 hover:text-blue-500 transition-colors">
                        <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(post.id)} className="p-2 text-slate-500 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
          )) : (
            <p className="text-center p-8 bg-slate-100 dark:bg-slate-800 rounded-lg">You haven't created any posts yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;
