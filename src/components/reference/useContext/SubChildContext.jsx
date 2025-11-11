import React from "react";
import { useFirstContext } from "../../../contexts/firstContext";
const SubChildContext = () => {
  const { inputTxt } = useFirstContext();
  return (
    <div id="subChild" className="bg-gray-900 border border-gray-600 rounded-lg p-4 mt-4">
      <h3 className="text-lg font-semibold mb-3 text-blue-400">Sub Child Component</h3>
      <div className="bg-gray-800 border border-gray-700 rounded p-3">
        <p className="text-gray-200 font-mono">{inputTxt || <span className="text-gray-500 italic">No text entered yet...</span>}</p>
      </div>
    </div>
  );
};

export default SubChildContext;
