import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

export default function BlogPostView({ post, onBack }: BlogPostViewProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to all posts
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight leading-tight">
            AutoDrive
          </h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96 overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-8 border-b border-slate-200">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {post.content.intro}
              </p>

              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {section.heading}
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}

              <div className="mt-12 p-6 bg-slate-50 rounded-lg border-l-4 border-slate-900">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-slate-900 hover:text-slate-700 font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to all posts
              </button>
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
