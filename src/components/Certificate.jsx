import Image from "next/image";
import React from "react";
import { FaCheck, FaLock } from "react-icons/fa6";

function Certificate({ title, subtitle, imgUrl }) {
    return (
        <div className="mt-24 flex flex-col gap-2 mx-auto h-[50rem] max-w-44 overflow-visible lg:mx-0">
            <FaCheck
                color="gray"
                className="border-2 border-gray-500 border-opacity-30 rounded-full h-12 w-12 p-2 bg-[#151515] self-center"
            />
            <div className="relative h-[25%] w-full">
                <Image
                    src={imgUrl}
                    alt="quest"
                    fill
                    className="rounded-3xl border-2 border-gray-500 border-opacity-40 p-2"
                />
                <div className="absolute -bottom-6 -right-4 border-2 border-gray-500 border-opacity-40 rounded-full p-4 bg-[#131313]">
                    <FaLock size={16} className=" text-white" />
                </div>
            </div>
            <h3 className="mt-4 text-xl text-nowrap">{title}</h3>
            <p className="text-gray-400 text-opacity-35">{subtitle}</p>
            <button className="mt-2 bg-[#151515] text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed border border-gray-500 border-opacity-10">
                Claim
            </button>
        </div>
    );
}

export default Certificate;
