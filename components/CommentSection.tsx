
import React, { useState } from 'react';
import type { Comment as CommentType, User } from '../types';
import { COMMENTS, USERS } from '../constants';
import { useUser } from '@clerk/clerk-react';
import { Send } from 'lucide-react';

interface CommentSectionProps {
  postId: string;
}

const Comment: React.FC<{ comment: CommentType }> = ({ comment }) => {
  const author = USERS.find(u => u.id === comment.authorId);
  if (!author) return null;

  return (
    <div className="flex items-start space-x-4 py-4">
      <img src={author.avatarUrl} alt={author.name} className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">{author.name}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{new Date(comment.createdAt).toLocaleString()}</p>
        </div>
        <p className="text-slate-700 dark:text-slate-300 mt-1">{comment.text}</p>
      </div>
    </div>
  );
};

export const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<CommentType[]>(COMMENTS.filter(c => c.postId === postId));
  const [newComment, setNewComment] = useState('');
  const { user, isSignedIn } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && isSignedIn && user) {
      const commentToAdd: CommentType = {
        id: `c${Date.now()}`,
        postId,
        authorId: user.id, // Use Clerk user ID
        text: newComment,
        createdAt: new Date().toISOString(),
      };
      setComments(prev => [commentToAdd, ...prev]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Comments ({comments.length})</h3>
      {isSignedIn && (
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Join the discussion..."
              className="w-full p-4 pr-16 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
              rows={3}
            />
            <button
              type="submit"
              className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors disabled:opacity-50"
              disabled={!newComment.trim()}
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      )}
      <div className="space-y-4 divide-y divide-slate-200 dark:divide-slate-700">
        {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </div>
    </div>
  );
};
