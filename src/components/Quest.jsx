import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";

function Quest({ quest, title, subtitle }) {
    const quests = quest;

    return (
        <details
            open
            className="relative border-2 h-full lg:w-[35%] border-gray-500 border-opacity-20 rounded-xl text-center cursor-pointer bg-[#090909] overflow-hidden">
            <summary className="flex h-48 w-full bg-[#151515] p-4 hover:bg-[#313131] transition-all duration-300 ease-in-out">
                <div className="relative w-[50%] lg:w-[35%] border-2 rounded-2xl border-gray-500 border-opacity-20 flex justify-center">
                    <Image
                        src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
                        alt="quest"
                        fill
                        className="w-[30%] border-2 rounded-xl border-blue-500 border-opacity-20 p-2"
                        priority
                    />
                    <h4 className="absolute bottom-3 w-min text-nowrap border border-gray-500 border-opacity-20 text-center text-sm text-white backdrop-blur-lg bg-gray-500 bg-opacity-40 py-1 px-3 lg:py-2 lg:px-6 rounded-full">
                        {quest.length} Tasks
                    </h4>
                </div>
                <div className="w-[50%] lg:w-[65%] text-left p-4 flex flex-col justify-between">
                    <h3 className="text-3xl text-ellipsis overflow-hidden text-nowrap">
                        {title}
                    </h3>
                    <p className="mt-2 border-b-2 border-dotted border-gray-500 border-opacity-20 pb-4 text-sm text-gray-400 text-ellipsis overflow-hidden text-nowrap">
                        {subtitle}
                    </p>
                    <div className="flex gap-2 items-center w-min text-nowrap border border-gray-500 border-opacity-20 text-center text-sm text-white backdrop-blur-lg bg-gray-500 bg-opacity-40 py-1 px-4 rounded-full mt-4">
                        <GiTwoCoins color="#d4a015" />
                        {quest.length * 225} XPs
                    </div>
                </div>
            </summary>
            <div className="overflow-y-scroll max-h-96">
                {quests.map((quest, index) => (
                    <div
                        key={index}
                        className="flex justify-between border-2 border-gray-500 border-opacity-20 max-h-28 p-2 rounded-xl my-2 mx-4 bg-[#101010] hover:bg-[#1e1e1e] transition-all duration-300 ease-in-out">
                        <Image
                            src={quest.imgUrl}
                            alt="quest"
                            width={100}
                            height={100}
                            className="w-[30%] border-2 rounded-xl border-blue-500 border-opacity-20"
                        />
                        <div className="w-[70%] text-left flex flex-col justify-between px-2">
                            <h3 className="text-xl pb-4 border-b-2 border-dotted border-gray-500 border-opacity-20 text-ellipsis text-nowrap overflow-hidden">
                                {quest.title}
                            </h3>
                            <div className="flex justify-between text-gray-500 text-center w-full h-8 items-center">
                                <p>{quest.numberOfTasks} Tasks</p>
                                <div className="border-2 border-gray-500 border-opacity-30 w-[40%] h-[60%] rounded-full shadow-inner shadow-black bg-[#303030]" />
                                <FaCheck
                                    color="white"
                                    className="border-2 border-gray-500 border-opacity-30 rounded-full h-8 w-8 p-2 bg-[#303030]"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </details>
    );
}

export default Quest;
