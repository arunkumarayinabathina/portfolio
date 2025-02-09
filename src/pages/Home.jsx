import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="bg-gray-800 flex items-center justify-center min-h-screen px-4 sm:px-8">
      <div className="text-center w-full max-w-3xl">
        <div className="py-16">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Hello, I'm Arun
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Welcome to my portfolio. I am Arun, passionate about web development
            with a strong knowledge of web frameworks and tools.
          </p>
          <Button
            onClick={handleOpenModal}
            className="bg-slate-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-600 transition-transform duration-300 transform hover:scale-105"
          >
            View Resume
          </Button>
        </div>
        <div className="py-16"></div>

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleOutsideClick}
          >
            <div
              className="bg-white p-6 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-500"
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold text-center mb-4">
                Resume
              </h2>
              <iframe
                src="https://drive.google.com/file/d/1HGtwzLLzCA31o5nBYj21MSLUGl_Q8E78/preview"
                width="100%"
                height="600px"
                title="Resume"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
