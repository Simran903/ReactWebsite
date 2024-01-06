import React from "react";
import { navLinks } from "../constant";

function Nav() {
  return (
    <header
      className="padding-x
        py-8 absolute z-10 w-full"
    >
      <nav
        className="flex
            justify-between items-center
            max-container"
      >
        <ul
          className="flex-1 flex justify-center items-center
                gap-16 max-lg:hidden"
        >
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="font-montserrat
                            leading-normal
                            text-lg
                            text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
