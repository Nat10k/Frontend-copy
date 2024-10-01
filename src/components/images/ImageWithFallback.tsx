import React, { useState } from "react";

const ImageWithFallback = ({ src, alt, width = "100%", height = "auto", className="" }) => {
  const [imageExists, setImageExists] = useState(true);

  const handleError = () => {
    setImageExists(false);
  };

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: imageExists ? "transparent" : "#D9D9D9",
      }}
      className={className}
    >
      {imageExists ? (
        <img
          className="w-full h-full object-contain"
          src={src}
          alt={alt}
          onError={handleError}
        />
      ) : (
        <div className="w-full h-full aspect-square bg-[#D9D9D9] border-1 border-black">
          &#160;
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
