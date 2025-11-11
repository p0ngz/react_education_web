import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { removeSpaceAndLowerHandler } from "../../utilities/removeSpaceAndLower.js";
import { navigatePath } from "../../utilities/navigatePath.js";

const SidebarMenu = ({ topicProps, subTopicsProps = [] }) => {
  const [isToggle, setIsToggle] = useState(false);
  //   const [isSubTopicActive, setIsSubTopicActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const topicPath = location.pathname.split("/")[1];
  const subTopicPath = location.pathname.split("/")[2];

  const toggleHandler = () => {
    setIsToggle(!isToggle);
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
        <p className="text-md font-bold text-white">{topicProps}</p>
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
        <ul className="list-none">
          {subTopicsProps.length > 0 &&
            subTopicsProps.map((subTopic) => {
              const isActive =
                topicPath === removeSpaceAndLowerHandler(topicProps) &&
                subTopicPath === removeSpaceAndLowerHandler(subTopic);

              return (
                <li
                  key={subTopic}
                  className={`text-sm md:text-md ps-4 py-2 hover:cursor-pointer hover:text-white hover:font-semibold transition-colors ${
                    isActive
                      ? "font-semibold text-white bg-gray-700 rounded"
                      : "text-gray-300"
                  }`}
                  onClick={() => navigate(navigatePath(topicProps, subTopic))}
                >
                  - {subTopic} {subTopic === "What is React" ? "?" : ""}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default SidebarMenu;
