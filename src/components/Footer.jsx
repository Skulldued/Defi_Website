import React from "react";
import { FooterValue } from "../constants";

const Footer = () => {
  return (
    <div className="bg-black w-full px-3 py-10 text-white text-center">
      <div className="max-w-[1240px] mx-auto  ">
        <div className="grid lg:grid-cols-5 grid-cols-1  md:grid-cols-2">
          {FooterValue.map((items, index) => (
            <div className="head">
              <h4 className=" border-b-2 border-cyan-200 inline-block ">{items.head}</h4>
             
                <div className="flex flex-col my-3 lg:my-0">
                  {items.links.map((link, linkIndex) => (
                    <p key={linkIndex} className="py-1" >{link}</p>
                  ))}
                </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
