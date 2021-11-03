import React from 'react';
import Members from './Members';
import Image7 from '../images/7.png'
import Image8 from '../images/8.png'

function Team() {
    return (
        <div className="mt-10">
            <h1 id="heading" className="font-Modak text-5xl text-secondary text-center">Team</h1>
            <div className="flex flex-col md:flex-row justify-center align-middle">
                <Members img={Image7} name="Drake" work="@Artist/Leader"/>
                <Members img={Image8} name="Sahil1020" work="@Dev/Manager"/>
            </div>
        </div>
    );
}

export default Team;