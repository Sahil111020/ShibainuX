import React from 'react';
import Image4 from '../images/4.png'
import Image5 from '../images/5.png'

function Roadmap() {
    return (
        <div id="roadmap" className="p-12 xl:px-48 bg-blue-400 text-center">
            <h1 id="heading" className="font-Modak text-4xl md:text-5xl text-secondary -mt-3 mb-5">Road map</h1>

            <div className="flex flex-col-reverse md:flex-col text-left">
                <div className="grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-5">
                    <MapCards title="Shiba Charge (Till 25% Sold)" line1="Join Discord Server and be whitelisted to join the exclusive launch. Members will have privileges' to purchase the first 25% of Shiba Days NFTs."/>
                    <MapCards title="Shiba Inhabit (Till 50% sold)" line1="Shiba Days have established their standing on the universe of Ethernum. Now it's time for us to gather members for expansion"/>
                    <MapCards title="Shiba Expansion (Till 75% sold)" line1="Open to Public. Shiba days are officially taking over the land. Different tiers of membership will be determined and each unique Shiba will start to show their prowess. We are heading for the moon next"/>
                    <MapCards title="Shiba Days Society (100%)" line1="We are officially the Shiba Days Society. Expect to see our members touring the universe of Ethernum. Establishing rights and laws as we proceed for our next bound of expansion."/>
                </div>
                <div className="inline-flex justify-center">
                    <img src={Image4} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
                    <img src={Image5} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
                </div>
            </div>
            
        </div>
    );
}

function MapCards(props) {
    return (
        <div className="p-10 border-4 border-black bg-red-400 rounded-lg text-base">
            <h1 id="heading2" className="font-Modak text-2xl text-secondary">{props.title}</h1>
            <h3>{props.line1}</h3>
            <h3>{props.line2}</h3>
            <h3>{props.line3}</h3>
            <h3>{props.line4}</h3>
        </div>
    );
}

export default Roadmap;