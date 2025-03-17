
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter, Clock, BriefcaseBusiness, User, Code, ExternalLink } from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2">
          <div className="flex items-start">
            <div className="mr-4 ios-icon">
              <User className="w-6 h-6 text-[#9b87f5]" />
            </div>
            <div>
              <h2 className="text-sm text-[#8E9196] mb-2">welcome</h2>
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm <span className="text-[#9b87f5]">Your Name</span>
              </h1>
              <p className="text-gray-300 text-lg">
                A software developer with a passion for creating beautiful and functional web experiences
              </p>
            </div>
          </div>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2">
          <div className="flex items-start mb-5">
            <div className="mr-3 ios-icon">
              <BriefcaseBusiness className="w-6 h-6 text-[#9b87f5]" />
            </div>
            <h2 className="text-2xl font-bold">About me</h2>
          </div>
          
          <p className="text-gray-300 text-lg mb-6">
            I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-[#8E9196]">My tools:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="ios-button">React</div>
              <div className="ios-button">TypeScript</div>
              <div className="ios-button">Node.js</div>
              <div className="ios-button">Tailwind CSS</div>
            </div>
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card">
          <div className="flex items-start">
            <div className="mr-3 ios-icon">
              <Clock className="w-6 h-6 text-[#9b87f5]" />
            </div>
            <div>
              <h2 className="text-lg text-[#8E9196] mb-4">Current Time</h2>
              <p className="text-3xl font-bold font-mono">
                {time.toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="ios-icon">
              <Github className="w-8 h-8 text-[#9b87f5]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="ios-icon">
              <Linkedin className="w-8 h-8 text-[#9b87f5]" />
            </a>
            <a href="mailto:your@email.com"
               className="ios-icon">
              <Mail className="w-8 h-8 text-[#9b87f5]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="ios-icon">
              <Twitter className="w-8 h-8 text-[#9b87f5]" />
            </a>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-2">
          <div className="flex items-start mb-5">
            <div className="mr-3 ios-icon">
              <Code className="w-6 h-6 text-[#9b87f5]" />
            </div>
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#1a1a1a]/50 backdrop-blur-md border border-white/5 hover:border-[#9b87f5]/20 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3">Project 1</h3>
              <p className="text-gray-300 mb-4">Description of your amazing project</p>
              <a href="#" className="flex items-center text-[#9b87f5] hover:underline">
                View Project <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="p-6 rounded-2xl bg-[#1a1a1a]/50 backdrop-blur-md border border-white/5 hover:border-[#9b87f5]/20 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3">Project 2</h3>
              <p className="text-gray-300 mb-4">Description of another cool project</p>
              <a href="#" className="flex items-center text-[#9b87f5] hover:underline">
                View Project <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
