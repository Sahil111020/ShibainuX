import React from 'react';
import Image7 from '../images/7.png'
import Image8 from '../images/8.png'

function Team() {
    return (
        <div id="team" className="mt-10">
            <h1 id="heading" className="font-Modak text-4xl md:text-5xl text-secondary text-center">Team</h1>
            <div className="flex flex-col md:flex-row justify-center align-middle">
                <Members img={Image7} name="Trxboy" work="@Founder/Leader"/>
                <Members img={Image8} name="Sahil1020" work="@Dev/Manager"/>
            </div>
        </div>
    );
}

function Members(props) {
    return (
        <div className="bg-bg41 text-center my-5 mx-20 py-5 border-4 border-black shadow-lg rounded-lg">
            <img src={props.img} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
            <h1 id="heading2" className="font-Modak text-3xl text-secondary">{props.name}</h1>
            <h3>{props.work}</h3>
        </div>
    );
}

export default Team;