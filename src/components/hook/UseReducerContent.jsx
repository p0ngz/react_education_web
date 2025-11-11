import React from "react";
import TodoReducer from "../reference/useReducer/TodoReducer";
const UseReducerContent = () => {
  return (
    <div className="content-container">
      <div id="box-1">
        <h1 className="text-3xl font-bold text-header-content">useReducer</h1>
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          useReducer จะมีความคล้ายคลึงกับ useState แต่จะเหมาะกับการจัดการ state
          ที่ซับซ้อนมากขึ้นหรือมีหลายค่า state ที่เกี่ยวข้องกัน โดย useReducer
          จะใช้แนวคิดของ Redux ซึ่งประกอบด้วย state, action, และ reducer
          function
        </p>

        <div
          id="useReducer"
          className="code-container w-full md:w-fit"
        >
          <code className="code-text">
            const [state, dispatchAction] = useReducer(actionHandler,
            initialState);
          </code>
        </div>
      </div>

      <div id="explain-box" className="flex justify-center xl:justify-start">
        <p className="text-md text-gray-300 leading-relaxed w-full">
          <span className="font-semibold text-subheader-content me-1">
            state:{" "}
          </span>{" "}
          เป็นตัวแปรที่เก็บค่าข้อมูลปัจจุบันของ state ที่เราต้องการจัดการ
          <br />
          <span className="font-semibold text-subheader-content me-1">
            dispatchAction:{" "}
          </span>{" "}
          เป็นฟังก์ชันที่ใช้ส่ง action เพื่อให้ actionHandler ทำงาน
          <br />
          <span className="font-semibold text-subheader-content me-1">
            actionHandler:{" "}
          </span>{" "}
          เป็นฟังก์ชันที่ใช้จัดการกับ state โดยจะรับค่า state ปัจจุบันและ action
          ที่ส่งมา จากนั้นจะทำการประมวลผลและคืนค่า state ใหม่
          <br />
          <span className="font-semibold text-subheader-content me-1">
            initialState:{" "}
          </span>{" "}
          เป็นค่าเริ่มต้นของ state ที่เราต้องการตั้งค่าเมื่อเริ่มต้นใช้งาน
          useReducer
          <br />
        </p>
      </div>
      <TodoReducer />
    </div>
  );
};

export default UseReducerContent;
