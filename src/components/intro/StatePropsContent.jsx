import React from "react";
import parentChild from "../../assets/parent_child.jpg";
import ParentComponent from "../reference/parentComponent";
import changeValue from "../../assets/capture/change_value.png";
import log_img from "../../assets/capture/console_log.png";
import stateFirstName from "../../assets/capture/state_firstName.png";
const StatePropsContent = () => {
  return (
    <div className=" content-container relative">
      <h1 className="text-3xl font-bold text-header-content">
        Props และ State
      </h1>
      <p className="mt-3 text-md text-gray-300 italic indent-8 leading-relaxed">
        ใน React,{" "}
        <span className="font-semibold text-subheader-content">Props</span>{" "}
        (Properties) และ{" "}
        <span className="font-semibold text-subheader-content">State</span>{" "}
        เป็นคอนเซปต์สำคัญที่ใช้ในการจัดการข้อมูลและการสื่อสารระหว่าง Components
      </p>
      <div id="box-1" className="mt-5 space-y-3">
        <h2 className="text-xl text-white">
          🧩 <span className="font-semibold text-subheader-content">Props</span>
        </h2>
        <p className="text-md text-gray-300 italic indent-8 leading-relaxed">
          Props คือ “ข้อมูลที่ส่งจาก parent component ไปยัง child component”
          คล้ายกับการส่ง “argument” ให้กับฟังก์ชัน โดยนอกจากจะสามารถส่งจาก
          parent component ไปยัง child component ได้แล้ว ยังสามารถส่งจาก child
          component ไปยัง parent component ได้ด้วย
        </p>
        <img src={parentChild} alt="Parent-Child Relationship" />
        <ul className="list-disc ps-8 space-y-3 mt-">
          <h1 className="text-sm font-bold text-white mt-10">คุณสมบัติหลัก</h1>

          <li className="text-sm text-gray-300 leading-relaxed">
            อ่านได้อย่างเดียว (Immutable) — child component ไม่สามารถแก้ไข props
            ที่ได้รับโดยตรงได้
          </li>
          <li className="text-sm text-gray-300 leading-relaxed">
            ถ้าอยากให้ค่าที่ส่งมาเปลี่ยน ต้องให้ parent component เป็นคนอัปเดต
            state ของตัวเอง แล้วส่ง props ใหม่ลงมา
          </li>
          <li className="text-sm text-gray-300 leading-relaxed">
            หน้าที่: ใช้เพื่อ “ตั้งค่า” (configure) child component,
            ปรับรูปลักษณ์ หรือส่งข้อมูลที่ child ต้องใช้ในการ
          </li>
        </ul>
        <div id="example-parent-child" className="mt-10">
          <ParentComponent />
        </div>
      </div>
      <div id="box-2" className="mt-10">
        <h2 className="text-xl text-white">
          💾
          <span className="font-semibold text-subheader-content"> State</span>
        </h2>
        <p className="text-md text-gray-300 italic indent-8 leading-relaxed">
          State คือ “ข้อมูลภายใน (internal data)” ของ component
          ที่มันสามารถจัดการและเปลี่ยนแปลงเองได้ เหมือนเป็น “หน่วยความจำส่วนตัว”
          ของ component
        </p>
        <ul className="list-disc ps-8 space-y-3 mt-">
          <h1 className="text-sm font-bold text-white mt-10">คุณสมบัติหลัก</h1>

          <li className="text-sm text-gray-300 leading-relaxed">
            เปลี่ยนค่าได้ (Mutable) — component สามารถแก้ไข state ของตัวเองได้
          </li>
          <li className="text-sm text-gray-300 leading-relaxed">
            เมื่อ state เปลี่ยน React จะ re-render component นั้น
            (รวมถึงลูกของมัน) อัตโนมัติ
          </li>
          <li className="text-sm text-gray-300 leading-relaxed">
            หน้าที่: ใช้เก็บข้อมูลที่ “เปลี่ยนไปตามเวลา” เช่น ค่าที่ผู้ใช้กรอก,
            การเปิด/ปิด modal, ข้อมูลจาก API เป็นต้น
          </li>
        </ul>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-3 lg:gap-10 my-5">
          <img src={changeValue} alt="Change Value" className="lg:w-2/3"/>
          <img src={log_img} alt="Console log" className="lg:w-2/3"/>
          <img src={stateFirstName} alt="State FirstName" className="lg:w-2/3" />
        </div>
        <p className="text-white mt-4 italic">
          <span className="font-semibold">อธิบาย</span> : ในตัวอย่างนี้ซึ่งเป็น
          component เดียวกับข้างบนโดยได้ทำการ console.log
          เพื่อโชว์ข้อความโดยจะทำงานทุกๆการ re-render ของ child component
          โดยในตัวอย่างได้ Input FirstName ไป 4 ตัวอักษร(Pong) โดยเราเก็บค่าใน
          state firstName ซึ่งเปรียบได้กับการเปลี่ยนค่า 4 ครั้ง
          สังเกตว่้าในภาพที่โชว์ console จะเห็นว่าค่ามีการ log มาทั้งหมด 4
          ครั้งแสดงว่ามีการ re-render ไปทั้งหมด 4 ครั้ง
        </p>
      </div>
    </div>
  );
};

export default StatePropsContent;
