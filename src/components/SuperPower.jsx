import React from 'react'
import code from "../assets/terminal.png";
const SuperPower = () => {
  return (
    <div className='w-full bg-black px-8  py-3 md:py-12 '>
      <div className="text-white max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="txt flex flex-col justify-center">
            <h1 className='text-4xl  font-bold'>Superpowers for DEFI Developers.</h1>
            <p className='my-3 text-[18px]'>checkout the <span className='text-sky-500'>Documentation</span>,the <span className='text-sky-500'>Quick start</span> or guide below to integrate your project with thousands of tokens and billions of liquidity</p>
        </div>
        <div className="img flex justify-center py-5 md:py-0">
            <img src={code} className='w-[350px] border border-sky-500 shadow-lg shadow-cyan-500/50 border-blur-md' alt="" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default SuperPower
