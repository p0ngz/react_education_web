import React from "react";

const FullscreenImage = ({imageSrc, sendCloseFullscreenImgToParent}) => {

    const closeFullscreenImageHandler = () => {
        sendCloseFullscreenImgToParent(false);
    }
  return (
    <div className="fixed inset-0  bg-black/50 backdrop-blur-md z-50 flex flex-col justify-center items-center hover:cursor-pointer" onClick={closeFullscreenImageHandler}>
        <img src={imageSrc} alt="Fullscreen" className="max-w-full max-h-full rounded-lg shadow-lg" />
    </div>
  );
};

export default FullscreenImage;
