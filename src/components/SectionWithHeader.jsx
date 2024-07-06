import React from "react";

const SectionWithHeader = ({ title, subtitle, children }) => (
    <section className="flex flex-col items-center w-full py-12 px-8 gap-4 border-t border-gray-500 border-opacity-20">
        <h3 className="text-3xl mx-auto">{title}</h3>
        <p className="text-gray-500 mx-auto">{subtitle}</p>
        {children}
    </section>
);

export default SectionWithHeader;
