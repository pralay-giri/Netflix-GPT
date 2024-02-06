import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FOOTER_OTHER_LINKS } from "../utils/constant";

const Footer = () => {
    return (
        <div className="relative z-10 bg-[#121212] text-white px-52 pt-10 pb-10 mx-auto">
            <div className="py-5">
                <ul className="flex gap-5 *:text-2xl *:font-semibold *:cursor-pointer  *:transition-colors">
                    <li className="hover:text-blue-500">
                        <FaFacebookF />
                    </li>
                    <li className="hover:text-red-500">
                        <FaInstagram />
                    </li>
                    <li className="hover:text-blue-500">
                        <FaTwitter />
                    </li>
                    <li className="hover:text-[#ff0000]">
                        <FaYoutube />
                    </li>
                </ul>
            </div>
            <div className="links">
                <ul className="flex flex-wrap *:w-[25%] *:p-2">
                    {FOOTER_OTHER_LINKS.map((link) => (
                        <li
                            key={link}
                            className="hover:text-red-500 cursor-pointer transition-colors"
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Footer;
