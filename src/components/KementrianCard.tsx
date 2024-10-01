import ImageWithFallback from "./images/ImageWithFallback";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { KementrianInterface } from "./interface/AllInterfaceAndTypes";
import React from "react";

const KementrianCard = ({ KementrianInput, type }: { KementrianInput: KementrianInterface, type: string }) => {
	return (
		<div>
			<h2 id={`${KementrianInput.nama}`} className="font-semibold text-2xl md:text-4xl mb-3 md:mb-12">{KementrianInput.nama}</h2>
			<div className="mx-auto mb-7 md:mb-12 size-[45%] sm:size-[31.25%] aspect-square sm:max-w-[46rem]">
				<ImageWithFallback
					src={KementrianInput.logo}
					alt={`Logo ${KementrianInput.nama}`}
					width="100%"
					height="100%"
				/>
			</div>
			<ul className="space-y-3 md:space-y-9 mb-10 md:mb-40 pl-0">
				{(type == "layanan" ? KementrianInput.layanan : KementrianInput.magang).map((element, index) => (
					<li key={index} className="mx-[6.25%] md:mx-0 list-none pl-0">
						<div className="flex items-center mb-2 md:mb-6">
							<ArrowForwardIosIcon
								sx={{
									color: "#1C1B1F",
									fontSize: "1rem",
									"@media (min-width:768px)": {
										fontSize: "2rem",
									},
								}}
							/>
							<h3 className="font-bold underline pl-1 md:pl-0 text-sm md:text-3xl mr-[40%]">{element.nama}</h3>
						</div>
						<p className="text-sm md:text-2xl pl-5 md:pl-8">{element.deskripsi}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default KementrianCard;
