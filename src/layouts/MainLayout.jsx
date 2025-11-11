import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/shared/NavbarComponent.jsx";
import SidebarComponent from "../components/shared/SidebarComponent.jsx";
import ModalMenu from "../components/shared/ModalMenu.jsx";
const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const receiveStateModal = (state) => {
    setIsModalOpen(state);
  };

  return (
    <div className="relative grid-layout max-w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="[grid-area:header]">
        <NavbarComponent sendOpenModalMenu={receiveStateModal} />
      </header>
      <aside className="hidden lg:block [grid-area:sidebar] w-full h-full bg-gray-900/50 overflow-y-auto custom-scrollbar">
        <SidebarComponent />
      </aside>
      <main className="[grid-area:main] bg-gray-900/30 w-full h-full overflow-y-auto custom-scrollbar">
        <Outlet />
      </main>
      {isModalOpen && <ModalMenu sendStateModal={receiveStateModal} />}
    </div>
  );
};
export default MainLayout;
