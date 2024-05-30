import React from 'react'
import {content} from "../constants/index";
const Card = () => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 xl:max-w-[80%] lg:min-w-[80%] mx-auto sm:grid-cols-2 lg:grid-cols-4'>
        {
            content.map((items,index)=>(
                <div className='text-white hover:bg-slate-700 duration-200 md:min-w-[150px] lg:w-[250px] border p-4 rounded-xl border-emerald-300 mx-auto my-8 md:my-16' key={index}>
                  <div className="icons my-4 bg w-16 h-16 bg-[#a21caf] flex items-center justify-center rounded-full  ">
                  <items.icon className='w-10 h-10' />
                  </div>
                  <div className='title'>
                     <p className='font-bold text-xl my-4'>{items.title}</p>
                  </div>
                  <div className="description">
                    <p className='text-justify'>{items.description}</p>
                  </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Card
