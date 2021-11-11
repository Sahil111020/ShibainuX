import React, { useState } from 'react';
import Image9 from '../images/9.png'

function FaqSection() {
    
    const [isOpen, setIsOpen] = useState(false);

    function closeingOtherTags(){
    const details = Array.from(document.querySelectorAll("details"));

    details.forEach(targetDetail => {
        targetDetail.addEventListener("click", () => {
            details.forEach(detail => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            })
        })
    })
    }

    return (
        <div className="flex flex-col bg-yellow-400 w-full mt-5">
            <h1 id="heading" className="font-Modak text-4xl md:text-5xl text-secondary self-center mt-5">Faq</h1>
            <div className="flex flex-col md:flex-row-reverse justify-evenly">
                
                <img src={Image9} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto md:mr-14 lg:mr-20 xl:mr-28 2xl:mr-40"/>

                <div className="p-5 w-full px-6 md:ml-14 lg:ml-20 xl:ml-28 2xl:ml-40"  onClick={closeingOtherTags}>
                    <details className="cursor-pointer border-4 border-black p-2 md:p-4 rounded-lg mt-3">
                        <summary className="list-none text-lg flex items-center justify-between"><h1>How much to mint a SHIBA DAY?</h1><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-right" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/></svg></summary>
                        <p className="text-base mt-3 font-extralight">To become a Shiba Day Society member is only 0.03 ETH. All members will earn exclusive rights to society upcoming event as long as they still possess a Shiba Day NFT.</p>
                    </details>

                    <details className="cursor-pointer border-4 border-black p-2 md:p-4 rounded-lg mt-3">
                        <summary className="list-none text-lg flex items-center justify-between"><h1>How many SHIBA DAY exist and how big can my squad be?</h1><section><svg xmlns="http://www.w3.org/2000/svg" className="h-6 float-right" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/></svg></section></summary>
                        <p className="text-base mt-3 font-extralight">There will be 10,000 exclusive Shiba Day minted including the 200 reserved for giveaways and team members. Each transaction is capped at 5.</p>
                    </details>

                    <details className="cursor-pointer border-4 border-black p-2 md:p-4 rounded-lg mt-3">
                        <summary className="list-none text-lg flex items-center justify-between"><h1>When will my SHIBA DAY be revealed?</h1><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-right" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/></svg></summary>
                        <p className="text-base mt-3 font-extralight">All Shiba Days will be revealed during launch.</p>
                    </details>

                    <details className="cursor-pointer border-4 border-black p-2 md:p-4 rounded-lg mt-3">
                        <summary className="list-none text-lg flex items-center justify-between"><h1>What should I expect for floor price and trading after the mint?</h1><section><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-right" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/></svg></section></summary>
                        <p className="text-base mt-3 font-extralight">It’s nearly impossible to predict the floor price for a new NFT collection. It is anticipated to be high due to the popularity of Shiba Inu and it's close link to Shiba Inu Coin.</p>
                    </details>
                </div>
            </div>
        </div>
    );
}

function plus(){
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
}

export default FaqSection;