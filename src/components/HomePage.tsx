import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';

interface HomePageProps {
  posts: BlogPost[];
  onSelectPost: (postId: string) => void;
}

export default function HomePage({ posts, onSelectPost }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold mb-3 tracking-tight">AutoDrive</h1>
          <p className="text-slate-300 text-lg">Your destination for automotive excellence and insights</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col"
              onClick={() => onSelectPost(post.id)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-slate-900 mb-3 line-clamp-2 leading-tight">
                  {post.title}
                </h2>

                <p className="text-slate-600 mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-slate-700 font-medium">{post.author}</span>
                  <button
                    className="flex items-center gap-2 text-slate-900 font-semibold hover:gap-3 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPost(post.id);
                    }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">AutoDrive</h3>
            <p className="text-slate-400">Driving passion through words</p>
            <p className="text-slate-500 text-sm mt-4">© 2023 AutoDrive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
