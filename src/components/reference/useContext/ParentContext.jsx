import { FirstContextProvider } from "../../../contexts/firstContext";
import ChildContext from "./ChildContext";
const ParentContext = () => {
  return (
    <FirstContextProvider>
      <ChildContext />
    </FirstContextProvider>
  );
};

export default ParentContext;
