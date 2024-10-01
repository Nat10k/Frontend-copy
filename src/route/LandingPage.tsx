import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import LinkCardWithImage from "../components/cards/LinkCardWithImage";
import SliderCard from "../components/cards/SliderCard";
import { SliderItem } from "../components/interface/AllInterfaceAndTypes";

const LandingPage = () => {
  let sliderDummy: SliderItem[] = [];
  let dummyNews: SliderItem = {title : "Lorem ipsum dolor sit amet consectetur.", 
    image_url : "", 
    redirect_url:"#", 
    image_alt : "news thumbnail"};
  for (let i = 0; i < 5; i++) {
    sliderDummy.push(dummyNews);
  }

  return (
    <div id="landing_page" className="min-h-screen bg-[#F1F1F1] text-black">
      <Header />
      <main className="h-full overflow-x-hidden pt-16 md:pt-0">
        <div className="flex items-center justify-center md:h-[73.125rem] h-[23rem] relative z-0">
          <div className="flex flex-row h-full w-full">
            <div className="flex flex-col justify-center w-[52vw] h-full">
              <div className="ml-12 md:ml-44 z-10">
                <div className="text-xl md:text-4xl font-semibold pb-2 md:pb-7 ">
                  <h1 className="md:pb-3">
                    KABINET
                    <br />
                    <span>RESTORASI MARWAH</span>
                  </h1>
                </div>
                <div className="text-md md:text-4xl font-semibold">
                  2024-2025
                </div>
              </div>
            </div>
            <div className="absolute">
              <img
                className="h-[19rem] md:h-auto"
                src="../assets/icons/dot-bg-orange.png"
                alt=""
              />
            </div>
            <div className="absolute w-full">
              <img
                className="absolute top-0 ml-9 md:left-[7.25rem] mt-[5rem] md:mt-[18rem] h-6 md:h-auto"
                src="../assets/icons/triangle-red.svg"
                alt=""
              />
            </div>
            <div className="absolute w-full">
              <img
                className="absolute top-0 left-[19.938rem] md:left-[66.5rem] mt-[9.375rem] md:mt-[36.125rem] h-[7.5rem] md:h-[20.42rem] z-20"
                src="../assets/icons/star-blue.png"
                alt=""
              />
            </div>
            <div className="absolute w-full">
              <img
                className="absolute h-[9.188rem] md:h-[22.375rem] w-auto top-0 mt-[16rem] md:mt-[50rem] -ml-9 md:ml-0"
                src="../assets/icons/line-red.svg"
                alt=""
              />
            </div>
            <div className="absolute w-full">
              <img
                className="absolute h-12 md:h-[5.3rem] w-auto aspect-square top-0 ml-[5rem] md:ml-[19rem] mt-[16.5rem] md:mt-[52rem]"
                src="../assets/icons/circle-orange.svg"
                alt=""
              />
            </div>
            <div className="right-0 w-[48vw] h-full flex items-center justify-center z-10">
              <img
                className="h-[15.375rem] md:h-[53rem] w-full"
                src="../assets/icons/itb-pink.png"
                alt=""
              />
            </div>
            <div className="absolute">
              <img
                className="h-[31.5rem] md:h-auto mt-[38rem] md:mt-[70.188rem]"
                src="../assets/icons/dot-blue.svg"
                alt=""
              />
            </div>
            <div className="absolute">
              <img
                className="h-[19.438rem] md:h-auto ml-[11rem] md:ml-[37.733rem] mt-[80rem] md:mt-[135rem]"
                src="../assets/icons/dot-blue-2.svg"
                alt=""
              />
            </div>
            <div className="absolute">
              <img
                className="h-[7.75rem] md:h-auto ml-[20rem] md:ml-[60rem] mt-[85rem] md:mt-[153rem]"
                src="../assets/icons/wave-yellow.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="z-10 relative">
          <div className="flex px-8 lg:px-16 items-center w-full justify-center mb-20 lg:mb-36 space-x-5 lg:space-x-20">
            <LinkCardWithImage href="/mwa-wm" image_url="../assets/logo/MWA-WM.png" image_alt="mwa wm" text="MWA-WM ITB" className="w-[6.25rem] lg:w-auto" />
            <LinkCardWithImage href="/kabinet" image_url="../assets/logo/kabinet-KM.png" image_alt="kabinet" text="KABINET KM ITB" className="w-[6.25rem] lg:w-auto" />
            <LinkCardWithImage href="/kongres" image_url="../assets/logo/kongres-KM.png" image_alt="kongres" text="KONGRES KM ITB" className="w-[6.25rem] lg:w-auto" />
          </div>
          <div className="flex flex-col md:flex-row px-16 md:px-20 xl:px-56 pb-20 md:pb-36 w-full justify-between">
            <div className="flex flex-col md:w-2/5 pb-10 md:pb-0">
              <h2 className="text-xl md:text-4xl font-semibold pb-4">VISI</h2>
              <ul className="text-md md:text-xl list-disc list-inside">
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </ul>
            </div>
            <div className="flex flex-col md:w-2/5">
              <h2 className="text-xl md:text-4xl font-semibold pb-4">MISI</h2>
              <ul className="text-md md:text-xl list-disc list-inside">
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </ul>
            </div>
          </div>
          <div className="hidden xl:flex px-16 items-center w-full justify-center mb-36 space-x-10">
            <LinkCardWithImage href="/ukm" image_url="test" text="UNIT KEGIATAN MAHASISWA" image_alt="ukm" className="w-1/4" />
            <LinkCardWithImage href="/hmj" image_url="test" text="HIMPUNAN MAHASISWA JURUSAN" image_alt="hmj" className="w-1/4"  />
            <LinkCardWithImage href="/bso" image_url="test" text="BADAN SEMI OTONOM" image_alt="bso" className="w-1/4" />
            <LinkCardWithImage href="/tpb" image_url="test" text="TAHAP PERSIAPAN BERSAMA" image_alt="tpb" className="w-1/4" />
          </div>
          <div className="flex flex-col xl:hidden px-8 w-full mb-20 space-y-5">
            <div className="flex w-full justify-between space-x-5">
              <LinkCardWithImage href="/ukm" image_url="test" text="UNIT KEGIATAN MAHASISWA" image_alt="ukm" className="w-1/2" />
              <LinkCardWithImage href="/hmj" image_url="test" text="HIMPUNAN MAHASISWA JURUSAN" image_alt="hmj" className="w-1/2"  />
            </div>
            <div className="flex w-full justify-between space-x-5">
              <LinkCardWithImage href="/bso" image_url="test" text="BADAN SEMI OTONOM" image_alt="bso" className="w-1/2" />
              <LinkCardWithImage href="/tpb" image_url="test" text="TAHAP PERSIAPAN BERSAMA" image_alt="tpb" className="w-1/2" />
            </div>
          </div>
        </div>
        <SliderCard title="KEGIATAN" array={sliderDummy}  />
        <SliderCard title="KAJIAN" array={sliderDummy} />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
