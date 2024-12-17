import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const postsWithImages = response.data.slice(0, 6).map((post, index) => ({
          ...post,
          image: `/Travel1.jpg/post${index + 1}.jpg`, // Map each post to a local image
        }));
        setPosts(postsWithImages);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;