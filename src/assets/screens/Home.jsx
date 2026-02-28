import React from "react";
import { Link } from "react-router";
import  video from '../myvideo.mp4'
export default function Home(){
    return(
        <section className="relative h-screen w-full overflow-hidden text-amber-50 "> 
            <video className="absolute top-0 left-0 w-full h-full object-cover " 
            src={video} autoPlay muted loop></video>
        
            <div className=" border-b-4 py-2">
            <div className="absolute flex justify-around items-center space-x-72 px-20">
              <div>
                <p className="text-4xl font-semibold cursor-pointer"> BetterMe</p>
              </div>
              <div className="flex justify-around items-center space-x-12">
                <p className="font-bold ">Producte</p>
                <p className="font-bold ">Business</p>
                <p className="font-bold">Store</p>
              </div>
              <div className="flex justify-around items-center space-x-12">
                <p className="font-bold">Privacy police</p>
                <p className="font-bold">
                   <button className="border border-white rounded-3xl h-10 w-24"> Log in </button></p>
                <p herf="#" className="">
                  <button className="border border-white rounded-full h-10 hover:border-hidden  cursor-pointer">
                    <img className="h-5  px-2" src="data:image/png;base64,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" alt="" srcset="" /> 
              </button>
           </p>
              </div>
               </div>
            </div>
            <section className="absolute px-19 py-80 gap-4">
              <p className="font-medium text-6xl py-2">Fun And Simple Fitness:</p>
              <p className="font-stretch-95% text-6xl py-2">personalized activites to</p>
              <p className="font-stretch-95% text-6xl py-2">cover your wellness needs</p>
              <p className="py-10">
            <Link to={'/Getstarted'}> <button className="bg-white cursor-pointer text-black rounded-full h-12 w-40">Get Started</button></Link>
             </p>         
            </section>
            
       
            
            </section>
      
    )
}