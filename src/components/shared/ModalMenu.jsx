const ModalMenu = ({ sendStateModal }) => {
  const closeModalHandler = () => {
    sendStateModal(false);
  };
  return (
    <div className="fixed inset-0 md:hidden bg-black/50 backdrop-blur-md z-50 flex flex-col justify-center items-center">
      <p className="text-white text-2xl font-bold mb-4">Modal Menu Component</p>
      {/* <img src={jsxImg} alt="JSX Example" className="w-auto h-auto" /> */}

      <button
        onClick={closeModalHandler}
        className="bg-orange-400 rounded-md px-6 py-2 text-white hover:bg-orange-500 transition"
      >
        Close Menu
      </button>
    </div>
  );
};

export default ModalMenu;
