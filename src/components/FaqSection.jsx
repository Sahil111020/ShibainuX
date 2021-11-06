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
            <h1 id="heading" className="font-Modak text-5xl text-secondary self-center mt-5">Faq</h1>
            <div className="flex flex-col md:flex-row-reverse justify-evenly">
                
                <img src={Image9} alt="" className="h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 m-auto md:mr-14 lg:mr-20 xl:mr-28 2xl:mr-40"/>

                <div className="p-5 w-full px-6 md:ml-14 lg:ml-20 xl:ml-28 2xl:ml-40"  onClick={closeingOtherTags}>
                    <details className="cursor-pointer border-4 border-black p-2 md:p-4 rounded-lg mt-3">
                        <summary className="list-none">Lorem ipsum dolor.<section className="float-right text-3xl">+</section></summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore minima ipsum impedit magnam dicta libero ratione. Sapiente ipsum temporibus natus, deserunt corrupti eligendi assumenda vero placeat quas consectetur eveniet? Veniam!</p>
                    </details>

                    <details className="cursor-pointer border-4 border-black p-2 md:p-4 rounded-lg mt-3">
                        <summary className="list-none">Lorem ipsum dolor.<section className="float-right text-3xl">+</section></summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore minima ipsum impedit magnam dicta libero ratione. Sapiente ipsum temporibus natus, deserunt corrupti eligendi assumenda vero placeat quas consectetur eveniet? Veniam!</p>
                    </details>

                    <details className="cursor-pointer border-4 border-black p-2 md:p-4 rounded-lg mt-3">
                        <summary className="list-none">Lorem ipsum dolor.<section className="float-right text-3xl">+</section></summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore minima ipsum impedit magnam dicta libero ratione. Sapiente ipsum temporibus natus, deserunt corrupti eligendi assumenda vero placeat quas consectetur eveniet? Veniam!</p>
                    </details>

                    <details className="cursor-pointer border-4 border-black p-2 md:p-4 rounded-lg mt-3">
                        <summary className="list-none">Lorem ipsum dolor.<section className="float-right text-3xl">+</section></summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore minima ipsum impedit magnam dicta libero ratione. Sapiente ipsum temporibus natus, deserunt corrupti eligendi assumenda vero placeat quas consectetur eveniet? Veniam!</p>
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