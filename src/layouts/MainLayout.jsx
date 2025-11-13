import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/shared/NavbarComponent.jsx";
import SidebarComponent from "../components/shared/SidebarComponent.jsx";
const MainLayout = () => {
  

  return (
    <div className="relative grid-layout max-w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="[grid-area:header]">
        <NavbarComponent />
      </header>
      <aside className="hidden lg:block [grid-area:sidebar] w-full h-full bg-gray-900/50 overflow-y-auto custom-scrollbar">
        <SidebarComponent />
      </aside>
      <main className="[grid-area:main] bg-gray-900/30 w-full h-full overflow-y-auto custom-scrollbar">
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
