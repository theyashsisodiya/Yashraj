import React from 'react';
import { Code, Cloud, Bot, Wrench, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Bot className="text-blue-600" size={32} />,
      title: "Automation & Orchestration",
      skills: ["N8n (project experience)", "Make.com (familiar)", "Zapier (familiar)"],
      color: "bg-blue-100 border-blue-300"
    },
    {
      icon: <Code className="text-green-600" size={32} />,
      title: "AI / LLM & APIs",
      skills: ["Gemini API", "OpenAI API", "Prompt Engineering", "Workflow Integration"],
      color: "bg-green-100 border-green-300"
    },
    {
      icon: <Cloud className="text-orange-600" size={32} />,
      title: "Cloud Platforms",
      skills: ["Google Cloud Platform", "AWS", "Deployment", "Storage & Compute Services"],
      color: "bg-orange-100 border-orange-300"
    },
    {
      icon: <Wrench className="text-purple-600" size={32} />,
      title: "DevOps & Tools",
      skills: ["Docker", "Jenkins", "Git", "Linux", "Terraform"],
      color: "bg-purple-100 border-purple-300"
    },
    {
      icon: <Globe className="text-teal-600" size={32} />,
      title: "Languages & Web",
      skills: ["Python", "REST APIs", "Webhooks", "JSON", "Data Mapping"],
      color: "bg-teal-100 border-teal-300"
    },
    {
      icon: <Settings className="text-red-600" size={32} />,
      title: "Other",
      skills: ["CI/CD Pipelines", "API Integration", "Testing", "Documentation"],
      color: "bg-red-100 border-red-300"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-30 floating-slow"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-orange-200 rounded-2xl opacity-40 floating-fast"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for AI automation, cloud infrastructure, and DevOps excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} p-6 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 clay-card`}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proficiency Levels</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "N8n Automation", level: 90, color: "bg-blue-500" },
              { skill: "Cloud Platforms", level: 85, color: "bg-orange-500" },
              { skill: "DevOps Tools", level: 80, color: "bg-purple-500" },
              { skill: "AI/LLM APIs", level: 88, color: "bg-green-500" }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{item.skill}</span>
                  <span className="text-gray-600 text-sm">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out skill-bar`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;