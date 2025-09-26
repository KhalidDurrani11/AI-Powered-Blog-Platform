
import type { User, Post, Comment } from './types';

export const USERS: User[] = [
  { id: 'u1', name: 'Alex Nova', avatarUrl: 'https://i.pravatar.cc/150?u=u1', email: 'alex.nova@example.com' },
  { id: 'u2', name: 'Jasmine Lee', avatarUrl: 'https://i.pravatar.cc/150?u=u2', email: 'jasmine.lee@example.com' },
  { id: 'u3', name: 'Kenji Tanaka', avatarUrl: 'https://i.pravatar.cc/150?u=u3', email: 'kenji.tanaka@example.com' },
];

export const POSTS: Post[] = [
  {
    id: 'p1',
    title: 'The Future of AI in Web Development',
    content: `
# The Future of AI in Web Development

Artificial Intelligence (AI) is no longer a concept from science fiction; it's a transformative force reshaping industries, and web development is no exception. From automated coding to intelligent user interfaces, AI is set to revolutionize how we build and interact with websites and applications.

## 1. AI-Powered Code Assistants

Tools like GitHub Copilot and Tabnine are already changing the game. They provide intelligent code completions, suggest entire functions, and even help debug complex problems. This accelerates the development process, reduces boilerplate, and allows developers to focus on higher-level logic.

\`\`\`javascript
// Example of AI-suggested code
function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}
\`\`\`

## 2. Automated Testing and QA

AI can automate the tedious process of quality assurance. AI-driven tools can crawl a website, identify visual regressions, find broken links, and even perform user flow testing by simulating human interaction. This leads to more robust applications and faster release cycles.

## 3. Personalized User Experiences

AI algorithms can analyze user behavior in real-time to deliver highly personalized content. Imagine a news website that reorders articles based on your reading habits, or an e-commerce site that shows product recommendations so accurate they feel psychic.

> "The best way to predict the future is to invent it." - Alan Kay

## Conclusion

The integration of AI into web development is not about replacing developers but empowering them. By handling repetitive tasks and providing powerful insights, AI allows us to build more intelligent, personalized, and efficient web experiences than ever before. The future is bright, and it's being written in code—with a little help from our AI friends.
    `,
    authorId: 'u1',
    createdAt: '2024-07-20T10:00:00Z',
    tags: ['AI', 'Web Development', 'Future Tech'],
    imageUrl: 'https://picsum.photos/seed/p1/800/400',
    views: 1250,
  },
  {
    id: 'p2',
    title: 'Mastering Tailwind CSS for Rapid UI Development',
    content: `
# Mastering Tailwind CSS

Tailwind CSS has taken the frontend world by storm, offering a utility-first approach that enables developers to build custom designs without leaving their HTML.

## Core Concepts

*   **Utility-First:** Instead of writing custom CSS classes, you apply pre-existing utility classes directly in your markup.
*   **Responsive Design:** Use responsive prefixes like \`md:\` and \`lg:\` to style elements at different breakpoints.
*   **Just-in-Time (JIT) Compiler:** The JIT compiler generates your CSS on-demand by scanning your template files, resulting in tiny production builds.

\`\`\`html
<div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
\`\`\`
    `,
    authorId: 'u2',
    createdAt: '2024-07-18T14:30:00Z',
    tags: ['CSS', 'TailwindCSS', 'Frontend'],
    imageUrl: 'https://picsum.photos/seed/p2/800/400',
    views: 2800,
  },
  {
    id: 'p3',
    title: 'A Deep Dive into React Hooks',
    content: `
# A Deep Dive into React Hooks

Hooks are functions that let you "hook into" React state and lifecycle features from function components.

## Most Common Hooks
1.  **useState:** Lets you add React state to function components.
2.  **useEffect:** Lets you perform side effects in function components.
3.  **useContext:** Accepts a context object and returns the current context value.

| Hook          | Purpose                       |
|---------------|-------------------------------|
| \`useState\`    | Managing local component state|
| \`useEffect\`   | Handling side effects         |
| \`useReducer\`  | Complex state logic           |
| \`useCallback\` | Memoizing functions           |
| \`useMemo\`     | Memoizing values              |
    `,
    authorId: 'u1',
    createdAt: '2024-07-15T09:00:00Z',
    tags: ['React', 'JavaScript', 'Hooks'],
    imageUrl: 'https://picsum.photos/seed/p3/800/400',
    views: 3100,
  },
   {
    id: 'p4',
    title: 'The Rise of Serverless Architectures',
    content: `
# The Rise of Serverless Architectures

Serverless computing allows you to build and run applications and services without thinking about servers.

## Key Benefits
- **No Server Management:** You don't have to provision or manage any servers.
- **Flexible Scaling:** Your application can be automatically scaled up or down by the cloud provider.
- **Pay for Value:** You pay only for the compute time you consume.

This shift in paradigm allows developers to focus purely on their application code and business logic, leading to faster innovation and reduced operational overhead.
    `,
    authorId: 'u3',
    createdAt: '2024-07-21T11:00:00Z',
    tags: ['Serverless', 'Cloud', 'Architecture'],
    imageUrl: 'https://picsum.photos/seed/p4/800/400',
    views: 980,
  },
  {
    id: 'p5',
    title: 'Building Scalable Microservices with Node.js',
    content: `
# Building Scalable Microservices with Node.js

Microservices architecture has become the go-to approach for building large-scale applications. Node.js, with its event-driven, non-blocking I/O model, is perfectly suited for creating efficient microservices.

## Why Node.js for Microservices?

Node.js offers several advantages for microservices development:

### 1. High Performance
- **Event Loop:** Single-threaded event loop handles thousands of concurrent connections
- **Non-blocking I/O:** Operations don't block the main thread
- **V8 Engine:** Google's V8 JavaScript engine provides excellent performance

### 2. Rich Ecosystem
- **NPM:** Over 1 million packages available
- **Express.js:** Minimal and flexible web framework
- **Socket.io:** Real-time communication capabilities

### 3. Developer Productivity
- **JavaScript Everywhere:** Same language for frontend and backend
- **Fast Development:** Quick prototyping and iteration
- **JSON Native:** Perfect for API communication

## Best Practices

\`\`\`javascript
// Example microservice structure
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api/v1', require('./routes'));

module.exports = app;
\`\`\`

## Service Communication

Microservices need to communicate effectively:

- **REST APIs:** Simple HTTP-based communication
- **Message Queues:** Asynchronous communication with Redis/RabbitMQ
- **GraphQL:** Flexible data querying
- **gRPC:** High-performance RPC framework

## Conclusion

Node.js provides an excellent foundation for building scalable microservices. Its performance characteristics, rich ecosystem, and developer-friendly nature make it an ideal choice for modern distributed systems.

> "The best way to predict the future is to build it." - David Heinemeier Hansson
    `,
    authorId: 'u2',
    createdAt: '2024-07-22T15:30:00Z',
    tags: ['Node.js', 'Microservices', 'Backend', 'Architecture'],
    imageUrl: 'https://picsum.photos/seed/p5/800/400',
    views: 2100,
  },
  {
    id: 'p6',
    title: 'The Evolution of Web Security: From HTTP to HTTPS and Beyond',
    content: `
# The Evolution of Web Security: From HTTP to HTTPS and Beyond

Web security has evolved dramatically since the early days of the internet. From simple HTTP to sophisticated HTTPS implementations, and now with emerging technologies like WebAuthn and Zero Trust architectures.

## The HTTP Era

In the early days, HTTP (HyperText Transfer Protocol) was the standard for web communication. However, it had significant security vulnerabilities:

- **Plain Text Transmission:** All data was sent in clear text
- **No Authentication:** No way to verify server identity
- **Vulnerable to Interception:** Easy for attackers to intercept and modify data

## The HTTPS Revolution

HTTPS (HTTP Secure) introduced encryption and authentication:

### Key Features
- **SSL/TLS Encryption:** Data is encrypted in transit
- **Certificate-based Authentication:** Servers are verified through certificates
- **Data Integrity:** Ensures data hasn't been tampered with

\`\`\`bash
# Example of checking SSL certificate
openssl s_client -connect example.com:443 -servername example.com
\`\`\`

## Modern Security Standards

### 1. HTTP/2 and HTTP/3
- **Binary Protocol:** More efficient than text-based HTTP/1.1
- **Multiplexing:** Multiple requests over a single connection
- **Server Push:** Proactive resource delivery

### 2. Content Security Policy (CSP)
\`\`\`html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline';">
\`\`\`

### 3. WebAuthn
- **Passwordless Authentication:** Uses biometrics and hardware tokens
- **Phishing Resistant:** Credentials are bound to specific domains
- **Strong Security:** Based on public key cryptography

## Zero Trust Architecture

The Zero Trust model assumes no implicit trust:

- **Never Trust, Always Verify:** Every request is authenticated and authorized
- **Least Privilege Access:** Users get minimum necessary permissions
- **Continuous Monitoring:** Real-time security monitoring

## Best Practices for 2024

1. **Use HTTPS Everywhere:** Redirect all HTTP traffic to HTTPS
2. **Implement HSTS:** HTTP Strict Transport Security headers
3. **Regular Security Audits:** Automated vulnerability scanning
4. **Keep Dependencies Updated:** Regular security patches
5. **Implement Rate Limiting:** Protect against DDoS attacks

## The Future of Web Security

Emerging technologies are shaping the future:

- **Quantum-Resistant Cryptography:** Preparing for quantum computing threats
- **AI-Powered Security:** Machine learning for threat detection
- **Blockchain Integration:** Decentralized identity and verification
- **Edge Computing Security:** Securing distributed computing environments

## Conclusion

Web security is an ongoing journey, not a destination. As threats evolve, so must our defenses. By staying informed about the latest security practices and technologies, we can build a safer web for everyone.

> "Security is not a product, but a process." - Bruce Schneier
    `,
    authorId: 'u1',
    createdAt: '2024-07-23T09:15:00Z',
    tags: ['Security', 'HTTPS', 'WebAuthn', 'Zero Trust'],
    imageUrl: 'https://picsum.photos/seed/p6/800/400',
    views: 1850,
  },
];

export const COMMENTS: Comment[] = [
  { id: 'c1', postId: 'p1', authorId: 'u2', text: 'Great insights on the future of AI! Really exciting stuff.', createdAt: '2024-07-20T11:00:00Z' },
  { id: 'c2', postId: 'p1', authorId: 'u3', text: 'The automated testing part is something I\'m particularly looking forward to.', createdAt: '2024-07-20T12:30:00Z' },
  { id: 'c3', postId: 'p2', authorId: 'u1', text: 'Tailwind has completely changed my workflow. This is a great summary!', createdAt: '2024-07-18T15:00:00Z' },
];
