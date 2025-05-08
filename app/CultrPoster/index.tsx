"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CultrPoster() {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo(true);
    };

    const handleClose = () => {
        setShowVideo(false);
    };

    const handleSocialClick = (e: React.MouseEvent, url: string) => {
        e.stopPropagation(); // prevent background click
        window.open(url, "_blank");
    };

    const [windowWidth, setWindowWidth] = useState<number>(0);

    console.log(windowWidth, "windowWidth");

    useEffect(() => {
        // Initial set
        setWindowWidth(window.innerWidth);

        // Resize listener
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Images */}
            <div className={`absolute inset-0 z-10 ${showVideo ? 'filter blur-sm' : ''}`}>
                <div className="relative w-full h-full">

                    {/* Desktop Background */}
                    <Image
                        src="/images/websiteHorizontal.png"
                        alt="Cultr Poster Desktop"
                        fill
                        sizes="(min-width: 1024px) 100vw"
                        className="object-cover md:block hidden"
                        priority
                    />

                    {/* Mobile Background */}
                    <Image
                        src="/images/websitePhone.png"
                        alt="Cultr Poster Mobile"
                        fill
                        sizes="(max-width: 1023px) 100vw"
                        className="object-cover md:hidden block"
                        priority
                    />
                </div>
            </div>

            {!showVideo && (
                <div className="absolute inset-0 z-10 cursor-pointer" onClick={handleClick}>
                    <div className="relative w-full h-full">

                        {/* Social Media Buttons */}
                        <div className="absolute xl:bottom-[22%] xl:right-[12%] lg:bottom-[22%] lg:right-[8%] md:right-[6%] md:bottom-[20%] flex md:flex-row flex-col right-[4%] bottom-[12%] gap-3 z-20">
                            <button
                                onClick={(e) => handleSocialClick(e, "https://wa.me/7838064964")}
                                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                            >
                                <Image
                                    src="/images/whatsapp.png"
                                    alt="WhatsApp"
                                    width={68}
                                    height={68}
                                    className="w-[38px] md:w-[68px] h-auto"
                                />
                            </button>
                            <button
                                onClick={(e) => handleSocialClick(e, "https://www.instagram.com/cultr.inc")}
                                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                            >
                                <Image
                                    src="/images/instagram.png"
                                    alt="Instagram"
                                    width={68}
                                    height={68}
                                    className="w-[38px] md:w-[68px] h-auto"
                                />
                            </button>
                            <button
                                onClick={(e) => handleSocialClick(e, "https://www.linkedin.com/in/deveshrohmetra")}
                                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                            >
                                <Image
                                    src="/images/linkedin.png"
                                    alt="LinkedIn"
                                    width={68}
                                    height={68}
                                    className="w-[38px] md:w-[68px] h-auto"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Video Modal */}
            {showVideo && (
                <>

                    <div className="absolute inset-0 z-30 flex items-center justify-center">


                        <div className="relative w-[90%] md:w-[80%]">


                            <div className="absolute sm:bottom-20 sm:right-2 bg-black/70 px-2 py-3 rounded-xl sm:flex sm:flex-col sm:items-center hidden gap-3 shadow-lg z-10">
                                <button
                                    onClick={(e) => handleSocialClick(e, "https://www.linkedin.com/in/deveshrohmetra")}
                                    className="hover:scale-110 transition-transform cursor-pointer"
                                >
                                    <Image
                                        src="/images/linkedin.png"
                                        alt="LinkedIn"
                                        width={28}
                                        height={28}
                                        sizes="(max-width: 639px) 60px,(max-width: 767px) 38px, 98px"
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </button>
                                <button
                                    onClick={(e) => handleSocialClick(e, "https://www.instagram.com/cultr.inc")}
                                    className="hover:scale-110 transition-transform cursor-pointer"
                                >
                                    <Image
                                        src="/images/instagram.png"
                                        alt="Instagram"
                                        width={28}
                                        height={28}
                                        sizes="(max-width: 639px) 60px,(max-width: 767px) 38px, 98px"
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </button>
                                <button
                                    onClick={(e) => handleSocialClick(e, "https://wa.me/7838064964")}
                                    className="hover:scale-110 transition-transform cursor-pointer"
                                >
                                    <Image
                                        src="/images/whatsapp.png"
                                        alt="WhatsApp"
                                        width={28}
                                        height={28}
                                        sizes="(max-width: 639px) 60px,(max-width: 767px) 38px, 98px"
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </button>
                            </div>

                            <div
                                //  className={`absolute  ${windowWidth === 425 ? "-top-15 right-30" :windowWidth === 375 ?"-top-15 right-25" : windowWidth === 320 ?"-top-12 right-22" :""} bg-black/70 px-2 py-3 rounded-xl sm:hidden  flex flex-row items-center  gap-3 shadow-lg z-10`}


                                className={`absolute
                                ${windowWidth >= 376 && windowWidth <= 425
                                        ? "-top-15 right-30"
                                        : windowWidth >= 321 && windowWidth <= 375
                                            ? "-top-15 right-25"
                                            : windowWidth <= 320
                                                ? "-top-12 right-22"
                                                : ""
                                    }
                                bg-black/70 px-2 py-3 rounded-xl sm:hidden flex flex-row items-center gap-3 shadow-lg z-10`}
                            >
                                <button
                                    onClick={(e) => handleSocialClick(e, "https://www.linkedin.com/in/deveshrohmetra")}
                                    className="hover:scale-110 transition-transform cursor-pointer"
                                >
                                    <Image
                                        src="/images/linkedin.png"
                                        alt="LinkedIn"
                                        width={28}
                                        height={28}
                                        sizes="(max-width: 321px) 70px,(max-width: 376px) 90px,(max-width: 639px) 90px,(max-width: 767px) 38px, 98px"
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </button>
                                <button
                                    onClick={(e) => handleSocialClick(e, "https://www.instagram.com/cultr.inc")}
                                    className="hover:scale-110 transition-transform cursor-pointer"
                                >
                                    <Image
                                        src="/images/instagram.png"
                                        alt="Instagram"
                                        width={28}
                                        height={28}
                                        sizes="(max-width: 321px) 70px,(max-width: 376px) 90px,(max-width: 639px) 90px,(max-width: 767px) 38px, 98px"
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </button>
                                <button
                                    onClick={(e) => handleSocialClick(e, "https://wa.me/7838064964")}
                                    className="hover:scale-110 transition-transform cursor-pointer"
                                >
                                    <Image
                                        src="/images/whatsapp.png"
                                        alt="WhatsApp"
                                        width={28}
                                        height={28}
                                        sizes="(max-width: 321px) 70px,(max-width: 376px) 90px,(max-width: 639px) 90px,(max-width: 767px) 38px, 98px"
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </button>
                            </div>


                            <video
                                src="https://cultr-website.s3.ap-south-1.amazonaws.com/Cultr.mp4"
                                controls
                                autoPlay
                                playsInline
                                className="w-full rounded-xl shadow-lg"
                            />



                            <button
                                onClick={handleClose}
                                className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-200"
                                aria-label="Close video"
                            >
                                ✕
                            </button>
                        </div>
                    </div>


                </>
            )}

        </div>
    );
}
