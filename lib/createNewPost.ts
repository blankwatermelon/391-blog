"use server";
import getCollection, { POST_COLLECTION } from "@/db";
import { PostProps } from "@/types/PostProps";

export default async function createNewPost(
  title: string,
  content: string
): Promise<PostProps> {
  console.log("creating new post");
  const p = {
    title: title,
    content: content,
    upvotes: 0,
    downvotes: 0,
  };

  const postsCollection = await getCollection(POST_COLLECTION);
  const res = await postsCollection.insertOne({ ...p });

  if (!res.acknowledged) {
    throw new Error("Failed to create new post");
  }

  return { ...p, id: res.insertedId.toHexString() };
}
