import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";

function TopProjects({ projects }) {
    return (
        <div className="mt-4 flex flex-col w-full lg:w-[90%] gap-4 lg:flex-row lg:justify-between">
            {projects.map((project, index) => (
                <div
                    className="group relative h-[150vw] lg:h-96 lg:w-[20%] bg-gray-500 rounded-2xl overflow-hidden flex justify-center items-center"
                    key={index}>
                    <Image
                        src={project.imgUrl}
                        alt={project.name}
                        fill
                        objectFit="cover"
                        className="rounded-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-all duration-300 ease-in-out" />
                    <p className="absolute bottom-0 text-3xl lg:text-xl w-full text-left p-4">
                        {project.name}
                    </p>
                    <FaPlay
                        size={54}
                        className="absolute border border-gray-500 border-opacity-40 backdrop-blur-lg top-[50%] rounded-full translate-y-8 opacity-0 text-5xl lg:text-4xl text-white group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out p-4 cursor-pointer"
                    />
                    <div className="absolute top-0 right-0 border border-gray-500 border-opacity-40 backdrop-blur-lg bg-gray-500 bg-opacity-40 rounded-full cursor-pointer p-3 m-4">
                        <TfiVideoClapper />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TopProjects;
