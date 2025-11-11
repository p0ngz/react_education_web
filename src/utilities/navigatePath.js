import { removeSpaceAndLowerHandler } from "./removeSpaceAndLower";

export const navigatePath = (topic, subTopic) => {
  const pathTopic = removeSpaceAndLowerHandler(topic);
  const pathSubTopic = removeSpaceAndLowerHandler(subTopic);
  return `/${pathTopic}/${pathSubTopic}`;
};
