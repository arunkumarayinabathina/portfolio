import React from "react";
import { Button } from "@/components/ui/button"; // Ensure the correct import path

function Home() {
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1HGtwzLLzCA31o5nBYj21MSLUGl_Q8E78/view?usp=drive_link";

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-800 flex items-center justify-center min-h-screen px-4 sm:px-8">
      <div className="text-center w-full max-w-3xl">
        {/* Large Top Spacing */}
        <div className="py-16">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Hello, I'm Arun
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Welcome to my portfolio. I am Arun, passionate about web development
            with a strong knowledge of web frameworks and tools.
          </p>
          {/* Call to Action */}
          <Button
            onClick={handleDownload}
            className="bg-slate-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-600 transition-transform duration-300 transform hover:scale-105"
          >
            View Resume
          </Button>
        </div>
        {/* Large Bottom Spacing */}
        <div className="py-16"></div>
      </div>
    </div>
  );
}

export default Home;
