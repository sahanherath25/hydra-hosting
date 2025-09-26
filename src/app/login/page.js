import React from 'react';
import Hero from "@/components/Hero";

const LoginPage = () => {
    return (

        <div className={"relative  flex-col  items-center justify-center "}>

            <Hero imageSrc={"/reliability.jpg"} alt={"Reliability Site "}/>


            <div className={"relative flex items-center justify-center z-10  "}>
                <h1 className={` `}>Hydra Cloud Hosting</h1>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque blanditiis consequuntur ducimus ea
                eius est exercitationem harum hic labore magnam maiores minus modi molestias nam nisi non nulla officiis
                possimus quasi repellat, sed veniam veritatis. Aliquam, culpa deserunt, ducimus excepturi, facere
                inventore ipsa iure laboriosam provident quia quibusdam saepe tenetur velit? Accusamus aliquid
                asperiores dicta esse eveniet ex, fugiat impedit in laudantium, magni maiores minima molestiae natus
                nihil, obcaecati quos rerum ullam veniam. Autem consequatur eligendi error, explicabo ipsam, iste labore
                neque nulla provident reiciendis rem repellat sunt ullam veritatis voluptatem! Ab impedit ipsam
                laudantium officia quidem repudiandae suscipit!
            </p>

        </div>


    );
};

export default LoginPage;