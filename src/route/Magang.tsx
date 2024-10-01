import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { KementrianInterface, MagangInterface } from "../components/interface/AllInterfaceAndTypes";
import KementrianCard from "../components/KementrianCard";
import React, { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";

const loremIpsum = "Lorem ipsum dolor sit amet consectetur. Urna volutpat ac sed tristique est posuere. Diam orci lobortis quisque diam euismod ac interdum nulla sapien."

export const dummyListKementrian: KementrianInterface[] = []

const dummyMagang: MagangInterface = {
	nama: "POSISI MAGANG",
	deskripsi: loremIpsum,
}

for (let i = 0; i < 3; ++i) {
	let element: KementrianInterface = {
		nama: "NAMA KEMENTRIAN " + i,
		logo: "placeholder",
		magang: [dummyMagang, dummyMagang, dummyMagang],
	}
	dummyListKementrian.push(element);
}

const Magang = () => {
	const [listKementrian, setKementrian] = useState<KementrianInterface[]>(dummyListKementrian);
	useEffect(() => {
		const fetchKementrianData = async () => {
			try {
				const response = await fetch(`api/kementrian`);
				const data = await response.json();
				setKementrian(data);
			} catch (e) {
				console.error("Error Fetching Kementrian :", e);
			}
		};
		fetchKementrianData();
	}, []);
	return (
		<div>
			<MainContainer>
				<div className="bg-[#F1F1F1] h-[3rem] md:h-[12rem]"></div>
				<div className="relative z-10">
					<h1 className="font-semibold text-2xl md:text-4xl mb-3 md:mb-10">
						MAGANG KM ITB
					</h1>
					<p className="text-sm md:text-2xl mb-[3.25rem] md:mb-[4.625rem]">
						{loremIpsum}
					</p>
					<h2 className="font-bold text-sm md:text-3xl mb-5 md:mb-7">
						NAVIGASI CEPAT
					</h2>
					<ul className="pl-0 space-y-5 md:space-y-14 font-semibold text-2xl md:text-4xl mb-[5.25rem] md:mb-[10.625rem]">
						{listKementrian.map((element, index) => (
							<li key={index} className="pl-0 list-none font-semibold text-2xl md:text-4xl">
								<div className="flex items-center">
									<ArrowForwardIosIcon
										sx={{
											color: "#1C1B1F",
											fontSize: "1.25rem",
											"@media (min-width:768px)": {
												fontSize: "2.75rem",
											},
										}}
									/>
									<a href={`#${element.nama}`} className="pl-4 md:pl-9">{element.nama}</a>
								</div>
							</li>
						))}
					</ul>
					<h2 className="font-bold text-sm mb-3 md:text-3xl md:mb-12">SEMUA LAYANAN</h2>
					{listKementrian.map((element, index) => (
						<div key={index}>
							<KementrianCard KementrianInput={element} type="magang" />
						</div>
					))}
				</div>
			</MainContainer>
		</div>
	);
};

export default Magang;
