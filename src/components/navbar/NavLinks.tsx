import React from "react";
import { NavLink } from "./NavLink";

export const NavLinks = () => {
  return (
    <ul className="flex gap-3 text-zinc-400 md:gap-9">
      <li>
        <NavLink href="/#features">The W4P</NavLink>
      </li>
      <li>
        <NavLink href="/#features2">Features</NavLink>
      </li>
      {/* <li>
        <NavLink href="/#pricing">Pricing</NavLink>
      </li> */}
      <li>
        <NavLink href="https://www.instagram.com/e_ffect.fr/" external>
          Instagram
        </NavLink>
      </li>
    </ul>
  );
};
