import { ReactElement } from "react";
import { ILink } from "../interfaces";

interface ILinkProps {
  link: ILink;
}

export function Link(props: ILinkProps): ReactElement {
  return (
    <a href={props.link.href} className="link">
      {props.link.label}
    </a>
  );
}
