import React from 'react'
import { Link } from 'react-router-dom'

function Links() {



  return (
    <>
    
    <ul className="text-slate-100  text-xl  gap-5 ">
     
       
        <div className='gap-5 flex justify-center items-center max-md:hidden overflow-hidden nav-links max-xl:text-lg max-lg:text-sm'>
          <Link to="/home" className="cursor-pointer font-semibold px-4 py-2 rounded-md  flex justify-center items-center ">{"<"}Home{" />"}</Link>
          <Link to="/projects" className="cursor-pointer font-semibold px-4 py-2 rounded-md  flex justify-center items-center ">{"<"}Projects{" />"}</Link>
          <Link to="/technologies" className="cursor-pointer font-semibold px-4 py-2 rounded-md  flex justify-center items-center ">{"<"}Technologies{" />"}</Link>
          <Link to="/contact" className="cursor-pointer font-semibold px-4 py-2 rounded-md  flex justify-center items-center ">{"<"}Contact Me{" />"}</Link>
          </div>
        </ul>

    
       
    </>
  )
}

export default Links