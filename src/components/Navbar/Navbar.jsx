import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("HOME");

  const menuItems = ["HOME", "MEN", "WOMEN", "COLLECTION", "CONTACT"];

  return (
    <header>
      <nav className="w-full p-3 px-28 flex justify-between items-center">
        <div className="px-3 py-5">
          <img
            src={Logo}
            alt="Logo"
            className="cursor-pointer object-cover"
            width={90}
          />
        </div>
        <ul className="flex ">
          {menuItems.map((item) => (
            <li className="px-8 ">
              <a
                key={item}
                className={` font-semibold relative cursor-pointer 
                            ${
                              activeItem === item
                                ? "text-black half-underline"
                                : "text-black"
                            }`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center">
          <i className="text-2xl cursor-pointer px-8 ri-search-2-line"></i>
          <i className="relative text-3xl cursor-pointer px-8 ri-shopping-cart-line">
            <span className="font-bold absolute font-sans -top-1 text-sm">
              10
            </span>
          </i>
          <i className="text-2xl cursor-pointer font-bold px-8 ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
