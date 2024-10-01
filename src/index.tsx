import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@module/autoreload";
import { createRoot } from "react-dom/client";
import LandingPage from "@route/LandingPage";
import DaftarHMJ from "@route/DaftarHMJ";
import Map from "@route/Map";
import History from "@route/History";
import News from "@route/News";
import DaftarUKM from "@route/DaftarUKM";
import React from "react";
import TPB from "@route/TPB";
import HalamanUtamaUKM from "@route/HalamanUtamaUKM";
import HalamanUtamaBSO from "@route/HalamanUtamaBSO";
import DaftarBSO from "@route/DaftarBSO";
import MWAWM from "@route/MWA-WM";
import DetailHMJ from "@route/DetailHMJ";
import LayananKM from "@route/LayananKM";
import Kongres from "@route/Kongres";
import Magang from "@route/Magang";
import Kementrian from "@route/Kementerian";
import Kabinet from "@route/Kabinet";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/hmj",
		element: <DaftarHMJ />
	},
	{
		path: "/map",
		element: <Map />
	},
	{
		path: "/sejarah",
		element: <History />
	},
	{
		path: "/berita",
		element: <News />
	},
	{
		path: "/tpb",
		element: <TPB />
	},
	{
		path: "/ukm/:kategori",
		element: <DaftarUKM />
	},
	{
		path: "/ukm",
		element: <HalamanUtamaUKM />
	},
	{
		path: '/bso',
		element: <HalamanUtamaBSO />
	},
	{
		path: '/bso/:kategori',
		element: <DaftarBSO />
	},
	{
		path: '/mwa-wm',
		element: <MWAWM />
	},
	{
		path: "/hmj/:idHimpunan",
		element: <DetailHMJ />,
	},
	{
		path: "/layanan-km",
		element: <LayananKM />,
	},
	{
		path: "/magang",
		element: <Magang />,
	},
	{
		path: "/kongres",
		element: <Kongres />
	},
	{
		path: "/kementrian",
		element: <Kementrian />
	},
	{
		path: "/kabinet",
		element: <Kabinet />
	},
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
