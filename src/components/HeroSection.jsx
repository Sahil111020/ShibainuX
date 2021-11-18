import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../images/1.png'
import Image10 from '../images/10.png'
import openSea from '../images/openSea.png'

function HeroSection() {
    return (
        <div id="about" className="flex flex-wrap md:flex-row md:flex-nowrap flex-1 justify-center gap-5 md:gap-0 pt-16 pb-5 lg:px-32 md:pt-28">
            <img src={Image1} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
            
            <div className="bg-bg1 shadow-lg text-center p-5 xl:py-16 lg:py-14 mx-10 md:mx-0 lg:w-11/12 xl:w-5/6 order-3 md:order-none border-4 border-black rounded-lg my-auto">
                <h1 id="heading" className="font-Modak text-4xl md:text-5xl text-shadow text-primary px-5">SHIBA DAYS</h1>
                <h3 className="pt-3 text-lg mb-5">The Shiba Days Society are unique metaverse, taking on a Shiba Inu outlook who inhabit the remote modern land of Ethernum. Each Shiba Day is one-of-a-kind with their own personality and drawn from distinct traits. As a member of the Society, you will have exclusive access to our new upcoming NFT, and having the privileges' to join the exclusive club of Shiba Days future expansion</h3>
                
                <div className="flex items-center justify-center md:hidden">
                    <div className="h-14 w-9 bg-transparent rounded-3xl border-4 border-black flex items-center">
                        <div className="h-5 w-1 bg-black rounded-full mx-auto"></div>
                    </div>
                    <p id="scrollDown" className="ml-4 tracking-wide text-xl">Scroll Down</p>
                    <FontAwesomeIcon icon={faAngleDown} className="text-4xl ml-3"/>
                </div>
                <div className="gap-5 mt-10 hidden md:inline-flex">
                    <div className="h-14 w-14 text-discord bg-bg0 shadow-md bg-opacity-80 rounded-lg flex items-center" >
                        <a href="" className="h-full w-full py-2"><FontAwesomeIcon icon={faDiscord} className="text-4xl m-auto"/></a>
                    </div>
                    <div className="h-14 w-14 text-twitter bg-bg0 shadow-md bg-opacity-80 rounded-lg flex items-center" >
                        <a href="" className="h-full w-full py-2"><FontAwesomeIcon icon={faTwitter} className="text-4xl m-auto"/></a> 
                    </div>
                    <div className="h-14 w-14 bg-bg0 bg-opacity-80 shadow-md rounded-lg flex items-center">
                        <a href=""><img src={openSea} alt=""/></a>
                    </div>
                </div>
            </div>

            <img src={Image10} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
        </div>
    );
}

export default HeroSection;