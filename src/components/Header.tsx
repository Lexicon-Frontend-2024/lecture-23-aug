import { ReactElement } from "react";
import { Navbar, Search } from ".";

export function Header(): ReactElement {
  return (
    <header className="header container">
      <h1 className="logo-name">Social Feed</h1>
      <Search />
      <Navbar />
    </header>
  );
}
