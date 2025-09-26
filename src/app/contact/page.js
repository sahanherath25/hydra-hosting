import React from 'react';
import Image from "next/image";
import Hero from "@/components/Hero";


const ContactPage = () => {
    return (
        <div className={` relative  w-full h-[400px] lg:h-[calc(100vh-70px)] `}>
            {/*<div className={"  contact-page h-screen "}>*/}

            <Hero imageSrc={"/performance.jpg"} alt={"Knowledge is Power"}/>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/90 -z-0"></div>

            <div className={"relative flex items-center justify-center z-10  "}>
                <h1 className={` `}>Hydra Cloud Hosting</h1>
            </div>

        </div>


    );
};

export default ContactPage;