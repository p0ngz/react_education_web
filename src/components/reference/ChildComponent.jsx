import React from "react";

const ChildComponent = ({ value }) => {
  console.log(
    "always log when rerender from changing value in parent component"
  );
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 w-full h-full md:w-1/2">
      <h3 className="text-xl font-bold text-white mb-2">Child Component</h3>
      <p className="text-gray-400 text-sm mb-4">Received from Parent:</p>
      <div className="bg-gray-900 rounded-lg p-4">
        <p className="text-md font-bold text-blue-400">{value}</p>
      </div>
    </div>
  );
};

export default ChildComponent;
