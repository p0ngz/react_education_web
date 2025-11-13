import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { removeSpaceAndLowerHandler } from "../../utilities/removeSpaceAndLower.js";
import { navigatePath } from "../../utilities/navigatePath.js";
import { motion, AnimatePresence } from "framer-motion";

const SidebarMenu = ({
  topicProps,
  subTopicsProps = [],
  isModalOpen = false,
  closeModalHandler,
}) => {
  const [isToggle, setIsToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const topicPath = location.pathname.split("/")[1];
  const subTopicPath = location.pathname.split("/")[2];

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };

  const navigateHandler = async (subTopic) => {
    if (isModalOpen && closeModalHandler) {
      await closeModalHandler(false);
      await navigate(navigatePath(topicProps, subTopic));

    } else {
      await navigate(navigatePath(topicProps, subTopic));
    }
  };
  useEffect(() => {
    // auto toggle if topic match path(topicPath)
    if (topicPath === topicProps.toLowerCase()) {
      setIsToggle(true);
    }
  }, [topicPath, topicProps]);
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-end">
        <p
          className="text-md font-bold text-white hover:cursor-pointer "
          onClick={() => toggleHandler()}
        >
          {topicProps}
        </p>
        <div
          id="toggle-intro"
          onClick={() => toggleHandler()}
          className="hover:cursor-pointer"
        >
          {isToggle ? (
            <TiArrowSortedUp className="text-white w-4 h-4 " />
          ) : (
            <TiArrowSortedDown className="text-white w-4 h-4 " />
          )}
        </div>
      </div>
      {isToggle && (
        <AnimatePresence>
          <motion.ul
            className="list-none"
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={{
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
              transition: { duration: 0.25, ease: "easeOut" },
            }}
          >
            {subTopicsProps.length > 0 &&
              subTopicsProps.map((subTopic, i) => {
                const isActive =
                  topicPath === removeSpaceAndLowerHandler(topicProps) &&
                  subTopicPath === removeSpaceAndLowerHandler(subTopic);

                return (
                  <motion.li
                    key={subTopic}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition="transition"
                    variants={{
                      initial: { opacity: 0, x: -10 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: -10 },
                      transition: { delay: i * 0.05, duration: 0.25 },
                    }}
                    className={`text-sm md:text-md ps-4 py-2 hover:cursor-pointer hover:text-white hover:font-semibold transition-colors ${
                      isActive
                        ? "font-semibold text-white bg-gray-700 rounded"
                        : "text-gray-300"
                    }`}
                    navigateHandler
                    // onClick={() => navigate(navigatePath(topicProps, subTopic))}
                    onClick={() => navigateHandler(subTopic)}
                  >
                    - {subTopic} {subTopic === "What is React" ? "?" : ""}
                  </motion.li>
                );
              })}
          </motion.ul>
        </AnimatePresence>
      )}
    </div>
  );
};

export default SidebarMenu;
