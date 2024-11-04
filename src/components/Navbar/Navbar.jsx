import React from 'react'
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="w-full p-3 px-28 flex justify-between items-center">
                    <div className=""> <img src="https://cdn-icons-png.flaticon.com/512/732/732229.png" alt="Logo" className="cursor-pointer" width={70} /></div>
                    <ul className="flex">
                        <li className="px-8 cursor-pointer font-semibold" >HOME</li>
                        <li className="px-8 cursor-pointer font-semibold" >MEN</li>
                        <li className="px-8 cursor-pointer font-semibold" >WOMEN</li>
                        <li className="px-8 cursor-pointer font-semibold" >COLLECTION</li>
                        <li className="px-8 cursor-pointer font-semibold" >CONTACT</li>
                    </ul>
                    <div className="flex justify-center items-center">
                        <i className="text-2xl cursor-pointer px-8 ri-search-2-line"></i>
                        <i className="text-2xl cursor-pointer px-8 ri-shopping-cart-line"></i>
                        <i className="text-2xl cursor-pointer font-bold px-8 ri-menu-line"></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar