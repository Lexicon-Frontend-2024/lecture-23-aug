import { ReactElement } from "react";
import { IPost } from "../interfaces";
import { PostActions, PostAuthor } from ".";

interface IPostProps {
  post: IPost;
}

export function Post({ post }: IPostProps): ReactElement {
  return (
    <article className="post">
      <PostAuthor author={post.author} />
      <p className="content">{post.content}</p>
      <figure className="figure">
        <img className="image" src={post.image} />
      </figure>
      <PostActions timestamp={post.timestamp}/>
    </article>
  );
}
