import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

const History = () => {
  let dummyArray: string[] = [];
  for (let i = 0; i < 5; i++) {
    dummyArray.push("Lorem ipsum dolor sit amet consectetur.");
  }

  return (
    <div id="history_page" className="min-h-screen bg-[#F1F1F1] text-black w-full">
      <Header />
      <main className="w-11/12 mx-auto pt-28">
        <div className="md:text-4xl text-2xl font-bold mb-12">SEJARAH ITB</div>
        <img src="../assets/images/history-top.png" className="mx-auto w-4/5" />
        <ul className="list-disc marker:text-[#8EEBD8] marker:text-2xl space-y-16 mt-16">
            <li className="text-black">
                <div className="md:text-3xl text-xl font-bold">1820</div>
                <div className="text-xl">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
                <img src="../assets/images/history-top.png" className="w-2/5 mx-auto mt-4" />
            </li>
            <li className="text-black">
                <div className="md:text-3xl text-xl font-bold">1820 - 1992</div>
                <div className="text-xl">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
            </li>
            <li className="text-black">
                <div className="md:text-3xl text-xl font-bold">2005</div>
                <div className="text-xl">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
            </li>
            <li className="text-black">
                <div className="md:text-3xl text-xl font-bold">2010-2030</div>
                <div className="text-xl">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
            </li>
            <li className="text-black">
                <div className="md:text-3xl text-xl font-bold">2031</div>
                <div className="text-xl">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
                <img src="../assets/images/history-top.png" className="w-3/5 mx-auto mt-4" />
            </li>
            <li className="text-black">
                <div className="md:text-3xl text-xl font-bold">2091</div>
                <div className="text-xl">Lorem ipsum dolor sit amet consectetur. Nisl tincidunt etiam quisque auctor sed tristique etiam. Euismod purus senectus fermentum tristique.</div>
            </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default History;
