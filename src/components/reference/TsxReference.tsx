import React, { useState } from "react";

const TsxReference: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increaseHandler = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseHandler = (): void => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="content-container flex flex-col items-center">
      <p className="mt-3 text-md text-gray-300 text-center leading-relaxed">
        Current Count: {count}
      </p>
      <div className="flex gap-4 mt-4">
        <button 
          onClick={increaseHandler}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition hover:cursor-pointer"
        >
          Increase
        </button>
        <button 
          onClick={decreaseHandler}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition hover:cursor-pointer"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default TsxReference;
