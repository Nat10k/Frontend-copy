import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Kongres = () => {
  let dummy_structural_km_itb = [
    {
      title: "KOMISI PERBAIKAN SISTEM",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.",
    },
    {
      title: "KOMISI PERBAIKAN SISTEM",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.",
    },
    {
      title: "KOMISI PERBAIKAN SISTEM",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.",
    },
  ];

  let dummy_structural_badan_kesekretariatan = [
    {
      title: "KOMISI PERBAIKAN SISTEM",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.",
    },
    {
      title: "KOMISI PERBAIKAN SISTEM",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.",
    },
    {
      title: "KOMISI PERBAIKAN SISTEM",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.",
    },
  ];

  let dummy_social_media = [
    {
      media: "Instagram",
      account: "Kongres",
    },
    {
      media: "Twitter",
      account: "Kongres",
    },
    {
      media: "OA LINE",
      account: "Kongres",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F1F1F1] text-black">
      <Header />
      <main className="h-full">
        <div className="flex items-center justify-between relative mb-9 md:mb-40">
          <div className="flex flex-row h-full w-full">
            <div className="absolute w-[78%]">
              <img
                className=""
                src="../assets/icons/dot-bg-orange-real.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col mt-[9rem] md:mt-[18.875rem] h-full w-full px-8 md:px-32 z-10">
              <div className="space-y-5 md:space-y-7 mb-16 md:mb-44">
                <h1 className="text-2xl md:text-5xl font-semibold">
                  KONGRES KM ITB
                </h1>
                <p className="text-sm md:text-lg font-semibold md:w-[50rem] text-justify">
                  Lorem ipsum dolor sit amet consectetur. Lorem venenatis
                  pellentesque elementum facilisi. Tristique amet ornare a sit
                  fames ultricies euismod. Purus id sed sodales ante convallis.
                  Orci tellus auctor nec sagittis nisl in ultrices morbi.
                </p>
              </div>
              <div className="space-y-3 md:space-y-5">
                <p className="text-base md:text-3xl font-bold">
                  ORGANOGRAM KM ITB
                </p>
                <img
                  className="w-full shadow-md md:shadow-xl"
                  src="../assets/images/dummy-organogram.png"
                  alt="Struktur Organorgam KM ITB"
                />
              </div>
              <div className="mt-20 md:mt-28">
                <div className="flex flex-row items-start mb-8 md:mb-16 -ml-5 md:-ml-12">
                  <div className="w-3 h-auto aspect-square mt-3 md:w-8 md:h-8 bg-[#FD9419] rounded-full mr-2 md:mr-4"></div>
                  <h2 className="text-2xl md:text-4xl font-semibold">
                    STRUKTURAL KM ITB
                  </h2>
                </div>
                <div className="space-y-7 md:space-y-14">
                  {dummy_structural_badan_kesekretariatan.map((unit, index) => {
                    return (
                      <div key={index} className="space-y-2 md:space-y-5">
                        <h3 className="font-bold text-base md:text-2xl">
                          {unit.title}
                        </h3>
                        <p className="text-sm md:text-lg text-justify">
                          {unit.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-20 md:mt-28">
                <div className="flex flex-row items-start mb-8 md:mb-16 -ml-5 md:-ml-12">
                  <div className="w-3 h-auto aspect-square mt-3 md:w-8 md:h-8 bg-[#AEB817] rounded-full mr-2 md:mr-4"></div>
                  <h2 className="text-2xl md:text-4xl font-semibold">
                    STRUKTURAL BADAN KESEKRETARIATAN
                  </h2>
                </div>
                <div className="space-y-7 md:space-y-14">
                  {dummy_structural_km_itb.map((unit, index) => {
                    return (
                      <div key={index} className="space-y-2 md:space-y-5">
                        <h3 className="font-bold text-base md:text-2xl">
                          {unit.title}
                        </h3>
                        <p className="text-sm md:text-lg text-justify">
                          {unit.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-20 md:mt-28">
                <div className="flex flex-row items-start mb-4 md:mb-8 -ml-5 md:-ml-12">
                  <div className="w-3 h-auto aspect-square mt-3 md:w-8 md:h-8 bg-[#CF3A58] rounded-full mr-2 md:mr-4"></div>
                  <h2 className="text-2xl md:text-4xl font-semibold">
                    SOSIAL MEDIA
                  </h2>
                </div>
                <div>
                  {dummy_social_media.map((unit, index) => {
                    return (
                      <li
                        key={index}
                        className="text-sm md:text-lg text-justify"
                      >
                        {unit.media} - {unit.account}
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kongres;
