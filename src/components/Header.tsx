import { ReactElement } from "react";
import { ILink, Navbar } from ".";
import linksFromJson from "../links.json";

export function Header(): ReactElement {
  console.log(linksFromJson);
  const links: ILink[] = linksFromJson;

  console.log(links[1].label);

  return (
    <header className="header container">
      <h1 className="logo-name">Social Feed</h1>
      <Navbar links={links} />
    </header>
  );
}
