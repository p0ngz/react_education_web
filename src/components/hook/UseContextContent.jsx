import React from "react";
import ParentContext from "../reference/useContext/ParentContext";
import useContext_img from "../../assets/capture/hook/useContext_img.png";
import parentContext_img from "../../assets/capture/hook/parentContext_img.png";
import childContext_img from "../../assets/capture/hook/childContext_img.png";
import subChildContext_img from "../../assets/capture/hook/subChildContext_img.png";
const UseContextContent = () => {
  return (
    <div className="content-container">
      <div id="box-1">
        <h1 className="text-3xl font-bold text-header-content">useContext</h1>
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          useContext เป็น Hook ใน React ที่ใช้สำหรับเข้าถึงค่า context
          โดยไม่ต้องใช้ การส่ง props ผ่าน component หลายๆ ชั้น
          ดังนั้นในการส่งค่าผ่าน parent component และ child component
          แบบหลายๆชั้นสามารถใช้ useContext ในการจัดการแทนการ pass ค่าด้วยวิธี
          Props ได้
        </p>
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          โดย useContext จะทำงานร่วมกับ Context API ของ React และมีองค์ประกอบ
          คือ{" "}
          <span className="font-semibold text-subheader-content me-1">
            createContext
          </span>
          ,
          <span className="font-semibold text-subheader-content me-1">
            contextProvider
          </span>
          <span className="font-semibold text-subheader-content me-1">
            useContext
          </span>
        </p>
        <div id="createContext" className="code-container w-full md:w-fit">
          <code id="create-context" className="code-text">
            const MyContext = createContext(defaultValue)
          </code>
        </div>
        <div id="contextProvider" className="code-container w-full md:w-fit">
          <code id="provider-context" className="code-text">
            const MyContextProvider = ({"children"}) ={">"} {}
          </code>
        </div>
        <div id="useContext" className="code-container w-full md:w-fit">
          <code id="use-context" className="code-text">
            const useMyContext = () ={">"} {"{"} return useContext(MyContext){" "}
            {"}"}
          </code>
        </div>
      </div>
      <div id="box-2">
        <h1 className="text-3xl font-bold text-header-content">
          Props vs useContext
        </h1>
        <div id="props-content" className="mt-5">
          <h2 className="text-md font-semibold text-subheader-content">
            Props
          </h2>

          <ul className="list-disc ps-8 space-y-3 mt-3">
            <li className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-subheader-content me-1">
                กลไก (Mechanism):{" "}
              </span>
              ข้อมูลถูกส่งจาก parent component ไปยัง child component ผ่านทาง
              attributes (props)
              โดยจะต้องส่งต่อแบบชัดเจนในแต่ละระดับของลำดับชั้น (component
              hierarchy)
            </li>
            <li className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-subheader-content me-1">
                ความชัดเจนและคาดเดาได้ (Clarity & Predictability):
              </span>
              โค้ดจะมีความชัดเจนและเข้าใจง่าย เพราะสามารถเห็นได้ทันทีว่า
              component นั้นต้องการข้อมูลอะไร และข้อมูลนั้นมาจากไหน
            </li>
            <li className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-subheader-content me-1">
                การนำกลับมาใช้ซ้ำ (Reusability):{" "}
              </span>
              Component จะสามารถนำกลับมาใช้ซ้ำได้สูงและมีการเชื่อมโยงกันน้อย
              (loosely coupled) เพราะพวกมันพึ่งพาเฉพาะ props ที่ได้รับเท่านั้น
              จึงทำให้สามารถ ทดสอบได้ง่าย และ ย้ายตำแหน่งไปที่ใดใน component
              tree ก็ยังทำงานได้เหมือนเดิม
            </li>
          </ul>
        </div>
        <div id="useContext-content" className="mt-5">
          <h2 className="text-md font-semibold text-subheader-content">
            useContext คืออะไร ?
          </h2>

          <ul className="list-disc ps-8 space-y-3 mt-3">
            <li className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-subheader-content me-1">
                กลไก (Mechanism):{" "}
              </span>
              Context.Provider จะทำให้ข้อมูลสามารถเข้าถึงได้จากทุก component
              ภายใน subtree ของมัน ไม่ว่าจะอยู่ลึกแค่ไหนก็ตาม โดย component
              ลูกที่อยู่ลึกสามารถเข้าถึงข้อมูลนั้นได้ผ่าน useContext hook
            </li>
            <li className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-subheader-content me-1">
                ลดปัญหา Prop Drilling (Reduces Prop Drilling):
              </span>
              ช่วยแก้ปัญหา “prop drilling” — คือการที่ต้องส่ง props ผ่าน
              component หลายชั้นที่ไม่ได้ใช้ข้อมูลนั้นเอง เพียงเพื่อส่งต่อให้
              component ที่อยู่ลึกกว่า
            </li>
            <li className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-subheader-content me-1">
                ความซับซ้อนและการเชื่อมโยง (Complexity & Coupling):
              </span>
              ทำให้ component นำกลับมาใช้ซ้ำได้ยากขึ้น และเกิดการ
              เชื่อมโยงกันแน่น (tight coupling) เพราะ component ที่ใช้ context
              จะต้องอยู่ภายใต้ provider ที่กำหนดไว้ จึงจะทำงานได้ถูกต้อง
            </li>
            <li className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-subheader-content me-1">
                ***ประสิทธิภาพ (Performance):
              </span>
              เมื่อค่าใน context เปลี่ยน ค่าใหม่จะทำให้ component ทุกตัวที่
              ที่ใช้ context นั้น re-render ทั้งหมด ซึ่งอาจส่งผลต่อ performance
              หากใช้กับข้อมูลที่เปลี่ยนบ่อย (แก้ได้ด้วยเทคนิค optimization เช่น
              แยก context หรือใช้ memoization)
            </li>
          </ul>
        </div>
      </div>
      <div
        id="box-3"
        className="w-full flex flex-col justify-center items-center gap-5"
      >
        <div
          id="create-context-img"
          className="flex flex-col items-center gap-3"
        >
          <img
            src={useContext_img}
            alt="useContext"
            className="w-[80%] xl:w-[60%]"
          />
          <p className="font-semibold text-gray-300 text-center">
            ตัวอย่างการสร้าง createContext, contextProvider และ useContext
          </p>
        </div>
        <div
          id="sequence-context-img"
          className="flex flex-col items-center gap-3"
        >
          <img
            src={parentContext_img}
            alt="parentContext"
            className="w-[80%] xl:w-[60%]"
          />
          <p className="font-semibold text-gray-300 text-center">
            ตัวอย่างการส่งค่าผ่าน parentContext ไปยัง childContext ด้วย
            contextProvider
          </p>
        </div>
        <div
          id="child-context-img"
          className="flex flex-col items-center gap-3"
        >
          <img
            src={childContext_img}
            alt="childContext"
            className="w-[80%] xl:w-[60%]"
          />
          <p className="font-semibold text-gray-300 text-center">
            ตัวอย่างการใช้ useContext ใน childContext และส่งค่าผ่านไปยัง
            subChild component
          </p>
        </div>
        <div
          id="subChild-context-img"
          className="flex flex-col items-center gap-3"
        >
          <img
            src={subChildContext_img}
            alt="subChildContext"
            className="w-[80%] xl:w-[60%]"
          />
          <p className="font-semibold text-gray-300 text-center">
            ตัวอย่างการใช้ useContext โดยจนงใน subChild component
            เพื่อนำค่ามาแสดง
          </p>
        </div>
      </div>
      <div id="box-4" className="flex justify-center">
        <div className="w-[80%] xl:w-[60%]">
          <ParentContext />
        </div>
      </div>
    </div>
  );
};

export default UseContextContent;
