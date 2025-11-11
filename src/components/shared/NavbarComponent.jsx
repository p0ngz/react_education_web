import { FaReact } from "react-icons/fa";
import profileImg from "../../assets/nae.jpg";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const NavbarComponent = ({ sendOpenModalMenu }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between ps-4 pe-4 md:pe-8 py-4 ">
      <div
        className="group flex items-center space-x-4"
        onClick={() => navigate("/")}
      >
        <FaReact className="text-blue-300 text-5xl group-hover:text-blue-300 group-hover:cursor-pointer" />
        <span className="text-white text-2xl font-bold group-hover:text-blue-300 group-hover:cursor-pointer">
          React
        </span>
      </div>
      <div className="hidden lg:block w-10 h-10 flex items-center justify-center rounded-full overflow-hidden hover:cursor-pointer hover:border-2 hover:border-gray-700">
        <img
          src={profileImg}
          className=" w-full h-full rounded-full hover:bg-blue-600 transition"
        />
      </div>
      <div className="w-10 h-10 flex lg:hidden items-center justify-center rounded-full overflow-hidden hover:cursor-pointer hover:border-2 hover:border-gray-700">
        <MenuIcon
          className="text-white "
          // sx={{ fontSize: 28 }}
          onClick={() => sendOpenModalMenu(true)}
        />
      </div>
    </div>
  );
};

export default NavbarComponent;
