import React from "react";
import { FaDiscord, FaSpotify, FaTelegram, FaTwitter } from "react-icons/fa6";

function Footer(props) {
    const sections = [
        {
            title: "INTRACT",
            items: ["ExploreQuests", "Communities", "Alpha Hub"],
        },
        {
            title: "EARN",
            items: ["Refer & Earn", "Leaderboard", "Achievements"],
        },
        {
            title: "ABOUT",
            items: [
                "Product Roadmap",
                "Affiliate Program",
                "Sign up Program",
                "Growth Community",
                "Blogs",
            ],
        },
        {
            title: "SUPPORT",
            items: [
                "Help Center",
                "Create your quest",
                "Terms of Service",
                "Privacy Policy",
                "Community Guidelines",
            ],
        },
    ];

    const socialMedia = [
        { icon: FaTwitter, color: "#2d67d2" },
        { icon: FaDiscord, color: "#07899e" },
        { icon: FaTelegram, color: "#2e68d4" },
        { icon: FaSpotify, color: "#01d401" },
    ];

    return (
        <div className="w-[90%] max-w-screen-xl mx-auto my-16">
            <div className="flex flex-col lg:flex-row w-full border-b border-gray-500 border-opacity-20 pb-8">
                <div className="w-full lg:w-[40%]">
                    <h3 className="text-3xl mx-auto">intract.</h3>
                    <p className="text-gray-400 text-sm mt-4">
                        We are your personal guide for exploring <br /> web3
                        projects & earning 100x rewards
                    </p>
                </div>

                <nav className="w-full lg:w-[60%] grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center mt-8 lg:mt-0">
                    {sections.map((section, index) => (
                        <div key={index} className="w-[50%] lg:w-[30%]">
                            <h4>{section.title}</h4>
                            <ul>
                                {section.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-[#6c6c6c] hover:text-white transition-all duration-300 ease-in-out cursor-pointer text-nowrap mt-2">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>
            <div>
                <p className="text-gray-400 text-sm mt-8 border-b border-gray-500 border-opacity-20 pb-8">
                    <span className="text-white">Disclaimer: </span>
                    Crypto Products, Virtual Digital Assets, and NFTs are
                    unregulated and can be highly risky. There may be no
                    regulatory recourse for any loss from such transactions. We
                    advise the viewer to proceed with caution. Nothing in this
                    website or any communication published by us amounts to, is
                    intended to be, or should be construed as investment or
                    purchase advice of any kind or financial advice or promotion
                    under any applicable laws. Any decision made based on the
                    content provided on this website or any communication
                    published by us shall not be attributable to us.
                </p>
            </div>
            <div className="flex justify-between mt-8">
                <h3>CREATED BY SUMIT</h3>
                <nav className="flex gap-4">
                    {socialMedia.map((media, index) => (
                        <div
                            key={index}
                            className="bg-[#161616] p-2 rounded-lg cursor-pointer">
                            <media.icon color={media.color} />
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default Footer;
