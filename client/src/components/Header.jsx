import React, { useRef } from "react";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <div className="flex items-center justify-center p-20">
      <div className="text-center">
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-100 mb-10">
          ~Jay
        </h1>

        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between w-[400px] sm:w-[500px] max-sm:scale-75 mx-auto border border-gray-600 bg-[#1a1a1a] rounded-lg overflow-hidden"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full pl-5 py-3 text-base outline-none bg-transparent text-gray-200 placeholder-gray-500"
          />
          <button
            type="submit"
            className="bg-primary text-white px-10 py-3 m-1.5 rounded-lg hover:scale-105 transition-all cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      <div className="text-center">
        {input && (
          <button
            onClick={onClear}
            className="border border-gray-600 font-light text-xs py-1 px-3 rounded-sm text-gray-300 cursor-pointer hover:bg-gray-800 transition-all"
          >
            Clear Search
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
