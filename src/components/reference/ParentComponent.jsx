import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const firstNameHandler = (val) => {
    setFirstName(val);
  };

  const lastNameHandler = (val) => {
    setLastName(val);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const fullName = firstName + " " + lastName;
    setFullName(fullName);
  };

  return (
    <div className="content-container">
      <h1 className="text-md font-bold text-white">
        Parent & Child Component Example
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:gap-10">
        <ChildComponent value={fullName} />

        <form
          onSubmit={submitHandler}
          className="w-full md:w-1/2 mt-6 space-y-4 max-w-md flex flex-col"
        >
          <div className="">
            <label
              htmlFor="firstName"
              className="block text-gray-300 font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => firstNameHandler(e.target.value)}
              placeholder="Enter first name"
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div className="">
            <label
              htmlFor="lastName"
              className="block text-gray-300 font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => lastNameHandler(e.target.value)}
              placeholder="Enter last name"
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition w-full"
          >
            Send to Child
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParentComponent;
