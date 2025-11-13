import { Outlet, useLocation } from "react-router-dom";
import NavbarComponent from "../components/shared/NavbarComponent.jsx";
import SidebarComponent from "../components/shared/SidebarComponent.jsx";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="relative grid-layout max-w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="[grid-area:header]">
        <NavbarComponent />
      </header>
      <aside className="hidden lg:block [grid-area:sidebar] w-full h-full bg-gray-900/50 overflow-y-auto custom-scrollbar">
        <SidebarComponent />
      </aside>
      <main className="[grid-area:main] bg-gray-900/30 w-full h-full overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
export default MainLayout;
