
import React, { useState, useMemo } from 'react';
import { POSTS, USERS } from '../constants';
import { BlogCard } from '../components/BlogCard';
import type { Post } from '../types';

type SortType = 'Latest' | 'Popular';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSort, setActiveSort] = useState<SortType>('Latest');

  const filteredAndSortedPosts = useMemo(() => {
    const filtered = POSTS.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filtered.sort((a: Post, b: Post) => {
      if (activeSort === 'Popular') {
        return b.views - a.views;
      }
      // 'Latest' is default
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [searchTerm, activeSort]);

  return (
    <div className="space-y-12">
      <section className="text-center py-16 animate-fade-in-down">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-white mb-4">
          Blog Insights & Ideas, <span className="text-cyan-400">Powered by AI</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Explore the frontiers of technology, development, and creative thought on the Nexus Blog platform.
        </p>
      </section>

      <section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-2">
            {(['Latest', 'Popular'] as SortType[]).map(sortType => (
              <button
                key={sortType}
                onClick={() => setActiveSort(sortType)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSort === sortType
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {sortType}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full md:w-64 bg-slate-100 dark:bg-slate-800 border-transparent focus:ring-2 focus:ring-cyan-400 rounded-md py-2 pl-4 pr-10 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedPosts.map(post => (
            <BlogCard
              key={post.id}
              post={post}
              author={USERS.find(user => user.id === post.authorId)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
