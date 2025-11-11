import { useState, useEffect } from "react";
import useState_img from "../../assets/capture/hook/useState_img.png";
const UseStateContent = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const startStopCount = () => {
    setIsCounting((prev) => !prev);
  };
  const ResetCount = () => {
    setCount(0);
    setIsCounting(false);
  };
  useEffect(() => {
    let interval = null;

    if (isCounting) {
      interval = setInterval(() => {
        setCount((prev) => {
          return prev + 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCounting, count]);
  return (
    <div className="content-container">
      <div id="box-1">
        <h1 className="text-3xl font-bold text-header-content">useState</h1>
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          useState เป็น Hook ที่ใช้ในการจัดการ State ภายใน Functional Component
          ของ React โดย State
          คือข้อมูลที่สามารถเปลี่ยนแปลงได้ตามการโต้ตอบของผู้ใช้
          หรือเหตุการณ์ต่างๆ ในแอปพลิเคชัน
        </p>
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          โดยองค์ประกอบหลักของ useState ได้แก่ การประกาศตัวแปรรองรับ state
          และฟังก์ชันสำหรับอัปเดตค่า state นั้นและค่าเริ่มต้นของ state นั้นๆ
          ดังต่อไปนี้
        </p>
        <div id="useState" className="code-container w-full md:w-fit">
          <p className="code-text">
            const [state, setState] = useState(initialValue);
          </p>
        </div>
      </div>
      <div id="box-2" className="xl:flex items-center">
        <div className="flex flex-col justify-center items-center my-5 gap-3">
          <img
            src={useState_img}
            alt="useState"
            className="w-[80%] "
          />
          <p className="font-semibold text-gray-300 text-center">
            ตัวอย่างการเขียน useState
          </p>
        </div>
        <div id="box-3">
          <h2 className="text-2xl font-bold text-header-content  mb-4">
            อธิบายการทำงาน
          </h2>
          <ul className="list-none text-white">
            <li className="flex ">
              <div className="font-semibold text-subheader-content min-w-15">
                Step 1:
              </div>
              <p>
                ทำการสร้างตัวแปร <span className="code-text"> count</span>count
                และ function <span className="code-text"> setCount</span>
                สำหรับควบคุมการเปลี่ยนค่าของ count โดยกำหนดค่าเริ่มต้นเป็น 0
              </p>
            </li>
            <li className="flex ">
              <div className="font-semibold text-subheader-content min-w-15">
                Step 2:
              </div>
              <p>
                ทำการสร้างตัวแปร <span className="code-text"> isCounting</span>
                count และ function{" "}
                <span className="code-text"> setIsCounting</span>
                สำหรับควบคุมการเปลี่ยนค่าของ isCount โดยกำหนดค่าเริ่มต้นเป็น
                false
              </p>
            </li>
            <li className="flex ">
              <div className="font-semibold text-subheader-content min-w-15">
                Step 2:
              </div>
              <p>
                จากใน <span className="code-text">useEffect</span>{" "}
                เราได้ทำการสร้าง Interval โดยที่จะทำการเพิ่มค่า count ทีละ 1
                ทุกๆ 1 วินาทีโดยใช้ setCount
                โดยเราสามารถทำการเริ่มและหยุดการนับหรือ Reset ค่า count
                ใหม่และเริ่มใหม่ได้ผ่าน Start/Stop และ Reset button
                <span className="code-text"> clearInterval()</span>
              </p>
            </li>
          </ul>
          <div
            id="useState-example"
            className="flex flex-col items-center my-3"
          >
            <div id="useState" className="code-container">
              <p className="code-text">Count: {count}</p>
            </div>
            <div id="button-container" className="space-x-4">
              <button
                onClick={() => startStopCount()}
                className="p-5 hover:cursor-pointer code-container"
              >
                <p className="code-text">{isCounting ? "Stop" : "Start"}</p>
              </button>
              <button
                onClick={() => ResetCount()}
                className="p-5 hover:cursor-pointer code-container"
              >
                <p className="code-text">Reset</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseStateContent;
