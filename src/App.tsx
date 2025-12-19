import { useState } from 'react';
import HomePage from './components/HomePage';
import BlogPostView from './components/BlogPostView';
import { blogPosts } from './data/blogPosts';

function App() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = selectedPostId
    ? blogPosts.find((post) => post.id === selectedPostId)
    : null;

  return (
    <>
      {selectedPost ? (
        <BlogPostView post={selectedPost} onBack={() => setSelectedPostId(null)} />
      ) : (
        <HomePage posts={blogPosts} onSelectPost={setSelectedPostId} />
      )}
    </>
  );
}

export default App;
