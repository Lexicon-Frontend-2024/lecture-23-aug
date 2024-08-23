import { ReactElement } from "react";
import { IAuthor } from "../interfaces";

interface IPostAuthorProps {
  author: IAuthor;
}

export function PostAuthor({ author }: IPostAuthorProps): ReactElement {
  return (
    <div className="post-author">
      <span className="material-symbols-outlined">person</span>
      <div className="user">
        <p className="name">{author.name}</p>
        <p className="username">{author.username}</p>
      </div>
    </div>
  );
}
