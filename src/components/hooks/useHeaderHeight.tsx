import { useState, useEffect } from "react";

const useHeaderHeight = () => {
	const [navHeight, setNavHeight] = useState(0);
	useEffect(() => {
		const updateNavHeight = () => {
			const headerElement = document.querySelector("header");
			const newNavHeight = headerElement.offsetHeight;
			const scrollAdjustment = document.querySelector("html");
			scrollAdjustment.style.scrollPaddingTop = `${newNavHeight + 2}px`;
			setNavHeight(newNavHeight);
		};
		updateNavHeight();
		window.addEventListener("resize", updateNavHeight);
		return () => window.removeEventListener("resize", updateNavHeight);
	}, []);
	return navHeight;
}

export default useHeaderHeight;
