import ImageWithFallback from "../components/images/ImageWithFallback";
import { Himpunan, Socmed, Person, Fakultas } from "../components/interface/AllInterfaceAndTypes";
import { TipeLembaga } from "../components/interface/AllInterfaceAndTypes";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../components/MainContainer";

const dummySocmed: Socmed = {
	instagram: "HMJ1",
	twitter: "HMJ1",
	website: "www.example.com",
	oaLine: "HMJ1",
	tiktok: "hmj1",
	youtube: "hmj1",
};

var loremIpsum =
	"Lorem ipsum dolor sit amet consectetur. Nibh aliquet blandit ornare convallis interdum lacus mauris id. Tellus erat blandit mauris viverra dolor. Suscipit donec sed mattis duis. Scelerisque lacus id vitae risus et ac sit bibendum pellentesque.";

const dummyPersons: Person[] = [
	{
		nama: "Nama Wajah",
		jabatan: "Contoh Jabatan",
		programStudi: "Program Studi",
		nim: "XXXXXXXX",
		foto: "",
	},
	{
		nama: "Nama Wajah",
		jabatan: "Contoh Jabatan",
		programStudi: "Program Studi",
		nim: "XXXXXXXX",
		foto: "",
	},
];

const dummyHimpunan: Himpunan = {
	nama: "SINGKATAN 1",
	namaPanjangLembaga: "NAMA LENGKAP HIMPUNAN 1",
	logoHimpunan: "",
	tipe: TipeLembaga.Himpunan,
	namaHimpunan: "SINGKATAN",
	asasHimpunan: loremIpsum,
	deskripsi: loremIpsum,
	sejarah: loremIpsum,
	video: "",
	fakultas: Fakultas.DummyFakultas,
	budaya: loremIpsum,
	hariJadi: new Date("1970-01-01"),
	visi: loremIpsum,
	misi: loremIpsum,
	alamatSekre: loremIpsum,
	aboutUs: loremIpsum,
	wajahHimpunan: dummyPersons,
	socialMedia: dummySocmed,
};


