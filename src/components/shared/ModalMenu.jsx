// use useDispatch fro using function in store
//  use useSelector for getting data from store
import { useSelector } from "react-redux";
import SidebarMenu from "./SidebarMenu";
const ModalMenu = ({ sendStateModal, topicProps, subTopicsProps = [] }) => {
  const menu = useSelector((state) => state.menu.menuData);
  // console.log("Menu Data: ", menu);
  const closeModalHandler = (val) => {
    sendStateModal(val);
  };
  return (
    <div className="lg:hidden absolute px-10 inset-0 bg-black/50 backdrop-blur-md z-50 flex flex-col items-center justify-center">
      <p className="text-white text-2xl font-bold mb-4">Modal Menu Component</p>
      {/* <img src={jsxImg} alt="JSX Example" className="w-auto h-auto" /> */}

      {Object.keys(menu).map((topic) => {
        return (
          <SidebarMenu
            key={topic}
            topicProps={topic}
            subTopicsProps={menu[topic]}
            isModalOpen={true}
            closeModalHandler={closeModalHandler}
          />
        );
      })}
      <button
        onClick={() => closeModalHandler(false)}
        className="bg-orange-400 rounded-md px-6 py-2 text-white hover:bg-orange-500 transition"
      >
        Close Menu
      </button>
    </div>
  );
};

export default ModalMenu;
