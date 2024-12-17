import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img
        src="/Travel1.jpg"
        alt={post.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.body.substring(0, 100)}...</p>
        <Link
          to={`/post/${post.id}`}
          className="text-blue-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;