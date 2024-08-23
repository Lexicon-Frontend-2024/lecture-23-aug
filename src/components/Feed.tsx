import { ReactElement } from "react";
import { Post } from ".";
import { posts } from "../data";

export function Feed(): ReactElement {
  return (
    <main className="feed">
      {/* <Post post={posts[0]} />
      <Post post={posts[1]} /> */}

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}
