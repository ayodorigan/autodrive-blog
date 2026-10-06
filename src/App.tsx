import { useState } from 'react';
import HomePage from './components/HomePage';
import BlogPostView from './components/BlogPostView';
import { blogPosts } from './data/blogPosts';
import { DIRECT_LINK_URL } from './config/ads';

function App() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = selectedPostId
    ? blogPosts.find((post) => post.id === selectedPostId)
    : null;

  const openPost = (postId: string) => {
    // Opening a post also opens the direct link in a new tab. Must happen
    // inside the click handler so the browser treats it as user-initiated.
    window.open(DIRECT_LINK_URL, '_blank', 'noopener');
    setSelectedPostId(postId);
  };

  return (
    <>
      {selectedPost ? (
        <BlogPostView post={selectedPost} onBack={() => setSelectedPostId(null)} />
      ) : (
        <HomePage posts={blogPosts} onSelectPost={openPost} />
      )}
    </>
  );
}

export default App;
