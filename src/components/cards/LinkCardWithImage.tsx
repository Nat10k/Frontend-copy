import ImageWithFallback from "../images/ImageWithFallback";
import React from "react";
import { LinkCardProps } from "../interface/AllInterfaceAndTypes";

const LinkCardWithImage : React.FC<LinkCardProps> = ({href, image_url, text: name, image_alt="", className=""}) => {
    return (
        <a href={href} className={"flex flex-col items-center justify-center border rounded-xl md:rounded-[1.25rem] shadow-xl h-fit lg:aspect-square transition-transform duration-300 transform hover:scale-105 " + className}>
            <ImageWithFallback
                className="hidden lg:block pb-4" width="auto" height="35vh"
                src={image_url}
                alt={image_alt}
            />
            <ImageWithFallback
                className="lg:hidden pb-2" height="10vh"
                src={image_url}
                alt={image_alt}
            />
            <p className="text-sm lg:text-xl font-bold text-center w-[80%] lg:m-4 my-2 mx-4">
                {name}
            </p>
        </a>
    )
}

export default LinkCardWithImage;