
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useUser } from '@clerk/clerk-react';

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend.
    // For now, we'll just log it and redirect.
    console.log({ title, content });
    alert('Post created successfully! (Check console)');
    navigate('/');
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md p-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
            placeholder="Enter your post title..."
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Markdown Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-96 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md p-3 font-mono text-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
              placeholder="Write your post in Markdown..."
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Live Preview
            </label>
            <div className="w-full h-96 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md p-3 overflow-y-auto">
              <div className="prose prose-sm dark:prose-invert max-w-none prose-a:text-cyan-500 hover:prose-a:text-cyan-600">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {content || 'Preview will appear here...'}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition-colors disabled:opacity-50"
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
