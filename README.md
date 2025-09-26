# Nexus Blog - AI-Powered Blog Platform

A modern, responsive blog platform built with React, TypeScript, and Clerk authentication. Features a beautiful dark/light theme, real-time search, and a comprehensive content management system.

## 🚀 Features

- **🔐 Clerk Authentication** - Secure user authentication and management
- **🌙 Dark/Light Theme** - Toggle between themes with smooth transitions
- **📱 Responsive Design** - Works perfectly on all devices
- **🔍 Real-time Search** - Search through blog posts instantly
- **📝 Markdown Support** - Rich text editing with live preview
- **💬 Comments System** - Interactive commenting for blog posts
- **📊 Post Analytics** - View counts and engagement metrics
- **🎨 Modern UI** - Beautiful, clean interface with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Routing**: React Router DOM
- **Markdown**: React Markdown with GFM support
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KhalidDurrani11/AI-Powered-Blog-Platform.git
   cd AI-Powered-Blog-Platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
   ```

4. **Get your Clerk publishable key**
   - Sign up at [clerk.com](https://clerk.com)
   - Create a new application
   - Copy your publishable key from the dashboard
   - Add it to your `.env` file

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## 🎯 Usage

### For Readers
- Browse blog posts on the homepage
- Use the search functionality to find specific content
- Read full blog posts with markdown rendering
- Leave comments on posts (requires authentication)
- Toggle between dark and light themes

### For Authors
- Sign up/Sign in using Clerk authentication
- Create new blog posts with markdown editor
- Preview posts in real-time
- Manage your profile and posts
- View post analytics

## 📁 Project Structure

```
├── components/          # Reusable React components
│   ├── BlogCard.tsx    # Blog post card component
│   ├── CommentSection.tsx # Comments functionality
│   ├── Footer.tsx      # Site footer
│   └── Navbar.tsx      # Navigation bar
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── BlogDetail.tsx  # Individual blog post
│   ├── CreatePost.tsx  # Post creation form
│   ├── Profile.tsx     # User profile
│   ├── Login.tsx       # Sign in page
│   └── Register.tsx    # Sign up page
├── hooks/              # Custom React hooks
│   └── useTheme.tsx    # Theme management
├── constants.ts        # Application constants
├── types.ts           # TypeScript type definitions
└── App.tsx            # Main application component
```

## 🎨 Customization

### Adding New Blog Posts
Edit `constants.ts` to add new posts:
```typescript
export const POSTS: Post[] = [
  {
    id: 'p7',
    title: 'Your New Post Title',
    content: `# Your Post Content in Markdown`,
    authorId: 'u1',
    createdAt: '2024-07-24T10:00:00Z',
    tags: ['Tag1', 'Tag2'],
    imageUrl: 'https://picsum.photos/seed/p7/800/400',
    views: 0,
  },
  // ... existing posts
];
```

### Styling
The project uses Tailwind CSS. Customize the theme in `index.html` or add custom styles in `index.css`.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Clerk](https://clerk.com) for authentication
- [Tailwind CSS](https://tailwindcss.com) for styling
- [React](https://reactjs.org) for the framework
- [Vite](https://vitejs.dev) for the build tool

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact [@KhalidDurrani11](https://github.com/KhalidDurrani11).

---

⭐ **Star this repository if you found it helpful!**
