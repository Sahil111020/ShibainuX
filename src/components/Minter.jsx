import React from 'react';
import Image2 from '../images/2.png'
import Image3 from '../images/3.png'

function Minter() {
    return (
        <div id="minter" className="p-5 pt-10 md:px-10 lg:px-24 lg:pt-16 xl:px-40">
            <div className="shadow-lg flex flex-wrap-reverse md:flex-row md:flex-nowrap flex-1 align-middle justify-center bg-bg2 border-4 border-black rounded-lg  gap-5 md:gap-0 py-5 lg:px-32">
                <img src={Image3} alt="" className="h-40 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>

                <div className="text-center p-5 xl:py-16 lg:py-14 mx-10 md:mx-0 xl:w-3/6 order-1 md:order-none rounded-lg my-auto">
                    <h1 id="heading" className="font-Modak text-4xl md:text-5xl text-secondary">Minter!</h1>
                    <h3 className="text-lg">Enter the amount of ShibainuX you want to mint! (5 max)</h3>
                    <input type="number" max="5" name="mintValue" placeholder="Enter the amount" className="p-2 my-5 rounded-md outline-none"/>
                    <div className="inline-flex xl:mx-5">
                        <button type="submit" className="bg-secondary shadow-md border-2 mr-7 border-black p-3 rounded-md">Connect Wallet</button>
                        <button type="submit" className="bg-secondary shadow-md border-2 border-black p-3 px-12 rounded-md">Mint!</button> 
                    </div>
                </div>

                <img src={Image2} alt="" className="h-40 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
            </div>
        </div>
    );
}

export default Minter;