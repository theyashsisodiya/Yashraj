import { Users, Award, Calendar, MapPin, Target, Lightbulb, Code, Cloud } from 'lucide-react';

const Leadership = () => {
  const roles = [
    {
      title: "Club Head",
      organization: "MLSA Club",
      duration: "Jan 15, 2024 - Present",
      icon: <Cloud className="text-blue-600" size={32} />,
      description: "Organize workshops and events on Microsoft tools & cloud technologies",
      achievements: [
        "Organized 10+ workshops on Microsoft Azure and cloud technologies",
        "Led a team of 15+ members in technical initiatives",
        "Increased club engagement by 300% through innovative events",
        "Established partnerships with local tech companies"
      ],
      color: "from-blue-500 to-cyan-600",
      status: "Current"
    },
    {
      title: "Technical Lead → Club Secretary",
      organization: "Abhyudaya Coding Club",
      duration: "Dec 2023 - May 2025",
      icon: <Code className="text-green-600" size={32} />,
      description: "Led technical projects, hackathons, and mentored juniors",
      achievements: [
        "Developed College NOT App for student notifications",
        "Created Bus Tracking App for campus transportation",
        "Built College Jagat App for campus information",
        "Mentored 50+ junior students in programming"
      ],
      color: "from-green-500 to-emerald-600",
      status: "Completed"
    },
    {
      title: "Cloud Lead",
      organization: "GDSC Club",
      duration: "Jun 2023 - Aug 2024",
      icon: <Users className="text-orange-600" size={32} />,
      description: "Hosted hands-on GCP sessions, delivered Google Cloud & AI talks",
      achievements: [
        "Conducted 20+ hands-on Google Cloud Platform sessions",
        "Delivered technical talks on AI and machine learning",
        "Organized Google Developer events and workshops",
        "Built community of 100+ cloud enthusiasts"
      ],
      color: "from-orange-500 to-red-600",
      status: "Completed"
    }
  ];

  const projects = [
    {
      name: "College NOTE App",
      description: "Student notification system for college announcements",
      impact: "500+ active users"
    },
    {
      name: "Bus Tracking App",
      description: "Real-time campus transportation tracking",
      impact: "80% reduction in wait times"
    },
    {
      name: "College Jagat App",
      description: "Comprehensive campus information platform",
      impact: "90% student adoption rate"
    }
  ];

  const leadershipMetrics = [
    {
      metric: "100+",
      description: "Students Mentored",
      icon: <Users className="text-blue-600" size={24} />
    },
    {
      metric: "10+",
      description: "Events Organized",
      icon: <Target className="text-green-600" size={24} />
    },
    {
      metric: "3",
      description: "Major Apps Developed",
      icon: <Code className="text-orange-600" size={24} />
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-32 right-10 w-40 h-40 bg-blue-200/30 rounded-2xl floating-slow"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-green-200/40 rounded-full clay-element-1"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Leadership & <span className="text-blue-600">Activities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading technical communities, organizing impactful events, and mentoring the next generation of developers
          </p>
        </div>

        {/* Leadership Roles */}
        <div className="space-y-12 mb-16">
          {roles.map((role, index) => (
            <div key={index} className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-12`}>
              {/* Icon Section */}
              <div className="lg:w-1/3 flex justify-center">
                <div className={`relative p-8 bg-gradient-to-br ${role.color} rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                  <div className="text-white text-center space-y-4">
                    {role.icon}
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Award className="text-white" size={32} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-2/3 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${role.color}`}>
                      {role.status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{role.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">{role.organization}</h4>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    {role.duration}
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {role.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-gray-900">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {role.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Showcase */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Projects Delivered</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 clay-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Lightbulb className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{project.name}</h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">{project.description}</p>
                  
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {project.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Impact */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Leadership Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipMetrics.map((metric, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold">{metric.metric}</div>
                <p className="text-blue-100">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;