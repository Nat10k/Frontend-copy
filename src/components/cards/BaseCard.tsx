import React from "react";
import ImageWithFallback from "../images/ImageWithFallback";
import { BaseCardProps } from "../interface/AllInterfaceAndTypes";

/**
 * ## **BaseCard Component**
 * 
 * Ini adalah komponen BaseCard. Tujuan dibuat kelas ini adalah untuk mempermudah penggunaa ulang untuk komponen yang mirip.
 * 
 * ### Contoh Penggunaan
 * 
 * ```js
 * <BaseCard size="100px" onClick={handleClick}>
 *   <h1>Title</h1>
 *   <p>Description</p>
 * </BaseCard>
 * ```
 */

const BaseCard: React.FC<BaseCardProps> = ({
    size,
    src = "",
    alt = "",
    onClick,
    singkatan,
    kepanjangan,
    penjelasan,
    customEl
}) => {
    return (
        <button
            className="flex flex-col md:flex-row w-full p-8 shadow-md md:shadow-xl bg-white items-center transition-transform duration-300 transform hover:scale-105"
            onClick={onClick}
        >
            <ImageWithFallback src={src} alt={alt} width={size} height={size} />
            <div className="w-32 h-12" />
            <div className="flex flex-col w-full justify-end sm:min-w-[70%] space-y-4">
                <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                    {singkatan}
                </h1>
                <h2 className="text-lg md:text-lg lg:text-xl xl:text-2xl font-bold">
                    {kepanjangan}
                </h2>
                <p className="text-base md:text-base lg:text-lg xl:text-xl">
                    {penjelasan}
                </p>
                {customEl}
            </div>
        </button>
    );
};

export { BaseCard };
