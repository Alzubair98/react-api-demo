import axios from "axios";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function ApiDemo() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      ".api-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="api-container h-screen bg-gray-900 text-white p-10 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">API Demo 🔍</h2>

      {loading ? (
        <p className="text-center text-gray-400">Loading posts...</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-5 bg-gray-800 rounded-xl shadow hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {post.title}
              </h3>
              <p className="text-gray-300 mt-2">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
