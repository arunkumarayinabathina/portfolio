import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Adjust this import based on your directory structure
import { Button } from "@/components/ui/button"; // Same here, ensure the correct import path

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
      {/* Responsive Card with Simplified Styling */}
      <Card className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-xl border border-gray-700">
        <CardHeader className="p-6 text-center bg-gray-800 rounded-t-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Hello, I'm Arun
          </h1>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 text-center">
          <p className="text-lg sm:text-xl text-slate-300 mb-6 leading-relaxed">
            Welcome to my portfolio. I am Arun, passionate about web development
            with a strong knowledge of web frameworks and tools.
          </p>
          <Button
            onClick={handleDownload}
            className="bg-slate-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-md shadow-md hover:bg-slate-600 transition-transform duration-300 transform hover:scale-105"
          >
            View Resume
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
