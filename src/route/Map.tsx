import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { LatLngExpression } from "leaflet";

const Map = () => {
  const [mapImg, setMapImg] = useState<string>('../assets/maps/Peta ITB Ganesha.png');
  const [centerCoord, setCenterCoord] = useState<LatLngExpression>([-6.8923, 107.6101]);
  const RecenterableMap = ({coord}) => {
    const map = useMap();
     useEffect(() => {
       map.setView(coord);
     }, coord);
     return null;
   }
  let dummyArray: string[] = [];
  for (let i = 0; i < 5; i++) {
    dummyArray.push("Lorem ipsum dolor sit amet consectetur.");
  }

  return (
    <div id="map_page" className="min-h-screen bg-[#F1F1F1] text-black w-full">
      <Header />
      <main>
        <div className="flex flex-col w-4/5 mx-auto pt-28">
          <h2 className="font-semibold text-2xl md:text-4xl">PETA ITB</h2>
          <ul className="font-semibold underline list-disc pl-8">
            <li><a className="cursor-pointer md:text-xl text-base " onClick={() => {setMapImg('../assets/maps/Peta ITB Ganesha.png'); setCenterCoord([-6.8923, 107.6101]);}}>KAMPUS GANESHA</a></li>
            <li><a className="cursor-pointer md:text-xl text-base " onClick={() => {setMapImg('../assets/maps/Peta ITB Jatinangor.jpg'); setCenterCoord([-6.92916, 107.76894]);}}>KAMPUS JATINANGOR</a></li>
            <li><a className="cursor-pointer md:text-xl text-base " onClick={() => {setMapImg('../assets/maps/Peta ITB Cirebon.jpg'); setCenterCoord([-6.66438, 108.41575]);}}>KAMPUS CIREBON</a></li>
          </ul>
          <div className="w-full mt-4 md:mb-20 mb-12">
            <img src={mapImg} alt="Peta Kampus" className="mx-auto max-h-[30rem]"></img>
          </div>
          <div className="max-w-4/5">
            <h3 className="font-semibold text-2xl md:text-4xl md:pb-12 pb-4">Google Map</h3>
            <MapContainer id="map" className="h-[30rem]" center={centerCoord} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={centerCoord}>
                <Popup>
                  {mapImg.replace('../assets/maps/Peta', '').replace('.png', '').replace('.jpg', '')}
                </Popup>
              </Marker>
              <RecenterableMap coord={centerCoord}></RecenterableMap>
            </MapContainer>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Map;
