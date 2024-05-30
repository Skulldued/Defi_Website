import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {

    const [open,setOpen] = useState(false);
    const handleClick = ()=>{
        setOpen(!open);
    }

  const navItems = [" Platforms", "Developer", "Community", "About"];
  return (
    <div className="w-full bg-black h-20 py-3 px-20">
      <div className="flex justify-between items-center">
        <div className="logo">
          <h2 className="text-[var(--primary-blue)] text-3xl p-2 font-bold">
            Defi
          </h2>
        </div>
        <div className="list hidden md:flex ">
          <ul className="flex text-white items-center">
            {navItems.map((items, index) => (
              <div key={index}>
                <li className="">{items}</li>
              </div>
            ))}
            <div>
              <button className="text-white font-bold  ml-4">Use Defi</button>
            </div>
          </ul>
        </div>
        <div className="text-white block md:hidden" onClick={handleClick}>
            {
                open?<IoMdClose className="text-3xl font-bold"/> : <RiMenu3Fill className="text-3xl font-bold"/>
            }
           
           
        </div>
        <div className={open?'w-full block md:hidden bg-black absolute top-[80px] left-0 duration-500 delay-500':'absolute left-[-100%]'}>
        <ul className="text-white flex flex-col items-center">
            {navItems.map((items, index) => (
              <div key={index}>
                <li className="py-2">{items}</li>
              </div>
            ))}
            <div>
              <button className="text-white font-bold my-4  ml-4">Use Defi</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
