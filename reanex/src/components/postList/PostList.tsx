import React, { useEffect } from "react";
import PostCard from "../postCard/PostCard";
import { PostProps } from "@/types/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("HTTP error " + res.status);
  }

  return res.json();
}

const PostList = async () => {
  const data: PostProps[] = await getData();

  return (
    <div className="postList">
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
