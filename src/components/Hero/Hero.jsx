import React from 'react'

const Hero = () => {
    return (
        <section className="w-full h-full">
            <div style={{ height: `calc(100vh - 97.65px)` }} className="w-full flex">
                <div className="w-2/5 h-full px-20 py-24">
                <h6>Explore The Limited Edition</h6>
                <h1 className="text-7xl font-semibold  mt-2">NIKE LIMITED EDITION</h1>
                <p className="my-5 pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora quae quasi ipsam quo ipsum dolores quod maiores, illum nostrum quia excepturi aperiam minima quam dolore velit rerum, pariatur deserunt?</p>
                <button className="btn m-4 bg-black py-4 px-10 font-semibold text-white">SHOP NOW</button>
                </div>
                <div className="w-3/5 h-full "></div>
            </div>
        </section>
    )
}

export default Hero