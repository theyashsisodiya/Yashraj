import React from 'react';
import { Calendar, MapPin, ExternalLink, Building, Code, Cloud, Wrench } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AWS Cloud & DevOps Intern",
      company: "DesiredSoft Internet & Software Solution Pvt. Ltd.",
      duration: "Feb 2025 – May 2025",
      location: "Remote",
      icon: <Cloud className="text-blue-600" size={24} />,
      description: [
        "Assisted in building and optimizing CI/CD pipelines for application deployment on AWS",
        "Troubleshooting Docker container issues, improving build stability and reducing deployment errors",
        "Collaborated with the DevOps team to manage AWS services and ensure smooth workflow integration"
      ],
      skills: ["AWS", "CI/CD", "Docker", "DevOps", "Pipeline Optimization"]
    }
  ];

  const achievements = [
    {
      metric: "50%",
      description: "Reduction in deployment time through CI/CD optimization",
      icon: <Code className="text-green-600" size={20} />
    },
    {
      metric: "25%",
      description: "Improvement in system reliability through containerization",
      icon: <Cloud className="text-blue-600" size={20} />
    },
    {
      metric: "100%",
      description: "Successful completion of real-world cloud projects",
      icon: <Wrench className="text-orange-600" size={20} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-blue-300 rounded-xl opacity-40 floating-element"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-orange-300 rounded-2xl opacity-30 clay-element-1"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world experience in cloud infrastructure, DevOps practices, and automation
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 w-0.5 h-full bg-blue-200"></div>
              
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Timeline Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full border-4 border-blue-200 flex items-center justify-center shadow-lg relative z-10">
                  {exp.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 clay-card">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                        <Building size={18} />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold">{achievement.metric}</div>
                <p className="text-blue-100">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;