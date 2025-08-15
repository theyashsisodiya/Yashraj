import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
      duration: "2021 - June 2025",
      status: "Graduated",
      icon: <GraduationCap className="text-blue-600" size={32} />,
      color: "from-blue-500 to-purple-600"
    },
    {
      degree: "Higher Secondary",
      field: "Science",
      institution: "Ascent Public High School",
      duration: "2021",
      status: "Completed",
      icon: <BookOpen className="text-green-600" size={32} />,
      color: "from-green-500 to-teal-600"
    },
    {
      degree: "Secondary School",
      field: "All Subjects",
      institution: "Ascent Public High School",
      duration: "2019",
      status: "Completed",
      icon: <Award className="text-orange-600" size={32} />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const academicHighlights = [
    {
      title: "Technical Leadership",
      description: "Led multiple technical clubs and organized tech events",
      icon: <Users className="text-blue-600" size={24} />
    },
    {
      title: "Project Excellence",
      description: "Developed real-world applications and automation systems",
      icon: <Award className="text-green-600" size={24} />
    },
    {
      title: "Industry Experience",
      description: "Completed internships at leading tech companies",
      icon: <BookOpen className="text-orange-600" size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/30 rounded-2xl floating-element"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-purple-300/40 rounded-full clay-element-3"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Educational <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong foundation in computer science and engineering excellence
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-blue-200"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full border-4 border-blue-200 flex items-center justify-center shadow-lg relative z-10">
                  {edu.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 clay-card">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{edu.field}</p>
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={16} />
                        {edu.institution}
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        {edu.duration}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${edu.color}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Academic Highlights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicHighlights.map((highlight, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900">{highlight.title}</h4>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Learning Philosophy</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              "Education is not just about acquiring knowledge, but about developing the ability to think critically, 
              solve complex problems, and continuously adapt to emerging technologies. My journey has been focused 
              on building a strong foundation while staying current with industry trends."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;