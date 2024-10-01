import Footer from "../components/Footer";
import Header from "../components/Header";
import { KementrianInterface, LayananInterface } from "../components/interface/AllInterfaceAndTypes";
import React, { useEffect, useState } from "react";
import { BaseCard } from "../components/cards/BaseCard";
import ImageWithFallback from "../components/images/ImageWithFallback";

const loremIpsum = "Lorem ipsum dolor sit amet consectetur. Urna volutpat ac sed tristique est posuere. Diam orci lobortis quisque diam euismod ac interdum nulla sapien."

export const dummyListKementrian: KementrianInterface[] = []

const dummyLayanan: LayananInterface = {
	nama: "NAMA LAYANAN KEMENTRIAN",
	deskripsi: loremIpsum,
}

for (let i = 0; i < 3; ++i) {
	let element: KementrianInterface = {
		nama: "NAMA KEMENTRIAN " + i,
		logo: "placeholder",
		layanan: [dummyLayanan, dummyLayanan, dummyLayanan]
	}
	dummyListKementrian.push(element);
}

const dummyListKemenkoan = [
    {
        nama: "NAMA KEMENKOAN",
        logo: "placeholder",
        penjelasan: {loremIpsum},
        daftarKementerian: dummyListKementrian,
        bukaMagang: true
    },
    {
        nama: "NAMA KEMENKOAN",
        logo: "placeholder",
        penjelasan: {loremIpsum},
        daftarKementerian: dummyListKementrian,
        bukaMagang: false
    },
    {
        nama: "NAMA KEMENKOAN",
        logo: "placeholder",
        penjelasan: {loremIpsum},
        daftarKementerian: dummyListKementrian,
        bukaMagang: true
    }
]

const Kementrian = () => {
	const [navHeight, setNavHeight] = useState(0);
    
    useEffect(() => {
        const updateNavHeight = () => {
            const headerElement = document.querySelector("header");
            const newNavHeight = headerElement.offsetHeight;
            const scrollAdjustment = document.querySelector("html");
            scrollAdjustment.style.scrollPaddingTop = `${newNavHeight + 2}px`;
            scrollAdjustment.style.scrollBehavior = "smooth";
            setNavHeight(newNavHeight);
        };
        updateNavHeight();
        window.addEventListener("resize", updateNavHeight);
        return () => window.removeEventListener("resize", updateNavHeight);
    }, []);
	return (
		<div className="bg-[#F1F1F1] text-black relative">
			<Header />
			<div className="bg-[#F1F1F1] h-[3.4375rem] md:h-[12.8125rem]"></div>
			<div className="relative z-10">
				<div className="mx-[10%]">
					<h1 className="font-semibold text-2xl md:text-4xl mb-3 md:mb-5">
						KEMENTRIAN KM ITB
					</h1>
					<p className="text-sm md:text-xl mb-[3.25rem] md:mb-[5.375rem]">
						{loremIpsum}
					</p>
					{dummyListKemenkoan.map(({nama, logo, penjelasan, daftarKementerian, bukaMagang}, index) => {
                        return (
                            <div className="flex flex-col w-full items-center space-y-8 pb-20" key={index}>
                                <ImageWithFallback src={logo} alt={'Logo ' + nama} width="25%" />
                                <div className="font-bold text-3xl">
                                    {nama}
                                </div>
                                <div className="text-sm md:text-xl">
                                    {penjelasan.loremIpsum}
                                </div>
                                <div className="font-bold text-2xl self-start">Daftar Kementrian</div>
                                <div className="flex flex-col w-full space-y-5">
                                    {daftarKementerian.map(({nama, logo, layanan}, index) => {
                                        return (
                                            <BaseCard size={'30%'} 
                                              singkatan={nama}
                                              src={logo}
                                              customEl={
                                                    <>
                                                        <ul className="text-start pb-8">
                                                            {layanan.map(({nama}) => {
                                                                return (
                                                                    <li><a href="#" className="underline font-semibold text-xl">{nama}</a></li>
                                                                )
                                                            })}
                                                        </ul>
                                                        {bukaMagang ? <a href="#" className="bg-[#8EEBD8] underline text-start text-xl font-bold w-fit">BUKA MAGANG</a>
                                                                        : <a href="#" className="bg-[#CF3A58] underline text-start text-xl font-bold w-fit">TIDAK BUKA MAGANG</a>}
                                                    </>
                                                }
                                              key={index} />
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Kementrian;
