import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { SliderItem } from "../components/interface/AllInterfaceAndTypes";
import ImageWithFallback from "../components/images/ImageWithFallback";

const Kabinet = () => {
  let sliderDummy: SliderItem[] = [];
  let dummyNews: SliderItem = {title : "Lorem ipsum dolor sit amet consectetur.", 
    image_url : "", 
    redirect_url:"#", 
    image_alt : "news thumbnail"};
  for (let i = 0; i < 5; i++) {
    sliderDummy.push(dummyNews);
  }

  return (
    <div id="kabinet_page" className="min-h-screen bg-[#F1F1F1] text-black">
      <Header />
      <main className="h-full overflow-x-hidden pt-16 md:pt-0">
        <div className="flex items-center justify-center md:h-[70.125rem] h-[23rem] relative z-0">
          <div className="flex flex-row h-full w-full">
            <div className="absolute w-[78%]">
              <img
                className=""
                src="../assets/icons/dot-bg-orange-real.svg"
                alt=""
              />
            </div>
            <div className="absolute w-[45%] md:right-24 right-4 md:top-4 top-12">
              <img
                className=""
                src="../assets/icons/red-star.svg"
                alt=""
              />
            </div>
            <div className="flex w-full">
                <div className="flex flex-col mt-[9rem] md:mt-[18.875rem] h-full w-3/4 px-8 md:px-32 z-10">
                    <div className="space-y-5 md:space-y-16 mb-16 md:mb-44">
                        <h1 className="text-2xl md:text-5xl font-semibold">
                        KABINET RESTORASI MARWAH
                        </h1>
                        <h2 className="font-bold">
                            2024-2025
                        </h2>
                        <div className="flex flex-row items-center space-x-8">
                            <button className="md:w-max-[20%] w-max-[40%]">
                            <img
                                src="../assets/icons/instagram.svg"
                                alt="Instagram"
                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                            </button>
                            <button className="md:w-max-[20%] w-max-[40%]">
                            <img
                                src="../assets/icons/tiktok.svg"
                                alt="Tiktok"
                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                            </button>
                            <button className="md:w-max-[20%] w-max-[40%]">
                            <img
                                src="../assets/icons/youtube.svg"
                                alt="Youtube"
                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                            </button>
                            <button className="md:w-max-[20%] w-max-[40%]">
                            <img
                                src="../assets/icons/twitter.svg"
                                alt="X"
                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-end md:pr-44 pr-20 mt-[9rem] md:mt-[18.875rem] z-10">
                    <ImageWithFallback src="logo" alt="logo kabinet" width="55%" height="55%" />
                </div>
            </div>
          </div>
        </div>
        <div className="z-10 relative">
          <div className="flex flex-col w-full items-center px-[10%] space-y-8 mb-12 md:mb-28">
            <ImageWithFallback src="dokum kabinet" alt="dokum kabinet" width="80%" height="auto" />
            <div className="md:text-lg text-sm">
                Lorem ipsum dolor sit amet consectetur. Quam fames orci feugiat mauris pharetra malesuada turpis mauris congue. Tincidunt curabitur tortor scelerisque lorem id ut dignissim potenti. Integer ut aliquet egestas tellus facilisis urna orci id. Eget consequat laoreet pretium lectus.
                Lorem ipsum dolor sit amet consectetur. Quam fames orci feugiat mauris pharetra malesuada turpis mauris congue. Tincidunt curabitur tortor scelerisque lorem id ut dignissim potenti. Integer ut aliquet egestas tellus facilisis urna orci id. Eget consequat laoreet pretium lectus.
            </div>
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
          <div className="flex items-center px-16 md:px-36 w-full justify-between mb-20 md:mb-36 space-x-5 md:space-x-10">
            <div className="flex flex-col space-y-6 md:w-1/2 w-full z-10">
                <h3 className="font-bold text-xl">WAJAH KABINET</h3>
                <div className="flex w-full space-x-6 items-center">
                    <ImageWithFallback src="photo ketua" alt="photo ketua" width="50%" height="30%" />
                    <div className="flex flex-col">
                        <p className="font-bold">NAMA WAJAH</p>
                        <p>Jabatan</p>
                        <p>Program Studi</p>
                        <p>NIM</p>
                    </div>
                </div>
                <div className="flex w-full space-x-6 items-center">
                    <ImageWithFallback src="photo wakil" alt="photo wakil" width="50%" height="30%" />
                    <div className="flex flex-col">
                        <p className="font-bold">NAMA WAJAH</p>
                        <p>Jabatan</p>
                        <p>Program Studi</p>
                        <p>NIM</p>
                    </div>
                </div>
            </div>  
            <div className="absolute md:right-0 -right-12 md:w-2/5 w-1/2">
                <img src="../assets/icons/hand.png" />
            </div>
          </div>
        </div>
        <div className="px-6 md:px-12">
            <div className="md:text-3xl text-xl font-bold mb-12">SEJARAH KABINET KM ITB</div>
            <img src="../assets/images/history-top.png" className="mx-auto w-4/5" />
            <ul className="list-disc marker:text-[#8EEBD8] marker:text-2xl space-y-16 mt-16">
                <li className="text-black">
                    <div className="md:text-2xl text-lg font-bold">1820</div>
                    <div className="text-xl">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
                    <img src="../assets/images/history-top.png" className="w-2/5 mx-auto mt-4" />
                </li>
                <li className="text-black">
                    <div className="md:text-2xl text-lg font-bold">1820 - 1992</div>
                    <div className="md:text-lg">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
                </li>
                <li className="text-black">
                    <div className="md:text-2xl text-lg font-bold">2005</div>
                    <div className="md:text-lg">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
                </li>
                <li className="text-black">
                    <div className="md:text-2xl text-lg font-bold">2010-2030</div>
                    <div className="md:text-lg">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
                </li>
                <li className="text-black">
                    <div className="md:text-2xl text-lg font-bold">2031</div>
                    <div className="md:text-lg">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
                    <img src="../assets/images/history-top.png" className="w-3/5 mx-auto mt-4" />
                </li>
                <li className="text-black">
                    <div className="md:text-2xl text-lg font-bold">2091</div>
                    <div className="md:text-lg">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
                </li>
            </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kabinet;
