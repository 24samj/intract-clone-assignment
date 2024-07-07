import Image from "next/image";
import { HiOutlineBookOpen } from "react-icons/hi";
import React from "react";

function Dictionary({ dictionary }) {
    return (
        <div className="relative my-4 w-full lg:w-[90%] h-96 bg-gray-500 rounded-2xl overflow-hidden cursor-pointer">
            <Image
                src={dictionary.imgUrl}
                alt="dictionary"
                fill
                className="rounded-md"
            />
            <div className="flex justify-between absolute bottom-0 left-0 right-0 p-4">
                <div>
                    <h3 className="text-lg">{dictionary.title}</h3>
                    <p className="text-gray-400 text-sm">
                        {dictionary.subtitle}
                    </p>
                </div>
                <div className="border border-gray-500 border-opacity-40 backdrop-blur-lg rounded-full p-4">
                    <HiOutlineBookOpen size={24} />
                </div>
            </div>
        </div>
    );
}

export default Dictionary;
