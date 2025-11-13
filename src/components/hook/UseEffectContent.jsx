import { useState, useEffect } from "react";
import useEffect_img from "../../assets/capture/hook/useEffect_img.png";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const UseEffectContent = () => {
  const [users, setUsers] = useState([]);
  const [rows, setRows] = useState([]);
  const createData = (name, username, email) => {
    return { name, username, email };
  };
  // useEffect(() => {
  //   console.log("rows changed: ", rows);
  // }, [rows]);
  useEffect(() => {
    setRows(() => {
      return users.map((user) =>
        createData(user.name, user.username, user.email)
      );
    });
  }, [users]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="content-container">
      <div id="box-1">
        <h1 className="text-3xl font-bold text-header-content">useEffect</h1>
        <p className="mt-5 text-md text-gray-300 italic indent-8 leading-relaxed">
          useEffect เป็น Hook ใน React ที่ใช้สำหรับจัดการ “side effects” ใน
          component เช่น: ดึงข้อมูลจาก API, เปลี่ยนค่าใน DOM โดยตรง, ตั้งเวลา
          (setTimeout, setInterval), จัดการ event listener, ทำ cleanup ก่อน
          component ถูกลบออก
        </p>
        <div id="useState" className="code-container w-full md:w-fit">
          <code className="code-text">
            useEffect(() ={`>`} {`{}`}, [{`dependencies`}]) ;
          </code>
        </div>
        <p className="mt-5 text-sm text-gray-300 leading-relaxed">
          *** dependencies คือ ค่าที่ใช้ในการควบคุมการทำงานของ useEffect
          นั้นๆจะมีหรือไม่มีก็ได้
        </p>
      </div>
      <div id="box-2" className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center my-5 gap-3">
          <img
            src={useEffect_img}
            alt="useState"
            className="w-[80%] xl:w-[60%]"
          />
          <p className="font-semibold text-gray-300 text-center">
            ตัวอย่างการใช้ useEffect เพื่อดึงข้อมูลจาก API
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            * fetch คือ built-in function ของ JavaScript
            ที่ใช้สำหรับดึงข้อมูลจากแหล่งข้อมูลภายนอก เช่น API หรือไฟล์ JSON
          </p>
        </div>
        <div id="useEffect-table" className=" mt-10 xl:w-[80%]">
          <TableContainer
            component={Paper}
            sx={{
              backgroundColor: "#1f2937", // bg-gray-800
              borderRadius: "0.375rem",
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "rgb(31 41 55);" }}>
                  <TableCell
                    sx={{
                      color: "#22d3ee",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#22d3ee",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Username
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#22d3ee",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Email
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      backgroundColor: index % 2 === 0 ? "#1f2937" : "#374151", // Alternating rows
                      "&:hover": { backgroundColor: "#4b5563" }, // hover effect
                    }}
                  >
                    <TableCell
                      sx={{ color: "#d1d5db", borderColor: "#374151" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ color: "#d1d5db", borderColor: "#374151" }}
                    >
                      {row.username}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ color: "#d1d5db", borderColor: "#374151" }}
                    >
                      {row.email}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <p className="font-semibold text-gray-300 text-center mt-3">
            ตารางแสดงข้อมูลผู้ใช้ที่ดึงมาจาก API
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseEffectContent;
