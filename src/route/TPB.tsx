import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TPB = () => {
  let dummyFaculty = [
    {
      nickname: "STEI",
      fullname: "Sekolah Teknik Elektro dan Informatika",
      description:
        "Sekolah Teknik Elektro dan Informatika (STEI-ITB) yang diresmikan pada 1 Januari 2006 merupakan gabungan dua departemen di ITB, yaitu Departemen Teknik Elektro dan Teknik Informatika (SK Rektor No. 012/SK/01/OT/2005). Kedua departemen ini mempunyai sejarah yang panjang dalam penyelenggaraan pendidikan tinggi Teknik Elektro (EL) sejak tahun 1974, dan Teknik Informatika (IF) sejak tahun 1982.",
    },
    {
      nickname: "SITH",
      fullname: "Sekolah Ilmu dan Teknologi Hayati",
      description:
        "Pada abad ke-21 ini, keahlian dalam bidang ilmu-ilmu hayati (life sciences) akan memegang peranan penting dalam pengembangan ilmu pengetahuan kehayatan (biosains), bioteknologi, dan pengelolaan sumber daya alam. Bahkan bioteknologi diperkirakan akan menjadi salah satu ilmu terapan (applied sciences) yang terpenting. Maka, Sekolah Ilmu dan Teknologi Hayati didirikan untuk menjawab tantangan tersebut.",
    },
    {
      nickname: "SF",
      fullname: "Sekolah Farmasi",
      description:
        "Sekolah Farmasi ITB didirikan pada 6 Oktober 1947, dengan nama Departemen Farmasi, di bawah fakultas yang bernama Faculteit voor Wiskunde and Natuurwetenschapen. Saat itu, fakultas ini merupakan bagian dari Univertitas Indonesia. Pada tanggal 1 Februari 1949, fakultas ini diubah menjadi Fakultas Ilmu Pengetahuan dan Ilmu Alam (FIPIA), namun tetap berada di bawah Universitas Indonesia.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F1F1F1] text-black">
      <Header />
      <main className="h-full">
        <div className="flex items-center justify-between relative mb-9 md:mb-40">
          <div className="flex flex-row h-full w-full">
            <div className="absolute w-[78%]">
              <img className="" src="../assets/icons/dot-bg-blue.svg" alt="" />
            </div>
            <div className="flex flex-col mt-[9rem] md:mt-[18.875rem] h-full w-full px-8 md:px-32 z-10">
              <div className="space-y-5 md:space-y-7">
                <h1 className="text-2xl md:text-4xl font-semibold">
                  TAHAP PERSIAPAN BERSAMA
                </h1>
                <p className="text-base md:text-xl font-semibold md:w-[50rem] text-justify">
                  Lorem ipsum dolor sit amet consectetur. Lorem venenatis
                  pellentesque elementum facilisi. Tristique amet ornare a sit
                  fames ultricies euismod. Purus id sed sodales ante convallis.
                  Orci tellus auctor nec sagittis nisl in ultrices morbi.
                </p>
              </div>
              <div className="mt-20 md:mt-32">
                <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-16">
                  FAKULTAS YANG ADA DI TPB
                </h2>
                {dummyFaculty.map((faculty, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row border-2 rounded-lg md:rounded-2xl shadow-md md:shadow-xl h:-[27.5rem] mb:h-[21.25rem] w-full px-7 py-7 md:px-9 md:py-8 md:space-x-16 mb-14 md:mb-24 items-center"
                    >
                      <img
                        className="h-30 aspect-square mb-5 md:mb-0"
                        src="../assets/icons/dummy.png"
                        alt=""
                      />
                      <div className="flex flex-col justify-center">
                        <div className="mb-5 md:mb-10 space-y-1">
                          <h3 className="font-semibold text-2xl md:text-4xl text-center md:text-justify">
                            {faculty.nickname}
                          </h3>
                          <h4 className="font-semibold text-base md:text-xl text-center md:text-justify">
                            {faculty.fullname}
                          </h4>
                        </div>
                        <p className="text-sm md:text-xl 2xl:text-2xl text-justify overflow-hidden text-ellipsis line-clamp-4">
                          {faculty.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TPB;
