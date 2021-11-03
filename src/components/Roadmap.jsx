import React from 'react';
import MapCards from './MapCards';
import Image4 from '../images/4.png'
import Image5 from '../images/5.png'

function Roadmap() {
    return (
        <div className="p-12 xl:px-48 bg-blue-400 text-center">
            <h1 id="heading" className="font-Modak text-5xl text-secondary">Road map</h1>

            <div className="flex flex-col-reverse md:flex-col text-left">
                <div className="flex flex-col md:flex-row align-middle justify-center gap-5">
                    <MapCards title="heyyy there " line1="-Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime!" line2="-Lorem ipsum dolor sit, amet consectetur adipisicing." line3="-Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime!"/>
                    <MapCards title="heyyy there2" line1="-Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime!" line2="-Lorem ipsum dolor sit, amet consectetur adipisicing." line3="-Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime!"/>
                    <MapCards title="heyyy there3" line1="-Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime!" line2="-Lorem ipsum dolor sit, amet consectetur adipisicing." line3="-Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime!"/>
                </div>
                <div className="inline-flex justify-center">
                    <img src={Image4} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
                    <img src={Image5} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
                </div>
            </div>
            
        </div>
    );
}

export default Roadmap;