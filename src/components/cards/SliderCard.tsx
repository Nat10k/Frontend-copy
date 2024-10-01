import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import React from "react";
import ImageWithFallback from "../images/ImageWithFallback";
import { SliderItem } from "../interface/AllInterfaceAndTypes";

const SliderCard = ({
  title,
  array,
  className
}: {
  title: string;
  array: SliderItem[];
  className?: string;
}) => {
  const sm = useMediaQuery("(min-width: 640px)");

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [intersecting, setIntersecting] = useState<string[]>([]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: sm ? -300 : -150,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: sm ? 300 : 150,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            setIntersecting((prev) => prev.filter((id) => id !== target.id));
          } else {
            setIntersecting((prev) => [...prev, target.id]);
          }
        });
      },
      { threshold: 1.0 }
    );

    const items = document.querySelectorAll(`.${title}`);
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className={className ? className : "flex flex-col px-7 sm:px-28 md:px-12 pb-16 sm:pb-28 md:pb-12 w-full"}>
      <h2 className="md:text-4xl text-2xl font-semibold ml-5 sm:ml-24 pb-3 sm:pb-7">
        {title}
      </h2>
      <div className="flex flex-row items-center">
        <button onClick={scrollLeft}>
          <PlayArrowIcon
            sx={{
              fontSize: sm ? "100px" : "20px",
              color: "#CF3A58",
              transform: "scaleX(-1)",
            }}
          />
        </button>
        <div
          className="flex flex-row space-x-3 sm:space-x-8 overflow-x-auto no-scrollbar"
          ref={scrollContainerRef}
        >
          {array.map(({title, image_url, redirect_url, image_alt}, index) => {
            return (
              <a
                href={redirect_url}
                key={index}
                id={`${index}`}
                className={`${title} flex flex-col min-w-[145px] sm:min-w-[400px] space-y-4 items-center ${
                  intersecting.indexOf(`${index}`) !== -1
                    ? "opacity-30"
                    : "opacity-100"
                }`}
              >
                <ImageWithFallback src={image_url} alt={image_alt} width="65%" />
                <p className="hidden sm:flex text-xl">{title}</p>
              </a>
            )
          })}
        </div>
        <button onClick={scrollRight}>
          <PlayArrowIcon
            sx={{
              fontSize: sm ? "100px" : "20px",
              color: "#CF3A58",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default SliderCard;