const DetailHMJ = () => {
	const { idHimpunan } = useParams();
	const [himpunan, setHimpunan] = useState<Himpunan>(dummyHimpunan);

	useEffect(() => {
		const fetchHimpunanData = async () => {
			try {
				const response = await fetch(`${idHimpunan}`);
				const data = await response.json();
				setHimpunan(data);
			} catch (e) {
				console.error("Error Fetching", idHimpunan, ": ", e);
			}
		};
		if (idHimpunan) {
			fetchHimpunanData();
		}
	}, [idHimpunan]);

	return (
		<div>
			<img src={"../assets/icons/x-gradinet-2.svg"} className="absolute z-0 md:scale-75 md:size-[55vw] transform origin-left md:top-[-5vw]" />
			<MainContainer>
				<div className="bg-[#F1F1F1] h-[3.375rem] md:h-[6rem]"></div>
				<div className="relative z-10">
					<div className="mx-auto mb-[3.4375rem] md:mb-[2.1875rem] size-[67%] md:size-[29%] aspect-square max-w-64 md:max-w-[46rem]">
						<ImageWithFallback
							src={himpunan.logoHimpunan}
							alt={`Foto ${himpunan.nama}`}
							width="100%"
							height="100%"
						/>
					</div>

					<div className="text-center">
						<h1 className="font-semibold text-2xl md:text-4xl md:mb-4">
							{himpunan.nama}
						</h1>
						<h2 className="font-bold text-base md:text-2xl mb-[2.125rem] md:mb-[2.8125rem]">
							{himpunan.namaPanjangLembaga}
						</h2>
						<div className="flex items-center justify-center">
							<p className="text-sm md:text-xl max-w-[19rem] md:max-w-4xl mb-[2.125rem] md:mb-[8.625rem]">
								{himpunan.deskripsi}
							</p>
						</div>
					</div>
					<div className="xl:flex mb-9 md:mb-[10.5rem] md:gap-72">
						<div id="visi" className="mb-[2.8125rem] xl:mb-0">
							<h2 className="font-semibold text-2xl md:text-4xl mb-[0.9375rem]">VISI</h2>
							<p className="text-sm md:text-xl">{himpunan.visi}</p>
						</div>
						<div id="misi" className="">
							<h2 className="font-semibold text-2xl md:text-4xl mb-[0.9375rem]">MISI</h2>
							<p className="text-sm md:text-xl">{himpunan.misi}</p>
						</div>
					</div>
					<div className="flex flex-col mb-[4.0625rem] md:mb-[6.25rem]">
						<h2
							id="video-profil"
							className="font-semibold text-2xl md:text-4xl mb-5 md:mb-[2.75rem]"
						>
							VIDEO PROFIL
						</h2>
						<div className="flex justify-center">
							<video className="aspect-video w-[100%] max-w-[180rem]" controls>
								<source src={himpunan.video} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
					<h2
						id="wajah"
						className="font-semibold text-2xl md:text-4xl mb-[2.125rem] md:mb-[3.375rem]"
					>
						WAJAH
					</h2>
					<ul className="pl-0 mb-[5.75rem] lg:mb-[7.125rem] space-y-[2.125rem] lg:space-y-[3.75rem]">
						{himpunan.wajahHimpunan.map((wajah, index) => (
							<li key={index} className="pl-0 flex gap-5 md:gap-[3.75rem]">
								<div className="aspect-square size-[35vw] md:min-h-72 md:min-w-72 md:size-[16vw] md:max-h-96 md:max-w-96">
									<ImageWithFallback
										src={wajah.foto}
										alt={`Foto ${wajah.nama}`}
										width="100%"
										height="100%"
									/>
								</div>
								<div>
									<h3 className="font-bold text-base md:text-3xl mt-[15%] mb-[10%] md:mt-[30%] md:mb-7">
										{wajah.nama}
									</h3>
									<div className="text-sm md:text-xl">
										<h4>{wajah.jabatan}</h4>
										<h4>{wajah.programStudi}</h4>
										<h4>{wajah.nim}</h4>
									</div>
								</div>
							</li>
						))}
					</ul>
					<div className="space-y-10 md:space-y-[2.125rem] md:mb-[6.25rem] mb-14">
						<article id="sejarah" className="mb-10 md:mb-[2.125rem]">
							<h2 className="font-bold text-base md:text-4xl md:mb-10">
								SEJARAH
							</h2>
							<p className="text-sm md:text-xl">{himpunan.sejarah}</p>
						</article>
						<article id="asas" className="mb-10 md:mb-[2.125rem]">
							<h2 className="font-bold text-base md:text-4xl md:mb-10">
								PROFIL / ASAS HIMPUNAN
							</h2>
							<p className="text-sm md:text-xl">{himpunan.asasHimpunan}</p>
						</article>
						<article id="budaya" className="mb-10 md:mb-[2.125rem]">
							<h2 className="font-bold text-base md:text-4xl md:mb-10">BUDAYA</h2>
							<p className="text-sm md:text-xl">{himpunan.budaya}</p>
						</article>
						<article id="about-us" className="mb-10 md:mb-[2.125rem]">
							<h2 className="font-bold text-base md:text-4xl md:mb-10">
								MENGENAI KAMI
							</h2>
							<p className="text-sm md:text-xl">{himpunan.aboutUs}</p>
						</article>
					</div>
					<h2
						id="kontak"
						className="font-semibold text-2xl md:text-4xl md:mb-[2.5rem] mb-8 max-w-44 md:max-w-[22rem]"
					>
						KONTAK DAN SOSIAL MEDIA
					</h2>
					<h3 className="font-bold text-base md:text-3xl mb-3 md:mb-6">MEDIA SOSIAL</h3>
					<ol className="flex flex-row gap-x-7 md:gap-x-12 text-sm md:text-2xl mb-10 md:mb-[40rem] max-w-44 md:max-w-96">
						<li className="list-none pl-0">
							<a
								href={`https://instagram.com/${himpunan.socialMedia.instagram}`} aria-label={`Instagram ${himpunan.nama}`}					>
								<img
									src="../assets/icons/instagram.svg"
									alt={`Instagram ${himpunan.nama}`}
									className="object-contain w-[100%] h-[100%]"
								/>
							</a>
						</li>
						<li className="list-none pl-0">
							<a
								href={`https://tiktok.com/@${himpunan.socialMedia.tiktok}`} aria-label={`TikTok ${himpunan.nama}`}					>
								<img
									src="../assets/icons/tiktok.svg"
									alt={`TikTok ${himpunan.nama}`}
									style={{ width: "100%", height: "100%", objectFit: "contain" }}
								/>
							</a>
						</li>
						<li className="list-none pl-0">
							<a
								href={`https://youtube.com/@${himpunan.socialMedia.youtube}`} aria-label={`YouTube ${himpunan.nama}`}					>
								<img
									src="../assets/icons/youtube.svg"
									alt={`YouTube ${himpunan.nama}`}
									style={{ width: "100%", height: "100%", objectFit: "contain" }}
								/>
							</a>
						</li>
						<li className="list-none pl-0">
							<a
								href={`https://x.com/${himpunan.socialMedia.twitter}`} aria-label={`X ${himpunan.nama}`}					>
								<img
									src="../assets/icons/twitter.svg"
									alt={`X ${himpunan.nama}`}
									style={{ width: "100%", height: "100%", objectFit: "contain" }}
								/>
							</a>
						</li>
						{/* <li className="list-none pl-0">
						<a href={`https://${himpunan.socialMedia.website}`}>
							Website - {himpunan.socialMedia.website}{" "}
						</a>
					</li>
					<li>
						<a
							href={`https://line.me/R/ti/p/${encodeURIComponent(himpunan.socialMedia.oaLine)}`}
						>
							OA Line - {himpunan.socialMedia.oaLine}{" "}
						</a>
					</li>*/}
					</ol>
				</div>
			</MainContainer >
		</div >
	);
};

export default DetailHMJ;
