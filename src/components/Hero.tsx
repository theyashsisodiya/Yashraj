import React from 'react';
import { ArrowDown, Code, Cloud, Bot, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="clay-element-1 absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-3xl opacity-60"></div>
        <div className="clay-element-2 absolute top-40 right-20 w-24 h-24 bg-orange-400 rounded-2xl opacity-50"></div>
        <div className="clay-element-3 absolute bottom-32 left-1/4 w-20 h-20 bg-green-400 rounded-full opacity-40"></div>
        <div className="clay-element-4 absolute top-1/3 right-1/4 w-16 h-16 bg-purple-400 rounded-xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                  Yashraj Singh
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-700 font-semibold">
                Sisodiya
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Graduated AI Automation Engineer | DevOps & Cloud Enthusiast | B.Tech CSE, SVVV Indore
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in designing AI-powered workflows using N8n, integrating LLM APIs (Gemini, OpenAI) 
                with cloud platforms (Google Cloud, AWS), and have a strong foundation in DevOps and automation logic. 
                My experience includes internships at DesiredSoft and leadership roles in tech clubs.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm passionate about contributing to AI agent development and process automation, 
                bringing innovative solutions to complex technical challenges.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Let's Connect
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
              >
                View Projects
              </button>
            </div>

            {/* Tech Icons */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Code className="animate-pulse" />
                <span className="text-sm font-medium">AI Automation</span>
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <Cloud className="animate-pulse" />
                <span className="text-sm font-medium">Cloud & DevOps</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Bot className="animate-pulse" />
                <span className="text-sm font-medium">LLM Integration</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Computer Panel */}
          <div className="lg:w-1/2 relative">
            <div className="computer-panel relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              {/* Screen */}
              <div className="bg-gray-900 rounded-2xl p-6 mb-6 relative overflow-hidden">
                <div className="absolute top-2 left-2 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="pt-6 space-y-3">
                  <div className="typing-text text-green-400 font-mono text-sm">
                    {'>'} Initializing AI Automation Systems...
                  </div>
                  <div className="typing-text text-blue-400 font-mono text-sm">
                    {'>'} Cloud Infrastructure: Ready ✓
                  </div>
                  <div className="typing-text text-orange-400 font-mono text-sm">
                    {'>'} DevOps Pipeline: Active ✓
                  </div>
                  <div className="typing-text text-purple-400 font-mono text-sm">
                    {'>'} LLM APIs: Connected ✓
                  </div>
                </div>
              </div>

              {/* Keyboard */}
              <div className="space-y-2">
                <div className="flex gap-1">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className="w-6 h-6 bg-gray-700 rounded border border-gray-600"></div>
                  ))}
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="w-6 h-6 bg-gray-700 rounded border border-gray-600"></div>
                  ))}
                </div>
                <div className="flex gap-1">
                  <div className="w-32 h-6 bg-gray-700 rounded border border-gray-600"></div>
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="w-6 h-6 bg-gray-700 rounded border border-gray-600"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Tech Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500 rounded-xl opacity-80 floating-slow flex items-center justify-center">
              <Cpu className="text-white" size={24} />
            </div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-orange-500 rounded-2xl opacity-70 floating-fast flex items-center justify-center">
              <Bot className="text-white" size={20} />
            </div>
            <div className="absolute top-1/2 -right-5 w-12 h-12 bg-green-500 rounded-full opacity-60 floating-element">
              <Cloud className="text-white m-3" size={18} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-blue-600" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;