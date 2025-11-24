import { useState, useEffect } from "react";
import { getPosts } from "../services/postService";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return <></>;
}
