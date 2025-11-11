import { useParams, Navigate } from "react-router-dom";

// Intro
import WhatIsReactPage from "./intro/WhatIsReactPage";
import ComponentContentPage from "./intro/ComponentPage";
import VirtualDomContentPage from "./intro/VirtualDomContentPage";
import JsxTsxContentPage from "./intro/JsxTsxContentPage";
import StatePropsContentPage from "./intro/StatePropsContentPage";

// Hook
import UseState from "./hook/UseState"
import UseEffect from "./hook/UseEffect"
import UseContext from "./hook/UseContext"
import UseReducer from "./hook/UseReducer"
import UseMemo from "./hook/UseMemo"
import UseCallback from "./hook/UseCallback"
import UseRef from "./hook/UseRef"
import CustomHook from "./hook/CustomHook"
const DynamicContentPage = () => {
  const { topic, subTopic } = useParams();

  // Content mapping - maps URL params to components
  const contentMap = {
    intro: {
      whatisreact: <WhatIsReactPage />,
      component: <ComponentContentPage />,
      virtualdom: <VirtualDomContentPage />,
      "jsx,tsx": <JsxTsxContentPage />,
      "state,props": <StatePropsContentPage />,
    },
    hook: {
      usestate: <UseState />,
      useeffect: <UseEffect />,
      usecontext: <UseContext />,
      usereducer: <UseReducer />,
      usememo: <UseMemo />,
      usecallback: <UseCallback />,
      useref: <UseRef />,
      customhook: <CustomHook />,
    },
    statemanagement: {
      contextapi: <div className="text-white text-2xl">Context API Content</div>,
      redux: <div className="text-white text-2xl">Redux Content</div>,
      zustand: <div className="text-white text-2xl">Zustand Content</div>,
    },
    compoundcomponent: {
      overview: <div className="text-white text-2xl">Compound Component Overview</div>,
      example: <div className="text-white text-2xl">Compound Component Example</div>,
    },
    api: {
      fetchapi: <div className="text-white text-2xl">Fetch API Content</div>,
      axios: <div className="text-white text-2xl">Axios Content</div>,
    },
  };

  // Get the content component
  const content = contentMap[topic]?.[subTopic];

  // If content not found, redirect to 404
  if (!content) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="w-full h-full p-6 overflow-auto">
      {content}
    </div>
  );
};

export default DynamicContentPage;
