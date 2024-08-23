import { ReactElement } from "react";
import { Navbar } from ".";

export function Footer(): ReactElement {
  return (
    <footer className="footer">
      <Navbar/>
      <p className="rights">
        <span className="material-symbols-outlined">copyright</span>
        2024 Social Media. All rights reserved
      </p>
    </footer>
  );
}
