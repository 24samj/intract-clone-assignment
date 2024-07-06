import React from "react";

const Section = ({ children, reverse }) => (
    <section
        className={`flex flex-col gap-24 lg:gap-0 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:max-h-[40rem] justify-around p-8`}>
        {children}
    </section>
);

export default Section;
