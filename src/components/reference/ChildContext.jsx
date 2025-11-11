import React from "react";
import { useFirstContext } from "../../contexts/firstContext";
import SubChildContext from "./useContext/SubChildContext";
const ChildContext = () => {
  const { inputTxt, inputTxtHandler } = useFirstContext();

  return (
    <div id="child" className="bg-gray-800 border border-gray-700 rounded-lg p-4 mt-4">
      <h3 className="text-lg font-semibold mb-3 text-cyan-400">Child Component</h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="inputTxt" className="text-sm text-gray-300">Text:</label>
        <input
          value={inputTxt}
          onChange={(event) => inputTxtHandler(event.target.value)}
          type="text"
          id="inputTxt"
          placeholder="input txt here..."
          className="bg-gray-900 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
        />
      </div>
      <SubChildContext />
    </div>
  );
};

export default ChildContext;
