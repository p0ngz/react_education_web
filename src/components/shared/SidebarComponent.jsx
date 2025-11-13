import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import SidebarMenu from "./SidebarMenu.jsx";
const SidebarComponent = () => {

  const sidebarMenuTopic = {
    intro: [
      "What is React",
      "Component",
      "Virtual DOM",
      "JSX, TSX",
      "State, Props",
    ],
    Hook: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer",
      "useMemo",
      "useCallback",
      "useRef",
      "Custom Hook",
    ],
    stateManagement: ["Context API", "Redux", "Zustand"],
    compoundComponent: ["Overview", "Example"],
    API: ["Fetch API", "Axios"],
  };

  return (
    <div className="w-full h-full p-4">
      {Object.keys(sidebarMenuTopic).map((topic) => {
        return (
          <SidebarMenu key={topic} topicProps={topic} subTopicsProps={sidebarMenuTopic[topic]}/>
        );
      })}
    </div>
  );
};

export default SidebarComponent;
