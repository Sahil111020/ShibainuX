import React from 'react';
import Image1 from '../images/1.png'
import Image10 from '../images/10.png'

function HeroSection() {
    return (
        <div className="flex flex-wrap md:flex-row md:flex-nowrap flex-1 align-middle justify-center gap-5 md:gap-0 py-5 lg:px-32 md:mt-32">
            <img src={Image1} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
            
            <div className="bg-red-300 text-center p-5 xl:py-16 lg:py-14 mx-10 md:mx-0 xl:w-2/6 order-3 md:order-none border-4 border-black rounded-lg my-auto">
                <h1 id="heading" className="font-Modak text-5xl text-shadow text-primary px-5">SHIBAINU_X</h1>
                <h3 className="pt-3 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sit earum aliquid cumque hic natus aperiam rem amet inventore autem repellendus quos vero alias, et provident nesciunt laboriosam corrupti perspiciatis?</h3>
                <div className="bg-gray-300 bg-opacity-75 p-2 w-40 mx-auto mt-5 rounded md:hidden">Scroll Down</div>
                <div className="gap-5 mt-12 hidden md:inline-flex">
                    <div className="h-14 w-14 bg-gray-700"></div>
                    <div className="h-14 w-14 bg-gray-700"></div>
                    <div className="h-14 w-14 bg-gray-700"></div>
                </div>
            </div>

            <img src={Image10} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
        </div>
    );
}

export default HeroSection;