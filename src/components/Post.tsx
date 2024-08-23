import { ReactElement } from "react";
import { IPost } from "../interfaces";

interface IPostProps {
  post: IPost;
}

export function Post({ post }: IPostProps): ReactElement {
  return (
    <article className="post">
      {/* <PostAuthor /> */}
      <p className="content">{post.content}</p>
      <figure className="figure">
        <img className="image" src={post.image} />
      </figure>
      {/* <PostActions /> */}
    </article>
  );
}
