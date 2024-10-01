import React from "react";
import SliderCard from "../components/cards/SliderCard";
import MainContainer from "../components/MainContainer";
import ImageWithFallback from "../components/images/ImageWithFallback";
import { SliderItem } from "../components/interface/AllInterfaceAndTypes";

const News = () => {
  let sliderDummy: SliderItem[] = [];
  let dummyNews: SliderItem = {title : "Lorem ipsum dolor sit amet consectetur.", 
    image_url : "", 
    redirect_url:"#", 
    image_alt : "news thumbnail"};
  for (let i = 0; i < 5; i++) {
    sliderDummy.push(dummyNews);
  }
  
  return (
    <div id="news_page" className="min-h-screen bg-[#F1F1F1] text-black w-full">
      <MainContainer>
        <main className="flex flex-col w-full space-y-8">
          <div>
            <div className="text-2xl md:text-4xl font-bold mb-2">BERITA</div>
            <div className="md:text-xl text-base">Lorem ipsum dolor sit amet consectetur. Nibh aliquet blandit ornare convallis interdum lacus mauris id. </div>
          </div>
          <SliderCard title="KEGIATAN" array={sliderDummy} className="flex flex-col md:pb-16 pb-8 w-full" />
          <SliderCard title="KAJIAN" array={sliderDummy} className="flex flex-col md:pb-16 pb-8 w-full" />
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            {
              sliderDummy.length > 6 ?
                sliderDummy.splice(0,6).map(({image_url, title, redirect_url, image_alt}, index) => {
                  return (
                    <a key={index} href={redirect_url} className="block flex flex-col items-center space-y-4">
                      <ImageWithFallback src={image_url} alt={image_alt} width="70%" />
                      <div className="truncate w-full md:text-xl text-sm">{title}</div>
                    </a>
                  )
                }) :
                sliderDummy.map(({image_url, title, redirect_url, image_alt}, index) => {
                  return (
                    <a key={index} href={redirect_url} className="block flex flex-col items-center space-y-4">
                      <ImageWithFallback src={image_url} alt={image_alt} width="70%" />
                      <div className="truncate w-full md:text-xl text-sm">{title}</div>
                    </a>
                  )
                })
            }
          </div>
        </main>
      </MainContainer>
    </div>
  );
};

export default News;
