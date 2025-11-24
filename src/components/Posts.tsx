import { useState, useEffect, useRef } from "react";
import { getPosts } from "../services/postService";
import gsap from "gsap";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(response.data.slice(1, 10));
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0 && containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".post-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [posts]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10"
    >
      <h1 className="text-4xl text-white font-bold mb-8 text-center">
        Latest Posts 📰
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="post-card bg-gray-800 hover:bg-gray-700 transition-all rounded-xl p-6 shadow-lg hover:shadow-2xl border border-gray-700"
          >
            <h2 className="font-bold text-xl text-yellow-400 mb-3">
              {post.title}
            </h2>
            <p className="text-gray-300">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
