import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <img
        src="/Travel.jpg"
        alt={post.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.body}</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default PostDetails;