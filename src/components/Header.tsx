import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600 hover:text-orange-500 transition-colors cursor-pointer">
              YSS
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Leadership', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all flex items-center gap-2">
                <Download size={16} />
                <a target="_blank" href='https://drive.google.com/file/d/1xjt4T0hLR_b3ceeEWhqs5Ws9eCEG4McB/view?usp=drive_link'> Resume </a>

              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Leadership', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  {item}
                </button>
              ))}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all flex items-center gap-2">
                <Download size={16} />
                Resume
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Contact Bar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4 hidden lg:flex flex-col">
        <a href="mailto:theyashsisodiya@gmail.com" className="floating-element bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all">
          <Mail size={20} />
        </a>
        <a href="tel:+917389022061" className="floating-element bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-all">
          <Phone size={20} />
        </a>
        <a href="https://github.com/theyashsisodiya" target="_blank" rel="noopener noreferrer" className="floating-element bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-all">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/theyashsisodiya" target="_blank" rel="noopener noreferrer" className="floating-element bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-all">
          <Linkedin size={20} />
        </a>
      </div>
    </>
  );
};

export default Header;