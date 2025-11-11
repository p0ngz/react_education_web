import { useParams, Navigate } from "react-router-dom";
import { removeSpaceAndLowerHandler } from "../utilities/removeSpaceAndLower";

const TopicIndexPage = () => {
  const { topic } = useParams();

  const firstSubTopicMap = {
    intro: "What is React?",
    hook: "useState",
    statemanagement: "Context API",
    compoundcomponent: "Overview",
    api: "Fetch API",
  };

  const firstSubTopic = firstSubTopicMap[topic?.toLowerCase()];

  if (!firstSubTopic) {
    return <Navigate to="/404" replace />;
  }

  const subTopicPath = removeSpaceAndLowerHandler(firstSubTopic);
  return <Navigate to={`/${topic}/${subTopicPath}`} replace />;
};

export default TopicIndexPage;
