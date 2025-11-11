import { useState } from "react";
import JsxReference from "../reference/JsxReference";
import TsxReference from "../reference/TsxReference";
import jsxImg from "../../assets/capture/jsx_refer.png";
import tsxImg from "../../assets/capture/tsx_refer.png";
import FullscreenImage from "../shared/FullscreenImage";
const JsxTsxContent = () => {
  const [isFullscreenJsx, setIsFullscreenJsx] = useState(false);
  const [isFullscreenTsx, setIsFullscreenTsx] = useState(false);


  const fullscreenJsxHandler = () => {
    setIsFullscreenJsx(true);
  }
  const fullscreenTsxHandler = () => {
    setIsFullscreenTsx(true);
  }
  const receiveCloseFullscreenImgJsx = (state) => {
    setIsFullscreenJsx(state);
  };
  const receiveCloseFullscreenImgTsx = (state) => {
    setIsFullscreenTsx(state);
  };
  return (
    <div className="content-container relative">
      <h1 className="text-3xl font-bold text-header-content">
        JSX และ TSX 
      </h1>
      <div id="jsx">
        <p className="mt-3 text-md text-gray-300 italic indent-8 leading-relaxed">
          <span className="font-semibold text-subheader-content">
            JSX (JavaScript XML)
          </span>{" "}
          คือ Syntax Extension สำหรับ JavaScript ที่อนุญาตให้เราสามารถเขียน
          HTML-like code ภายใน JavaScript ซึ่งทำให้การสร้าง UI ใน React
          ทำได้ง่ายและสะดวกยิ่งขึ้น
        </p>

        <div id="example-jsx" className="mt-5 flex flex-col gap-4 items-center">
          <img src={jsxImg} alt="JSX Example" className="w-full h-full lg:w-[70%] lg:h-[70%] hover:cursor-pointer" onClick={fullscreenJsxHandler}/>
          <p className="text-white font-semibold underline">
            ตัวอย่าง Code jsx แสดงการทำงานของปุ่มเพิ่ม/ลด count
          </p>

          <JsxReference />
        </div>
      </div>

      <div id="tsx">
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          <span className="font-semibold text-subheader-content">
            TSX (TypeScript XML)
          </span>{" "}
          คือ JSX ที่ใช้ร่วมกับ TypeScript ซึ่งช่วยให้เราสามารถใช้ Type Checking
          และฟีเจอร์อื่นๆ ของ TypeScript ในการพัฒนา React Components ได้
        </p>
        <div id="example-jsx" className="mt-5 flex flex-col gap-4 items-center">
          <img src={tsxImg} alt="JSX Example" className="w-[70%] h-[70%] hover:cursor-pointer" onClick={fullscreenTsxHandler}/>
          <p className="text-white font-semibold underline">
            ตัวอย่าง Code tsx แสดงการทำงานของปุ่มเพิ่ม/ลด count
          </p>
          <TsxReference />
        </div>
      </div>
      {
        isFullscreenJsx && <FullscreenImage imageSrc={jsxImg} sendCloseFullscreenImgToParent={receiveCloseFullscreenImgJsx}/>
      }
      {
        isFullscreenTsx && <FullscreenImage imageSrc={tsxImg} sendCloseFullscreenImgToParent={receiveCloseFullscreenImgTsx}/>
      }
    </div>
  );
};

export default JsxTsxContent;
