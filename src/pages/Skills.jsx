import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card"; 
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGit, FaGithub, FaMarkdown } from 'react-icons/fa'; 

function Skills() {
  return (
    <div className="min-h-screen bg-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title for Skills */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">
          Skills
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill Card 1: React */}
          <Card className="shadow-xl rounded-lg border border-slate-700 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white p-4">
              <div className="flex items-center justify-center">
                <FaReact size={40} />
              </div>
              <h2 className="text-xl font-semibold text-center mt-4">
                React
              </h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">
                Building modern, responsive UIs with React.js.
              </p>
            </CardContent>
          </Card>

          {/* Skill Card 2: Node.js */}
          <Card className="shadow-xl rounded-lg border border-green-600 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4">
              <div className="flex items-center justify-center">
                <FaNodeJs size={40} />
              </div>
              <h2 className="text-xl font-semibold text-center mt-4">
                Node.js
              </h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">
                Building server-side applications with Node.js and Express.
              </p>
            </CardContent>
          </Card>

          {/* Skill Card 3: HTML5 */}
          <Card className="shadow-xl rounded-lg border border-orange-500 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4">
              <div className="flex items-center justify-center">
                <FaHtml5 size={40} />
              </div>
              <h2 className="text-xl font-semibold text-center mt-4">
                HTML5
              </h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">
                Structuring web pages with semantic HTML5 elements.
              </p>
            </CardContent>
          </Card>

          {/* Skill Card 4: CSS3 */}
          <Card className="shadow-xl rounded-lg border border-blue-400 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-4">
              <div className="flex items-center justify-center">
                <FaCss3Alt size={40} />
              </div>
              <h2 className="text-xl font-semibold text-center mt-4">
                CSS3
              </h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">
                Styling web pages with modern CSS techniques.
              </p>
            </CardContent>
          </Card>

          {/* Skill Card 5: Python */}
          <Card className="shadow-xl rounded-lg border border-yellow-600 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white p-4">
              <div className="flex items-center justify-center">
                <FaPython size={40} />
              </div>
              <h2 className="text-xl font-semibold text-center mt-4">
                Python
              </h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">
                Writing scripts, automation, and web development with Python.
              </p>
            </CardContent>
          </Card>

          {/* Skill Card 6: Git */}
          <Card className="shadow-xl rounded-lg border border-orange-500 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4">
              <div className="flex items-center justify-center">
                <FaGit size={40} />
              </div>
              <h2 className="text-xl font-semibold text-center mt-4">
                Git
              </h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">
                Version control using Git for collaborative development.
              </p>
            </CardContent>
          </Card>

          {/* Skill Card 7: GitHub */}
          <Card className="shadow-xl rounded-lg border border-black max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-600 text-white p-4">
              <div className="flex items-center justify-center">
                <FaGithub size={40} />
              </div>
              <h2 className="text-xl font-semibold text-center mt-4">
                GitHub
              </h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">
                Hosting and version control for projects on GitHub.
              </p>
            </CardContent>
          </Card>

          {/* Skill Card 8: Markdown */}
          <Card className="shadow-xl rounded-lg border border-gray-600 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-gray-500 to-gray-400 text-white p-4">
              <div className="flex items-center justify-center">
                <FaMarkdown size={40} />
              </div>
              <h2 className="text-xl font-semibold text-center mt-4">
                Markdown
              </h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">
                Writing documentation and content using Markdown.
              </p>
            </CardContent>
          </Card>

          {/* Skill Card 9: JavaScript */}
          <Card className="shadow-xl rounded-lg border border-yellow-500 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white p-4">
              <div className="flex items-center justify-center">
                <FaHtml5 size={40} />
              </div>
              <h2 className="text-xl font-semibold text-center mt-4">
                JavaScript
              </h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">
                Writing dynamic and interactive web applications.
              </p>
            </CardContent>
          </Card>

          {/* Skill Card 10: Bootstrap */}
          <Card className="shadow-xl rounded-lg border border-primary max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
              <h2 className="text-xl font-semibold text-center mt-4">Bootstrap</h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">Building responsive, mobile-first websites with Bootstrap.</p>
            </CardContent>
          </Card>

          {/* Skill Card 11: TailwindCSS */}
          <Card className="shadow-xl rounded-lg border border-indigo-500 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-4">
              <h2 className="text-xl font-semibold text-center mt-4">TailwindCSS</h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">Utility-first CSS framework for rapid UI development.</p>
            </CardContent>
          </Card>

          {/* Skill Card 12: Django */}
          <Card className="shadow-xl rounded-lg border border-red-600 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-500 text-white p-4">
              <h2 className="text-xl font-semibold text-center mt-4">Django</h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">Building web applications using the Django framework.</p>
            </CardContent>
          </Card>

          {/* Skill Card 13: MongoDB */}
          <Card className="shadow-xl rounded-lg border border-green-700 max-w-xs mx-auto">
            <CardHeader className="bg-gradient-to-r from-green-700 to-green-600 text-white p-4">
              <h2 className="text-xl font-semibold text-center mt-4">MongoDB</h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md text-gray-300 mb-4">NoSQL database for scalable and flexible storage.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Skills;
