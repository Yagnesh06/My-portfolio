import React from 'react'
import { Link } from 'react-router-dom'

function ResponsiveNavbar() {
  return (
    <>
      <div  className={`h-full overflow-hidden md:hidden sticky top-16 z-10  bg-zinc-950 `} >
        <Link to="/" className="text-slate-100 hover:bg-slate-700 bg-zinc-800 transition-bg duration-500 mt-4 cursor-pointer font-semibold px-4 py-2 text-2xl rounded-md  flex justify-center items-center ">Home</Link>
          <Link to="/projects" className="text-slate-100 hover:bg-slate-700 bg-zinc-800 transition-bg duration-500 mt-4 cursor-pointer font-semibold px-4 py-2 text-2xl rounded-md  flex justify-center items-center ">Projects</Link>
          <Link to="/technologies" className="text-slate-100 hover:bg-slate-700 bg-zinc-800 transition-bg duration-500 mt-4 cursor-pointer font-semibold px-4 py-2 text-2xl rounded-md  flex justify-center items-center ">Technologies</Link>
          <Link to="/contact" className="text-slate-100 hover:bg-slate-700 bg-zinc-800 transition-bg duration-500 mt-4 cursor-pointer font-semibold px-4 py-2 text-2xl rounded-md  flex justify-center items-center ">Contact Me</Link>
    </div>
    </>
  )
}

export default ResponsiveNavbar