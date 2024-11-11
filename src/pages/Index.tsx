import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-3xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-gray-300">
            A software developer with a passion for creating beautiful and functional web experiences
          </p>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-xl font-bold mb-4">About me</h2>
          <p className="text-gray-300 mb-4">
            I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
          </p>
          <div className="space-y-2">
            <p className="text-sm text-gray-400">My tools:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card">
          <h2 className="text-sm text-gray-400 mb-2">Current Time</h2>
          <p className="text-2xl font-bold font-mono">
            {time.toLocaleTimeString()}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
          <h2 className="text-xl font-bold mb-4">Let's Connect</h2>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your@email.com"
               className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-card-hover rounded-lg">
              <h3 className="font-bold mb-2">Project 1</h3>
              <p className="text-sm text-gray-300">Description of your amazing project</p>
            </div>
            <div className="p-4 bg-card-hover rounded-lg">
              <h3 className="font-bold mb-2">Project 2</h3>
              <p className="text-sm text-gray-300">Description of another cool project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;