import { ReactElement } from "react";
import { Link } from ".";
import { links } from "../data";

export function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      {/* <a className="link" href="#">Home</a>
      <a className="link" href="#">Explore</a>
      <a className="link" href="#">Notifications</a>
      <a className="link" href="#">Messages</a> */}

      {/* <Link link={links[0]} />
      <Link link={links[1]} />
      <Link link={links[2]} />
      <Link link={links[3]} /> */}

      {/* You can't write regular for loops inside brackets in JSX, it's NOT a expression. It's a statement, and statement are not allowed. */}
      {/* {for (let link of links) {}} */}

      {/* {links.map((link) => {
        return <Link link={link} />;
      })} */}

      {/* Shorter syntax, no return keyword since we are returning straight away */}
      {links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </nav>
  );
}
