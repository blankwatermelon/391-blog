import getCollection, { POST_COLLECTION } from "@/db";
import { PostProps } from "@/types/PostProps";

export default async function getAllPosts(): Promise<PostProps[]> {
  const postsCollection = await getCollection(POST_COLLECTION);
  const data = await postsCollection.find({}).toArray();

  const posts: PostProps[] = data.map((p) => ({
    id: p.id.toHexString(),
    title: p.title,
    content: p.content,
    upvotes: p.upvotes,
    downvotes: p.downvotes,
  }));
  return posts.reverse();
}
