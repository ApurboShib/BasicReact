import { useEffect, useState } from "react";
import Post from "./post";
import "./post.css";
export default function Posts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="box">
      <h3>Post of All Facebook users.</h3>

      {post.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
