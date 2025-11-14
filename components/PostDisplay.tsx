"use client";
import { PostProps } from "@/types/PostProps";
import { useState } from "react";
import PostPreview from "./PostPreview";
import NewPostForm from "./NewPostForm";

export default function PostsDisplay({
  inputPosts,
}: {
  inputPosts: PostProps[];
}) {
  const [posts, setPosts] = useState(inputPosts);

  return (
    <div className="flex flex-col items-center">
      <NewPostForm
        append={(newPost: PostProps) => {
          setPosts([...posts, newPost]);
        }}
        />
      {posts.map((p) => (
        <PostPreview key={p.id} post={p} />
      ))} 
    </div>
  );
}
