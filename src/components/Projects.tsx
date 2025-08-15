import React from 'react';
import { ExternalLink, Github, Calendar, Zap, Bot, Code, Server, Mail } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI News & Job Automation",
      subtitle: "N8n Automation Workflow",
      description: "Automated daily collection of latest AI news (past 24h) and India-based job postings for 'DevOps Intern' and 'AI Automation Intern.' Complete workflow with Cron trigger, Perplexity AI API integration, HTML email formatting with CSS, and automated delivery.",
      icon: <Bot className="text-blue-600" size={32} />,
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["N8n", "Perplexity AI API", "HTML/CSS", "Email Services", "Cron Jobs"],
      features: [
        "Cron trigger for daily automation",
        "Perplexity AI API integration",
        "HTML email with CSS formatting",
        "Automated job posting collection",
        "Daily AI news aggregation"
      ],
      type: "Personal Project",
      status: "Active",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "CI/CD & Deployment Pipeline",
      subtitle: "To-Do List & 2048 Game",
      description: "Built comprehensive CI/CD pipeline using Jenkins, Docker, GitHub, and AWS for Node.js applications. Implemented automated build, test, and deployment steps with GitHub webhooks, achieving 50% reduction in deployment time and 25% improvement in system reliability.",
      icon: <Server className="text-orange-600" size={32} />,
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Jenkins", "Docker", "GitHub", "AWS", "Node.js", "CI/CD"],
      features: [
        "Automated build and test processes",
        "GitHub webhooks integration",
        "Docker containerization",
        "AWS deployment automation",
        "Performance monitoring"
      ],
      type: "Infrastructure Project",
      status: "Completed",
      color: "from-orange-500 to-red-600"
    }
  ];

  const metrics = [
    {
      value: "50%",
      label: "Deployment Time Reduction",
      icon: <Zap className="text-green-600" size={24} />
    },
    {
      value: "25%",
      label: "System Reliability Improvement",
      icon: <Server className="text-blue-600" size={24} />
    },
    {
      value: "100%",
      label: "Automation Success Rate",
      icon: <Bot className="text-purple-600" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full floating-slow"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-orange-500/20 rounded-2xl clay-element-2"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world applications demonstrating AI automation, DevOps excellence, and cloud infrastructure
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 mb-16">
          {projects.map((project, index) => (
            <div key={index} className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-12`}>
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute top-8 right-8 flex gap-2">
                      <div className="bg-gray-900/80 backdrop-blur-sm rounded-full p-2">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                    <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <h4 className="text-xl text-blue-400 font-semibold">{project.subtitle}</h4>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-white">Key Features:</h5>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-white">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105">
                    <ExternalLink size={18} />
                    View Details
                  </button>
                  <a 
                    href={index === 0 ? "https://github.com/theyashsisodiya/latest-Al-new-and-job-update" : "https://github.com/theyashsisodiya/2048-Game"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-600 text-gray-300 px-6 py-3 rounded-full hover:bg-gray-700 transition-all"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Metrics */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-center mb-8">Project Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700/50 rounded-full border border-gray-600">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                  {metric.value}
                </div>
                <p className="text-gray-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;