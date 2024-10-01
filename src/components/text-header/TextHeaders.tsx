import React from "react";

export const TextHeader1: React.FC<{ judul: string; subjudul: string; }> = ({ judul, subjudul }) => {
    return (
        <div className='flex flex-col space-y-2'>
            <h1 className='text-black font-bold md:text-4xl text-2xl'>
                {judul}
            </h1>
            <div className="h-[1rem]"/>
            <p>
                {subjudul}
            </p>
        </div>
    )
}

export const TextHeader2: React.FC<{ judul: string; subjudul: string; }> = ({ judul, subjudul }) => {
    return (
        <div className='flex flex-col space-y-2'>
            <h1 className='text-black font-bold md:text-4xl text-2xl'>
                {judul}
            </h1>
            <div className="h-[1rem]"/>
            <p className="font-bold text-2xl">
                {subjudul}
            </p>
        </div>
    )
}