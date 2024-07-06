import React from "react";

function StickyNav(props) {
    return (
        <div className="sticky bottom-0 border-b border-gray-500 border-opacity-20 pb-8">
            <div className="flex border backdrop-blur-lg border-gray-400 border-opacity-50 rounded-full w-max mx-auto">
                <button className="bg-[rgba(255,255,255,0.25)] text-gray-300 hover:text-white py-2 px-8 rounded-full transition-all duration-300 ease-in-out">
                    Essentials
                </button>
                <button className="hover:bg-[rgba(255,255,255,0.1)] text-gray-300 hover:text-white py-2 px-8 rounded-full transition-all duration-300 ease-in-out">
                    Alpha Hub
                </button>
            </div>
        </div>
    );
}

export default StickyNav;
