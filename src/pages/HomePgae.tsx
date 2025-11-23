import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <h1 ref={titleRef} className="text-5xl font-bold mb-8">
        ⚡ React API Demo
      </h1>

      <button
        onClick={() => navigate("/api")}
        className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-lg font-semibold shadow-lg"
      >
        Go to API Playground 🚀
      </button>
    </div>
  );
}
