import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("HOME");

  const menuItems = ["HOME", "MEN", "WOMEN", "COLLECTION", "CONTACT"];

  return (
    <header>
      <nav className="w-full md:p-3 md:px-28 p-1 px-4 flex justify-between items-center">
        <div className=" w-[90px] px-3 py-5">
          <a href="/">
          <img
            src={Logo}
            alt="Logo"
            className=" cursor-pointer object-cover"
            width={90}
          />
          </a>
        </div>
        <ul className="flex ">
          {menuItems.map((item) => (
            <li key={item} className="px-8 ">
              <a
                
                className={` font-semibold relative cursor-pointer  hidden md:block
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
