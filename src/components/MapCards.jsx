import React from 'react';

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

export default MapCards;