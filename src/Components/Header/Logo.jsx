import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <>
        <Link to="/">
           <h1 className="text-slate-100 text-4xl font-bold cursor-pointer max-xl:text-2xl max-[400px]:text-xl  ">{"<"}Yagnesh Ajagiya{" />"}</h1> 
        </Link>
    </>
  )
}

export default Logo