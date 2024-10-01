import React, { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header className="fixed flex flex-col items-center z-20 w-full py-4 md:py-6 px-8 bg-[#F1F1F1] h-24">
      <nav className="flex w-full h-full items-center justify-between">
        <a href="/" className="h-full">
          <img
            className="h-7 md:h-full"
            src="../assets/logo/gemakarsa.png"
            alt=""
          />
        </a>
        <div className="hidden md:flex space-x-11 md:text-2xl font-bold items-center h-full">
          <a href="#elemen" className="">
            ELEMEN
          </a>
          <a href="https://data.km.itb.ac.id/" className="">
            DATA
          </a>
          <a href="/kabinet" className="">
            TENTANG KAMI
          </a>
        </div>
        <div onClick={() => setNavOpen(!navOpen)} className="w-5 md:w-16 h-5 md:h-14 flex md:hidden flex-col justify-around z-10">
          <span className="h-[2px] md:h-[0.375rem] rounded-full bg-black"></span>
          <span className="h-[2px] md:h-[0.375rem] rounded-full bg-black"></span>
          <span className="h-[2px] md:h-[0.375rem] rounded-full bg-black"></span>
        </div>
      </nav>
      {
          navOpen ? 
          <div className="md:hidden mt-8 bg-[#F1F1F1] flex flex-col w-screen px-6 space-y-4 pb-4">
            <a href="#elemen" className="block font-bold">
              ELEMEN
            </a>
            <a href="https://data.km.itb.ac.id/" className="block font-bold">
              DATA
            </a>
            <a href="/kabinet" className="block font-bold">
              TENTANG KAMI
            </a>
          </div> : <></>
        }
    </header>
  );
};

export default Header;
