import React from 'react';
import Image from "next/image";

const Hero = ({imageSrc, alt}) => {
    return (

        // <div className={` relative w-full h-[400px] lg:h-[calc(100vh-70px)]`}>
        <div className={`relative w-full lg:h-[calc(100vh-70px)]`}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 -z-0"></div>

            <div className={` absolute inset-0 -z-10 test`}>
                <Image
                    alt={alt ? alt : null}
                    src={imageSrc}
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                />

            </div>
        </div>
    );
};

export default Hero;