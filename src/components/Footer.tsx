import React from "react";
import ImageWithFallback from "./images/ImageWithFallback";

const Footer = () => {
  return (
    <footer className="relative w-full mt-[144px] h-full overflow-hidden">
      <img
        className="absolute bottom-[-5%] z-[-1] right-0 object-contain"
        src="../assets/icons/footer-decor.svg"
        alt="Footer Background"
        onContextMenu={(e) => false}
      />
      <img
        className="absolute z-0 bottom-0 left-12 md:left-[40rem] object-contain"
        src="../assets/icons/footer-gradient.svg"
        alt=""
      />
      <div className="relative flex-col sm:flex-row justify-end w-full min-h-screen px-[10%] z-10">
        <div className="flex flex-col w-full space-y-8">
          <h1 className="font-bold text-2xl md:text-4xl">KABINET KM ITB</h1>
          <div className="flex flex-row items-center space-x-8">
            <button className="w-max-[20%]">
              <img
                src="../assets/icons/instagram.svg"
                alt="Instagram"
                style={{ width: "70%", height: "70%", objectFit: "contain" }}
              />
            </button>
            <button className="w-max-[20%]">
              <img
                src="../assets/icons/tiktok.svg"
                alt="Tiktok"
                style={{ width: "70%", height: "70%", objectFit: "contain" }}
              />
            </button>
            <button className="w-max-[20%]">
              <img
                src="../assets/icons/youtube.svg"
                alt="Youtube"
                style={{ width: "70%", height: "70%", objectFit: "contain" }}
              />
            </button>
            <button className="w-max-[20%]">
              <img
                src="../assets/icons/twitter.svg"
                alt="X"
                style={{ width: "70%", height: "70%", objectFit: "contain" }}
              />
            </button>
          </div>
          <div className="flex flex-col space-y-8 font-bold">
            <a href={"/kabinet"} className="w-fit">
              <p className="md:text-2xl text-lg">TENTANG KAMI</p>
            </a>
            <a href={"/"} className="w-fit">
              <p className="md:text-2xl text-lg">EMAIL</p>
            </a>
            <a href={"/"} className="w-fit">
              <p className="md:text-2xl text-lg">REKRUTMEN</p>
            </a>
            <a href={"/magang"} className="w-fit">
              <p className="md:text-2xl text-lg">MAGANG</p>
            </a>
            <a href={"/berita"} className="w-fit">
              <p className="md:text-2xl text-lg">BERITA</p>
            </a>
          </div>
        </div>
        <div className="h-8 sm:h-0" />
        <div className="flex flex-row w-full space-x-4 z-20 items-end justify-start sm:justify-end">
          <ImageWithFallback
            src={"../assets/logo/kabinet-24-25.png"}
            alt={"Kabinet 2024-25"}
            width="100px"
            height="100px"
          />
          <img
            className="w-24 h-auto object-contain"
            src={"../assets/logo/KM ITB.svg"}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
