import React, { useState } from "react";
import Logo from "./Logo";
import Links from "./Links";
import ResponsiveNavbar from "./ResponsiveNavbar";

function Header() {

  const [clicked, setClicked] = useState(false)

  const showNavbar = ()=>{
    setClicked((prevState)=> !prevState)
  }

  return (
    <>
      <nav className="flex justify-between items-end sticky top-0 bg-zinc-950 z-10 py-4 ">
        <Logo></Logo>
        <Links ></Links>
             
        <i className="fa-solid fa-bars text-white text-4xl md:hidden menu max-[400px]:text-2xl" onClick={showNavbar} ></i>
      </nav>
      
      {clicked && <ResponsiveNavbar />}

    </>
  );
}

export default Header;