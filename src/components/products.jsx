import React from "react";

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon,SupportIcon} from "@heroicons/react/solid";

import bgimg from '../assests/s_aircos.png'

const Products = () => {
    return(
        <div name= "Products" className="w-full h-screen mt-24">
            <div className="w-full h-[700px] bg-gray-900/60 absolute">
            <img className = 'w-full h-full object-cover mix-blend-overlay'src={bgimg} alt="b" />
            </div>
            <div className="max-w-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                <h2 className="text-4xl pt-8 text-slate-300 text-center uppercase">Our Products</h2>
                <h3 className="text-5xl font-bold py-6">Finding the right products</h3>
                <p className="py-4 text 3xl text-slate-300"> Worried about your skin type? Worry no more because our cosmetics products cover all skin types, giving you your unique beauty and skin always.
                Our hairs and wigs makes you to always look outstanding and stunning.
            </p>
            </div>
            </div>
           <div className="grid grid-cols-1 lg:grid-cols-3 relative 
           gap-x-6 gap-y-16 px-4 pt-12 sm:pt-20">
            <div className="bg-white rounded-xl shadow-2xl">
                <div className="p-8">
            <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
            <h3 className="font-bold my-6 text-2xl">Sales</h3>
            <p className="text-xl text-blue-500"> These are our top selling products.</p>
            </div> 
           <div className="py-4 pl-8">
            <p className="flex items-center text-stone-800">Contact Us <ArrowSmRightIcon className="w-5 ml-2"/></p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Products;