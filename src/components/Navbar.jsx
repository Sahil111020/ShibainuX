import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
      <nav className="fixed top-0 left-0 right-0 w-screen bg-gray-700 px-8 py-4 border-b-2 border-pink-500 text-secondary">
        <div className="flex items-center justify-between mx-auto">
        <h1 className="text-xl">Shiba Days</h1>

          <div id="navList" className="hidden lg:flex">
              <button><a className="">About</a></button>
              <button><a className="">Minter</a></button>
              <button><a className="">Roadmap</a></button>
              <button><a className="">Team</a></button>
              <button><a className="">Connect Wallet</a></button>
          </div>

          <button id="hamburger" type="button" className={`block lg:hidden relative cursor-pointer mr-2 outline-none border-none ${ isOpen ? "app" : null }`} onClick={handleClick} >
            <span className="block w-8 h-1 bg-gray-100 rounded-md"></span>
            <span className="block w-8 h-1 my-2 bg-gray-100 rounded-md"></span>
            <span className="block w-8 h-1 bg-gray-100 rounded-md"></span>
          </button>
        </div>

          <div id="navList2" className={`flex-col mt-7 py-8 text-center mr-3 ${ isOpen ? "flex" : "hidden" }`}>
              <a className="py-2 hover:bg-yellow-200">About</a>
              <a className="py-2 hover:bg-yellow-200">Minter</a>
              <a className="py-2 hover:bg-yellow-200">Roadmap</a>
              <a className="py-2 hover:bg-yellow-200">Team</a>
              <a className="py-2 hover:bg-yellow-200">Connect Wallet</a>
          </div>
        
        
      </nav>
  )
}

export default Navbar;
