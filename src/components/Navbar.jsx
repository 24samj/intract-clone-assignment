import React from "react";
import { PiTelevisionSimple } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

function Navbar(props) {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-sm text-white border-solid border-b border-gray-600 flex justify-between lg:justify-center items-center py-2 px-4 text-nowrap gap-8">
            <span className="text-white font-bold text-2xl">intract.</span>
            <div className="hidden lg:flex flex-row-reverse items-center gap-4 flex-2">
                <search className="peer flex items-center border border-gray-500 border-opacity-20 gap-2 rounded-full h-10 px-4 w-[30vw] text-gray-400 focus-within:w-[55vw]">
                    <CiSearch className="h-4 w-4 text-gray-500" />
                    <form className="w-full">
                        <input
                            className="w-full text-sm bg-transparent placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-none"
                            name="search"
                            id="search"
                            placeholder="Search for ecosystems, trending quests etc,."
                        />
                    </form>
                </search>
                <nav className="flex items-center gap-8 text-gray-400 flex-1 peer-focus-within:hidden">
                    <a href="#compass">Compass</a>
                    <a href="#explore">Explore</a>
                    <a href="#academy">Academy</a>
                    <a href="#nfts">NFTs</a>
                    <a href="#projects">For Projects</a>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <PiTelevisionSimple
                    className="h-11 w-11 border-2 border-[#b0601b] bg-[#100a20] rounded-full p-2 cursor-pointer"
                    color="#b0601b"
                />
                <button className="bg-white hover:bg-gray-300 rounded-md px-8 py-1.5 text-black font-medium text-sm transition-all duration-300 ease-in-out">
                    Sign In
                </button>
                <div className="lg:hidden">
                    <IoMdMenu size={24} />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
