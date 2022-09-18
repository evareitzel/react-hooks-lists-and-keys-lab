import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aTags = links.map((str) => (
    <a key={str} href={"#" + str}>
      {str}
    </a>
  ))
  return <nav>{aTags}</nav>;
}

export default NavBar;