import React from "react";
import{
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaTwitter,
} from 'react-icons/fa'
const Footer = () => {
    return(
        <div className="w-full mt-24 py-4 px-2 bg-gray-500 text-black">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-200 py-8">
                <div>
                    <h6 className="font-bold pt-2 uppercase">Solutions</h6>
                    <ul>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Commercials</li>
                        <li className="py-1">Digitals</li>
                        <li className="py-1">Values </li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold pt-2 uppercase">Services</h6>
                    <ul>
                        <li className="py-1">Revamping</li>
                        <li className="py-1">Installation</li>
                        <li className="py-1">Wigging</li>
                        <li className="py-1">Training</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold pt-2 uppercase">Deals</h6>
                    <ul>
                        <li className="py-1">Discounts</li>
                        <li className="py-1">Promotions</li>
                        <li className="py-1">Upgrade</li>
                        <li className="py-1">Sales </li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold pt-2 uppercase">Company</h6>
                    <ul>
                        <li className="py-1">About</li>
                        <li className="py-1">Jobs</li>
                        <li className="py-1">Press</li>
                        <li className="py-1">Partners </li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold pt-2 uppercase">Legal</h6>
                    <ul>
                        <li className="py-1">Claims</li>
                        <li className="py-1">Conditions</li>
                        <li className="py-1">Privacy</li>
                        <li className="py-1">Policies </li>
                    </ul>
                </div>
            <div className="col-span-2 pt-8 md:pt-2">
                <p className="font-bold uppercase">Subscribe to our newsletter</p>
                <p className="py-4">The lattest news,articles,and resources, sent directly to your inbox weekly.</p>
                <form className="flex flex-col sm:flex-row">
                    <input className="w-full p-2 mr-4 rounded-md mb-4" type="email"  placeholder="Enter your email" />
                    <button className="p-2 mb-4">Subscribe</button>
                </form>
            </div>
            </div>

            <div className="flex flex-col max-w-[1240px] items-center px-2 py-4 mx-auto justify-between sm:flex-row text-center">
                <p className="py-4">2023 workflow,LLC. All rights reserved.</p>
            <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                <FaFacebook />
                <FaGithub />
                <FaTwitter />
                <FaInstagram />
            </div>
            </div>
        </div>
    )
}
export default Footer