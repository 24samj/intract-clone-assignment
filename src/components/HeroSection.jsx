import React from "react";
import heroBg from "../assets/hero-bg.png";

const HeroSection = () => (
    <div
        className="group relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${heroBg.src})` }}>
        <div className="bg-transparent p-8 text-white">
            <h1 className="text-4xl font-bold border-b border-gray-500 border-opacity-40 w-min mx-auto pb-4 text-left">
                <span className="font-normal">Intract</span> <br />
                <span className="italic">Academy</span>
            </h1>
            <p className="mt-4 text-lg text-center">
                Intract users{" "}
                <span className="text-gray-500">
                    have together made more than
                </span>{" "}
                $100 million{" "}
                <span className="text-gray-500">
                    in web3. <br /> Join them and
                </span>{" "}
                learn how to earn crypto!
            </p>
        </div>
        <button className="text-center text-sm w-56 py-2 bg-[#683be8] font-thin rounded-md hover:pl-2 transition-all duration-300 ease-in-out">
            Get started →
        </button>
    </div>
);

export default HeroSection;
