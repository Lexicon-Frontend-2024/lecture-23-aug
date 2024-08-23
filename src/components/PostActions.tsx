import { MouseEventHandler, ReactElement } from "react";

interface IPostActionsProps {
  timestamp: number;
}

export function PostActions({ timestamp }: IPostActionsProps): ReactElement {
  const handleOnClick: MouseEventHandler<HTMLDivElement> = (e) => {
    // We need to cast e.target to an HTMLElement in order to access the attributes of an actual HTMLElement.
    const target = e.target as HTMLElement;
    const classList = target.classList;

    if (target.tagName !== "SPAN") {
      console.log("This is not an icon you clicked");
      return;
    }

    if (classList.contains("favorite")) {
      console.log("favorites clicked");
    }

    if (classList.contains("chat-bubble")) {
      console.log("chat-bubble clicked");
    }

    if (classList.contains("upload")) {
      console.log("upload clicked");
    }
  };

  return (
    <div className="post-actions">
      <div className="actions" onClick={handleOnClick}>
        <span className="icon favorite material-symbols-outlined">favorite</span>
        <span className="icon chat-bubble material-symbols-outlined">chat_bubble</span>
        <span className="icon upload material-symbols-outlined">upload</span>
      </div>
      <p className="timestamp">{new Date(timestamp).toLocaleDateString()}</p>
    </div>
  );
}
