import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaCode, FaRocket, FaBook } from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();

  const goToWebsite = () => {
    navigate("/intro");
  };
  return (
    <div className="w-screen min-h-screen  flex flex-col items-center justify-center gap-8 px-4 py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* animate-spin-slow */}
      <div className="relative">
        <FaReact className="text-blue-400 text-9xl animate-spin-slow drop-shadow-2xl" />
        <div className="absolute inset-0 blur-3xl bg-blue-500 opacity-20 animate-pulse"></div>
      </div>

      {/* animate-fade-in */}
      <div className="text-center max-w-3xl space-y-4">
        <h1 className="min-h-full py-2 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-fade-in">
          Welcome to React Learning Hub
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
          Master the fundamentals of React and build amazing web applications
        </p>
        <p className="text-lg text-gray-400">
          My journey to becoming a React developer starts here!
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl w-full">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
          <FaCode className="text-blue-400 text-4xl mb-4" />
          <h3 className="text-white text-xl font-bold mb-2">Learn by Doing</h3>
          <p className="text-gray-400">
            Practical examples and hands-on coding
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
          <FaBook className="text-cyan-400 text-4xl mb-4" />
          <h3 className="text-white text-xl font-bold mb-2">
            Comprehensive Content
          </h3>
          <p className="text-gray-400">
            From basics to advanced React concepts
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
          <FaRocket className="text-purple-400 text-4xl mb-4" />
          <h3 className="text-white text-xl font-bold mb-2">Build Projects</h3>
          <p className="text-gray-400">Create real-world applications</p>
        </div>
      </div>

      <button
        className="group relative mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 hover:cursor-pointer"
        onClick={() => goToWebsite()}
      >
        <span className="relative z-10 flex items-center gap-2">
          Let's Go
          <FaRocket className="group-hover:translate-x-2 transition-transform duration-300" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      {/* top left */}
      <div className="absolute top-10 left-10 text-blue-500 opacity-10">
        <FaReact className="text-6xl animate-spin-slow" />
      </div>
      {/* bottom right */}
      <div className="absolute bottom-10 right-10 text-cyan-500 opacity-10">
        <FaReact
          className="text-8xl animate-spin-slow"
          style={{ animationDirection: "reverse" }}
        />
      </div>
    </div>
  );
};

export default HomePage;
