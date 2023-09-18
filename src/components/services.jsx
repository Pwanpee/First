import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const Services = () => {
    return(
        <div name='Services' className="w-full my-32">
            <div className="max-w-[1240px] mx-auto px-2">

                <h2 className="text-5xl font-bold text-center">Services</h2>
                <p className="text-3xl text-indigo-500 py-8 text-center"> Our services are very reliable</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <div className="flex">
                    <div>
                    <CheckIcon className="w-7 mr-4 text-green-300" />
                    </div>
                      
                  <div>
                    <h3 className="text-lg font-bold">Sales of Hair and cosmestics</h3>
                  <p className="text-lg pt-2 pb-4">We give you quality hairs and cosmetics products at a very affordable price. </p>
                  </div>
                    </div>
                
                <div className="flex">
                    <div>
                    <CheckIcon className="w-7 mr-4 text-green-300" />
                    </div>
                      
                  <div>
                    <h3 className="text-lg font-bold">Rebranding of wigs</h3>
                  <p className="text-lg pt-2 pb-4">All your damaged wigs get revived and rebranded as new.</p>
                  </div>
                    </div>
                
                
                <div className="flex">
                    <div>
                    <CheckIcon className="w-7 mr-4 text-green-300" />
                    </div>
                      
                  <div>
                    <h3 className="text-lg font-bold">Making of closures and frontals</h3>
                  <p className="text-lg pt-2 pb-4">We make closures and frontals of all sizes.</p>
                  </div>
                    </div>
                
            
                <div className="flex">
                    <div>
                    <CheckIcon className="w-7 mr-4 text-green-300" />
                    </div>
                      
                  <div>
                    <h3 className="text-lg font-bold">Make up</h3>
                  <p className="text-lg pt-2 pb-4">We make your faces fit for all occassions at all times.</p>
                  </div>
                    </div>
                </div>
                
                <div className="flex">
                    <div>
                    <CheckIcon className="w-7 mr-4 text-green-300" />
                    </div>
                      
                  <div>
                  <h3 className="text-lg font-bold">Trainings</h3>
                  <p className="text-lg pt-2 pb-4">We train people at different levels to get the knowledge</p>
                  </div>
                    </div>
                </div>
                </div> 
    )
}


export default Services