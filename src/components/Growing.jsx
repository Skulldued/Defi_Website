import React from 'react'
import Card from './Card'

const Growing = () => {
  return (
    <div className='w-full bg-black py-12 px-8'>
      <div className="heading text-center text-white ">
        <h1 className=' text-2xl md:text-4xl px-2 sm:px-3 font-bold '>A Growing Protocol Ecosystem</h1>
        <p className='text-xl w-[60%] mx-auto py-4'>The Defi system empoers developers,liquidity providers,a nd traders to participate in a finicial marketplace that is open and accessible to all</p>
      </div>
      <Card/>
      <div className='flex justify-center my-4'>
      <button className='text-white'>Use defi</button>
      </div>
    </div>
  )
}

export default Growing
