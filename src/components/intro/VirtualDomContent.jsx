import React from "react";
import domTree from "../../assets/dom_tree.gif";
import virtualdom from "../../assets/virtual_dom.jpg";
const VirtualDomContent = () => {
  return (
    <div className="content-container">
      <div id="box-1">
        <h1 className="text-3xl font-bold text-header-content">
          Virtual DOM 
        </h1>
        <p className="mt-3 text-md text-gray-300 italic indent-8 leading-relaxed">
          Virtual Dom (Document Object Model) ใน React คือ
          โครงสร้างข้อมูลที่เป็นตัวแทนของ DOM จริง (Real DOM)
          ซึ่งถูกเก็บไว้ในหน่วยความจำ (Memory) Virtual DOM ช่วยให้ React
          สามารถจัดการและอัปเดต UI ได้อย่างมีประสิทธิภาพ
        </p>
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          โดยหลักการทำงานของ Virtual DOM คือ เมื่อมีการเปลี่ยนแปลงข้อมูลใน
          Component React จะสร้าง Virtual DOM ใหม่ขึ้นมา และเปรียบเทียบกับ
          Virtual DOM เก่าที่มีอยู่ (กระบวนการนี้เรียกว่า "Diffing") อย่างเช่น
          การเปลี่ยนแปลงค่า state หรือ props ของ Component โดยบางครั้งการมี
          change เล็กน้อยก็อาจทำให้ UI ต้องมีการอัปเดต
        </p>
      </div>
      <div id="box-2">
        <h1 className="mb-5 text-3xl font-bold text-header-content">
          Virtual DOM vs Real DOM
        </h1>
        <div id="dom-content">
          <div id="dom-is">
            <h2 className="text-md font-semibold text-subheader-content">
              DOM คืออะไร ?
            </h2>
            <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
              DOM คือโครงสร้างแบบ “ต้นไม้” (tree) ที่ตัวเบราว์เซอร์สร้างขึ้นจาก
              HTML (หรือ XML) ของหน้าเว็บทุก element (แท็ก), attribute, และ text
              จะกลายเป็น “โหนด” (node) ในโครงสร้างนี้.
            </p>
            <div className="flex flex-col justify-center items-center mt-5 space-y-3">
              <img src={domTree} alt="domTree" className="aspect-16/9" />
              <p className="font-semibold text-gray-300 text-center">
                โครงสร้าง DOM Tree
              </p>
            </div>
          </div>
          <div id="dom-do">
            <h2 className="text-md font-semibold text-subheader-content">
              หน้าที่หลักของ DOM
            </h2>
            <ul className="list-disc ps-8 space-y-3 mt-3">
              <li className="text-sm text-gray-300 leading-relaxed">
                เป็นตัวกลางระหว่าง HTML/XML กับโปรแกรม (เช่น JavaScript)
                เพื่อให้โปรแกรมสามารถเข้าถึงและจัดการกับเนื้อหาของหน้าเว็บได้
              </li>
              <li className="text-sm text-gray-300 leading-relaxed">
                ช่วยให้การเปลี่ยนแปลงเนื้อหาของหน้าเว็บเป็นไปอย่างราบรื่น
                โดยไม่ต้องโหลดหน้าใหม่ทั้งหมด
              </li>
              <li className="text-sm text-gray-300 leading-relaxed">
                จัดการเหตุการณ์ (events) เช่น การคลิกปุ่ม การกรอกแบบฟอร์ม
                และการเลื่อนหน้าเว็บ
              </li>
            </ul>
          </div>
        </div>
        <div id="virtual-dom-content" className="mt-10">
          <div id="virtual-dom-is">
            <h2 className="text-md font-semibold text-subheader-content">
              Virtual DOM คืออะไร?
            </h2>
            <p className="mt-3 text-md text-gray-300 italic indent-8 leading-relaxed">
              Virtual DOM คือ สำเนา (หรือแบบจำลอง) ของ DOM จริง
              แต่เก็บอยู่ในหน่วยความจำ (in-memory)
              เป็นโครงสร้างข้อมูลที่เบาหน่อย ใช้โดยไลบรารี/เฟรมเวิร์กหน้าเว็บ
              (เช่น React) เพื่อจัดการการเปลี่ยนแปลงของ UI
              ได้มีประสิทธิภาพมากขึ้น.
            </p>
            <div className="flex flex-col justify-center items-center mt-5 space-y-3">
              <img src={virtualdom} alt="domTree" className="aspect-16/9" />
              <p className="font-semibold text-gray-300 text-center">
                โครงสร้าง Virtual DOM Tree
              </p>
            </div>
          </div>
          <div id="virtual-dom-do">
            <h2 className="text-md font-semibold text-subheader-content">
              หน้าที่หลักของ Virtual DOM
            </h2>
            <ul className="list-disc ps-8 space-y-3 mt-3">
              <li className="text-sm text-gray-300 leading-relaxed">
                เมื่อมีการเปลี่ยนแปลงสถานะ (state) หรือข้อมูล ในหน้าเว็บ
                เฟรมเวิร์กจะสร้าง Virtual DOM รุ่นใหม่ขึ้นมา.
              </li>
              <li className="text-sm text-gray-300 leading-relaxed">
                จากนั้นมีการ “diffing” คือ เปรียบเทียบ Virtual DOM
                รุ่นใหม่กับรุ่นเก่า เพื่อหาว่าส่วนไหนเปลี่ยนไปบ้าง.
              </li>
              <li className="text-sm text-gray-300 leading-relaxed">
                สุดท้าย เฟรมเวิร์กจะ อัพเดตเฉพาะส่วนที่เปลี่ยน ไปยัง DOM จริง
                (real DOM) ซึ่งช่วยลดงานหนักและเพิ่มประสิทธิภาพ.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="box-3">
        <h1 className="text-3xl font-bold text-header-content">สรุป</h1>
        <p className="mt-3 text-md text-gray-300 italic indent-8 leading-relaxed">
          <span className="font-semibold text-subheader-content">DOM</span> : โครงสร้างข้อมูลที่แทนหน้าเว็บจริง
          ซึ่งเบราว์เซอร์ใช้เพื่อแสดงผลและจัดการกับเนื้อหาของเว็บเพจ
          <br />
        </p>
        <p className="mt-3 text-md text-gray-300 italic indent-8 leading-relaxed">
          <span className="font-semibold text-subheader-content">Virtual DOM</span> : โครงสร้างข้อมูลที่เป็นสำเนาของ DOM จริง
          ซึ่งถูกสร้างขึ้นในหน่วยความจำเพื่อเพิ่มประสิทธิภาพในการอัปเดต UI
          โดยช่วย “อัพเดตเฉพาะส่วนที่เปลี่ยน” แทนที่จะต้องวาด/เปลี่ยนทั้งต้นไม้
          DOM ใหม่ทั้งหมด → ทำให้เว็บตอบสนองได้ดีขึ้น
        </p>
      </div>
    </div>
  );
};

export default VirtualDomContent;
