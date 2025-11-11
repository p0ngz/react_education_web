import React from "react";
import functionalComponent1 from "../../assets/capture/functional_component.png";
import functionalComponent2 from "../../assets/capture/functional_component2.png";
import classComponent from "../../assets/capture/class_component.png";
const ComponentContent = () => {
  return (
    <div className="content-container">
      <div id="box-1">
        <h1 className="text-3xl font-bold text-header-content">
          Component 
        </h1>
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          ในการสร้างแอปพลิเคชันด้วย React เราจะใช้แนวคิดที่เรียกว่า
          "Component-Based Architecture" ซึ่งหมายความว่า UI
          ของแอปพลิเคชันจะถูกแบ่งออกเป็นส่วนย่อยๆ ที่เรียกว่า "Component" แต่ละ
          Component จะเป็นส่วนประกอบที่มีหน้าที่เฉพาะเจาะจง
          และสามารถนำกลับมาใช้ซ้ำได้
        </p>
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          โดยวิธีการสร้าง Component ใน React สามารถทำได้สองวิธีหลักๆ คือ
          Component แบบฟังก์ชัน (Function Component) และ Component แบบคลาส
          (Class Component) ซึ่งในปัจจุบัน การใช้ Function Component ร่วมกับ
          Hooks
          เป็นวิธีที่ได้รับความนิยมมากกว่าเนื่องจากมีความเรียบง่ายและยืดหยุ่นมากขึ้น
        </p>
      </div>
      <div id="example" className="mt-5 space-y-8">
        <div id="box-2" className="space-y-4">
          <div
            id="functional-img"
            className="w-full h-auto flex justify-center flex-wrap items-center gap-4"
          >
            <img
              src={functionalComponent1}
              alt="functional_component_1"
              className="w-[80%] lg:w-[500px] h-[300px] rounded-lg shadow-lg"
            />
            <img
              src={functionalComponent2}
              alt="functional_component_2"
              className="w-[80%] lg:w-[500px] h-[300px] rounded-lg shadow-lg"
            />
          </div>
          <p className="font-semibold text-gray-300 text-center">
            การเขียนแบบ functional component
          </p>
        </div>
        <div id="box-3" className="space-y-4">
          <div
            id="class-img"
            className="w-full h-auto flex justify-center items-center gap-4"
          >
            <img
              src={classComponent}
              alt="class_component_"
              className="w-[80%] lg:w-[500px] h-[300px] rounded-lg shadow-lg"
            />
          </div>
          <p className="font-semibold text-gray-300 text-center">
            การเขียนแบบ functional component
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComponentContent;
