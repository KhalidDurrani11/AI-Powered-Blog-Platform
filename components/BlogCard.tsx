
import React from 'react';
import { Link } from 'react-router-dom';
import type { Post, User } from '../types';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: Post;
  author: User | undefined;
}

const getExcerpt = (content: string, length = 100): string => {
  const cleanedContent = content.replace(/#+\s/g, '').replace(/(\r\n|\n|\r)/gm, " ");
  if (cleanedContent.length <= length) return cleanedContent;
  return cleanedContent.substring(0, cleanedContent.lastIndexOf(' ', length)) + '...';
};


export const BlogCard: React.FC<BlogCardProps> = ({ post, author }) => {
  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group animate-fade-in">
        <Link to={`/blogs/${post.id}`}>
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
        </Link>
        <div className="p-6">
            <div className="flex items-center mb-4">
                {author && (
                    <img src={author.avatarUrl} alt={author.name} className="w-8 h-8 rounded-full mr-3" />
                )}
                <div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{author?.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white group-hover:text-cyan-400 transition-colors duration-300">
                <Link to={`/blogs/${post.id}`}>{post.title}</Link>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {getExcerpt(post.content)}
            </p>
            <Link to={`/blogs/${post.id}`} className="inline-flex items-center text-sm font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors">
                Read More <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
        </div>
    </div>
  );
};
