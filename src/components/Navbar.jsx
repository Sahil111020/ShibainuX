import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import openSea from '../images/openSea.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
      <nav className="fixed top-0 left-0 right-0 w-screen bg-primary px-8 py-4 border-b-2 border-pink-500 text-secondary">
        <div className="flex items-center justify-between mx-auto md:my-3">
        <h1 className="text-xl">Shiba Days</h1>

        <div id="navList" className="hidden lg:flex">
            <button><Link to="about" activeClass="active" spy={true} smooth={true} offset={-50}>About</Link></button>
            <button><Link to="minter" activeClass="active" spy={true} smooth={true} offset={-50}>Minter</Link></button>
            <button><Link to="roadmap" activeClass="active" spy={true} smooth={true} offset={-80}>Roadmap</Link></button>
            <button><Link to="team" activeClass="active" spy={true} smooth={true} offset={-100}>Team</Link></button>
            <button><a className="">Connect Wallet</a></button>
          </div>

          <button id="hamburger" type="button" className={`block lg:hidden relative cursor-pointer mr-2 outline-none border-none ${ isOpen ? "app" : null }`} onClick={handleClick} >
            <span className="block w-8 h-1 rounded-md"></span>
            <span className="block w-8 h-1 my-2 rounded-md"></span>
            <span className="block w-8 h-1 rounded-md"></span>
          </button>
        </div>

          <div id="navList2" className={`flex-col mt-7 pt-8 text-center mr-3 ${ isOpen ? "flex" : "hidden" }`}>
              <Link to="about" activeClass="active" spy={true} smooth={true} offset={-50} className="py-2 hover:bg-secondary" onClick={() => setIsOpen()}>About</Link>
              <Link to="minter" activeClass="active" spy={true} smooth={true} offset={-50} className="py-2 hover:bg-secondary" onClick={() => setIsOpen()}>Minter!</Link>
              <Link to="roadmap" activeClass="active" spy={true} smooth={true} offset={-50} className="py-2 hover:bg-secondary" onClick={() => setIsOpen()}>Roadmap</Link>
              <Link to="team" activeClass="active" spy={true} smooth={true} offset={-50} className="py-2 hover:bg-secondary" onClick={() => setIsOpen()}>Team</Link>
              <a className="py-2 hover:bg-secondary">Connect Wallet</a>

              <div className="gap-5 my-5 inline-flex m-auto">
                  <a href="" className="h-12 w-12 text-discord bg-bg0 shadow-md bg-opacity-80 rounded-lg flex items-center"><FontAwesomeIcon icon={faDiscord} className="text-3xl m-auto"/></a>
                  <a href="" className="h-12 w-12 text-twitter bg-bg0 shadow-md bg-opacity-80 rounded-lg flex items-center"><FontAwesomeIcon icon={faTwitter} className="text-3xl m-auto"/></a> 
                  <a href="" className="h-12 w-12 text-twitter bg-bg0 shadow-md bg-opacity-80 rounded-lg flex items-center"><img src={openSea} alt=""/></a>
              </div>
          </div>        
      </nav>
  )
}

export default Navbar;
