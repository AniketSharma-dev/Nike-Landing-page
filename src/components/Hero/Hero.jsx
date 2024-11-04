import React from 'react'

const Hero = () => {
    return (
        <section className="w-full h-full">
            <div style={{ height: `calc(100vh - 97.65px)` }} className="w-full flex">
                <div className="w-2/5 h-full px-20 py-20">
                    <h6>Explore The Limited Edition</h6>
                    <h1 className="text-7xl font-semibold  mt-2">NIKE LIMITED EDITION</h1>
                    <p className="my-5 pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora quae quasi ipsam quo ipsum dolores quod maiores, illum nostrum quia excepturi aperiam minima quam dolore velit rerum, pariatur deserunt?</p>
                    <button className="btn m-4 bg-black py-4 px-10 font-semibold text-white">SHOP NOW</button>
                </div>
                <div className="w-3/5 h-full  flex justify-start items-center ">
                    <div className="relative w-[350px] h-[500px] rounded-xl shadow-2xl bg-white">
                        <img src="" alt="" />
                        <h6 className="p-4 text-sm absolute bottom-16 rounded-bl-xl  rounded-t-xl right-0 text-white bg-black ">Men's Basketball Shoe</h6>
                        <h4 className="p-5 bg-[#D0D4D5] rounded-tl-xl rounded-b-xl text-black absolute bottom-0 right-0">LeBron Soldier 12 (Team)</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero