
const WhatIsReact = () => {
  return (
    <div className="content-container">
      <div id="box-1">
        <h1 className="text-3xl font-bold text-header-content">
          React คืออะไร ?
        </h1>
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          React คือไลบรารี JavaScript สำหรับสร้างส่วนติดต่อผู้ใช้ (User
          Interface หรือ UI) ที่พัฒนาโดย Facebook (ปัจจุบันคือ Meta)
          มีจุดเด่นคือการสร้าง UI ด้วยแนวคิดที่เรียกว่า "Component-Based"
          ซึ่งเป็นการแบ่ง UI ออกเป็นส่วนย่อยๆ ที่สามารถนำกลับมาใช้ซ้ำได้
          ทำให้พัฒนาได้รวดเร็วและมีประสิทธิภาพมากขึ้น นอกจากนี้ React ยังใช้
          Virtual DOM เพื่อจัดการการอัปเดต UI อย่างมีประสิทธิภาพ และใช้ JSX
          ซึ่งเป็นการผสมผสานระหว่าง JavaScript และ HTML
        </p>
      </div>
      <div id="box-2">
        <h1 className="text-3xl font-bold text-header-content">
          คุณสมบัติสำคัญของ React
        </h1>
        <div className="mt-5 text-md text-gray-300 italic ps-8 leading-relaxed">
          <ul className="list-disc space-y-3">
            <li>
              <span className="font-semibold text-subheader-content ">
                Component-Based
              </span>
              : UI ถูกแบ่งออกเป็นส่วนประกอบย่อยๆ ที่เรียกว่า "Component"
              ซึ่งสามารถนำไปใช้ซ้ำได้ในส่วนอื่นๆ ของแอปพลิเคชัน
              ทำให้โค้ดเป็นระเบียบและนำกลับมาใช้ใหม่ได้ง่าย
            </li>
            <li>
              <span className="font-semibold text-subheader-content ">
                Virtual DOM
              </span>
              : เป็นเทคนิคการอัปเดต UI โดยใช้ "Virtual DOM" (DOM เสมือน)
              เพื่อเปรียบเทียบการเปลี่ยนแปลงก่อนที่จะนำไปอัปเดตใน DOM จริง
              ซึ่งช่วยให้การอัปเดตทำได้รวดเร็วและมีประสิทธิภาพ
            </li>
            <li>
              <span className="font-semibold text-subheader-content ">JSX</span>
              : เป็นส่วนขยายของ JavaScript ที่ช่วยให้สามารถเขียนโค้ดที่ดูคล้าย
              HTML เพื่อใช้กำหนดโครงสร้างของ Component ได้
              ทำให้การเขียนโค้ดมีความเข้าใจง่ายขึ้น
            </li>
            <li>
              <span className="font-semibold text-subheader-content ">
                State and Props
              </span>
              : เป็นคอนเซปต์สำคัญในการจัดการข้อมูลภายใน Component (State)
              และการส่งข้อมูลจาก Component หนึ่งไปยังอีก Component หนึ่ง (Props)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatIsReact;
