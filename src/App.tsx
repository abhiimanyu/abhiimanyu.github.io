import React, { useState, useEffect } from 'react';
import { Code, Rocket, User, Mail, Calendar, ArrowRight } from 'lucide-react';

function App() {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const fullName = 'Abhimanyu Tomar';

  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullName.length) {
        setDisplayText(fullName.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-gradient-x"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-teal-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-pink-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-indigo-400/30 rounded-full animate-float-delayed"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-400/20 rounded-full animate-pulse-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Welcome Badge */}
          <div className={`inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <User className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-white/90 font-medium">Welcome to my digital space</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-6xl md:text-8xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Hello, I'm
          </h1>

          {/* Animated Name */}
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 rounded-full mx-auto max-w-md transform scale-x-0 animate-scale-x"></div>
          </div>

          {/* Description */}
          <p className={`text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Creative Developer & Digital Architect
          </p>

          {/* Under Construction Message */}
          <div className={`bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-dashed border-orange-400/50 max-w-2xl mx-auto mb-8 transform transition-all duration-1000 delay-700 hover:border-orange-400/70 hover:bg-gradient-to-r hover:from-orange-500/30 hover:via-yellow-500/30 hover:to-orange-500/30 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-3">
                <div className="w-4 h-4 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-4 h-4 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text mb-4">
              🚧 This website is under construction 🚧
            </h2>
            <p className="text-white/80 text-lg mb-4">
              🎨 Crafting digital experiences with passion and precision
            </p>
            <p className="text-white/60 text-sm">
              ⚡ Something extraordinary is brewing behind the scenes ⚡
            </p>
          </div>

          {/* Construction Card */}
          <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto mb-12 transform transition-all duration-1000 delay-1000 hover:bg-white/15 hover:border-white/30 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-4">Development Progress</h3>
            <p className="text-white/70 mb-6">
              I'm crafting something amazing behind the scenes. This space will soon showcase my work, thoughts, and creative endeavors. 
              Great things take time, and I'm putting in the effort to make it worth the wait.
            </p>
            
            {/* Progress Indicators */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Design</span>
                <span className="text-green-400">90%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full w-[90%] animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Development</span>
                <span className="text-yellow-400">75%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-[75%] animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Content</span>
                <span className="text-blue-400">60%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-[60%] animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Get Notified
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:scale-105 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Coming Soon
              <Rocket className="w-5 h-5 ml-2 transition-transform group-hover:rotate-12" />
            </button>
          </div>

          {/* Footer */}
          <div className={`mt-16 text-white/40 text-sm transform transition-all duration-1000 delay-1600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p>© 2025 Abhimanyu Tomar. Something great is on the horizon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;