import React from 'react'
import Logo from "../../assets/Logo.png"
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="w-full p-3 px-28 flex justify-between items-center">
                    <div className="px-3 py-5"> <img src={Logo} alt="Logo" className="cursor-pointer object-cover" width={90} /></div>
                    <ul className="flex">
                        <li className="px-8 cursor-pointer font-semibold" >HOME</li>
                        <li className="px-8 cursor-pointer font-semibold" >MEN</li>
                        <li className="px-8 cursor-pointer font-semibold" >WOMEN</li>
                        <li className="px-8 cursor-pointer font-semibold" >COLLECTION</li>
                        <li className="px-8 cursor-pointer font-semibold" >CONTACT</li>
                    </ul>
                    <div className="flex justify-center items-center">
                        <i className="text-2xl cursor-pointer px-8 ri-search-2-line"></i>
                        <i className="relative text-3xl cursor-pointer px-8 ri-shopping-cart-line"> <span className="font-bold absolute font-serif top-[15%] left-[46%] text-sm">0</span></i>
                        <i className="text-2xl cursor-pointer font-bold px-8 ri-menu-line"></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar