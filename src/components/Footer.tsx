import React from 'react';
import { Heart, Code, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/theyashsisodiya',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/theyashsisodiya',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Email',
      href: 'mailto:theyashsisodiya@gmail.com',
      icon: <Mail size={20} />
    },
    {
      name: 'Phone',
      href: 'tel:+917389022061',
      icon: <Phone size={20} />
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id.substring(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full floating-slow"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-orange-500/10 rounded-2xl clay-element-1"></div>
      
      <div className="container mx-auto px-6 pt-16 pb-8 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Yashraj Singh Sisodiya
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI Automation Engineer passionate about DevOps, Cloud Technologies, 
              and building innovative solutions that make a difference.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Code size={16} />
              <span className="text-sm">Building the future, one automation at a time</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Summary */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Specializations</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">• AI Automation & N8n</li>
              <li className="text-gray-400 text-sm">• Cloud Platforms (GCP, AWS)</li>
              <li className="text-gray-400 text-sm">• DevOps & CI/CD</li>
              <li className="text-gray-400 text-sm">• LLM API Integration</li>
              <li className="text-gray-400 text-sm">• Technical Leadership</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm">
                <strong>Email:</strong> theyashsisodiya@gmail.com
              </div>
              <div className="text-gray-400 text-sm">
                <strong>Phone:</strong> +91-7389022061
              </div>
              <div className="text-gray-400 text-sm">
                <strong>Location:</strong> Indore, India
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-400">
              Let's connect and build something amazing together!
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Yashraj Singh Sisodiya. Made with</span>
              <Heart className="text-red-500 animate-pulse" size={16} />
              <span>and lots of</span>
              <Code className="text-blue-400" size={16} />
            </div>
            
            <div className="text-gray-500">
              Crafted with React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;