import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Adjust this import based on your directory structure
import { Button } from "@/components/ui/button"; // Same here, ensure the correct import path

function Home() {
  return (
    <div className="bg-gray-800 flex items-center justify-center min-h-screen py-12">
      {/* Large and Attractive Card */}
      <Card className="max-w-4xl mx-auto shadow-2xl bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg overflow-hidden border-4 border-transparent hover:border-gray-600 transform transition duration-300 hover:scale-105">
        <CardHeader className="text-center p-8 mt-12 sm:mt-6 bg-transparent">
          <h1 className="text-5xl font-extrabold text-white tracking-wide">
            Hello, I'm Arun
          </h1>
        </CardHeader>
        <CardContent className="bg-gray-900 p-12 text-center rounded-b-lg shadow-lg">
          <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
            Welcome to my portfolio. I am Arun, passionate about web development with a strong knowledge of web frameworks and tools.
          </p>
          {/* Stylized Button */}
          <Button className="bg-slate-700 text-white font-extrabold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-600 transition duration-300 ease-in-out transform hover:scale-105">
            Download Resume
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
