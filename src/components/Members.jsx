import React from 'react';

function Members(props) {
    return (
        <div className="bg-red-500 text-center my-5 mx-20 py-5 border-4 border-black rounded-lg">
            <img src={props.img} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto"/>
            <h1 id="heading2" className="font-Modak text-3xl text-secondary">{props.name}</h1>
            <h3>{props.work}</h3>
        </div>
    );
}

export default Members;