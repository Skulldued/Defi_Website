import React from "react";

const Community = () => {
  return (
    <div className="w-full bg-black py-2 md:py-12 ">
      <div className="max-w-[800px] mx-auto text-white">
        <div className='bg-[url("./assets/subscrible.jpg")] bg-cover bg-center items-center flex flex-col justify-center'>
            <h1 className="text-3xl md:text-5xl font-bold">Join Our Defi Community</h1>
            <div className="flex gap-3 my-5">
              <input type="email" placeholder="Enter Your Email" className="py-3 px-10 rounded-full font-bold " />
              <button className="font-bold">Sign Up</button>
            </div>
            <div>
            <input type="checkbox" id="check" name="checkit" className="outline-none " value="yes"/>
            <span className="mx-2 text-xl">Yes, I agree to recieve email communication from Defi</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
