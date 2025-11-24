import { useState } from "react";

export default function PostForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return <h1>Cretae Post</h1>;
}
