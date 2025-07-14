import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 3000); // 3 second loading animation

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-purple-800 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random()}s`,
            }}
          >
            <div 
              className="w-4 h-4 bg-purple-500 transform rotate-45 opacity-60"
              style={{
                boxShadow: '0 0 20px rgba(128, 0, 128, 0.8)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Central loading animation */}
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="w-32 h-32 border-4 border-purple-300 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Middle rotating ring - opposite direction */}
        <div className="absolute inset-2 w-24 h-24 border-4 border-purple-500 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        
        {/* Inner pulsing core */}
        <div className="absolute inset-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full animate-ping"></div>
        </div>

        {/* Orbiting dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-purple-400 rounded-full animate-spin"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
              transform: `rotate(${i * 60}deg) translateX(60px) translateY(-6px)`,
              animationDuration: '2s',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Ripple effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-40 h-40 border border-purple-400 rounded-full animate-ping opacity-20"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>

      {/* Corner accent animations */}
      <div className="absolute top-10 left-10">
        <div className="w-6 h-6 bg-purple-500 transform rotate-45 animate-pulse" style={{ boxShadow: '0 0 15px rgba(128, 0, 128, 0.8)' }}></div>
      </div>
      <div className="absolute top-10 right-10">
        <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="absolute bottom-10 left-10">
        <div className="w-5 h-5 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute bottom-10 right-10">
        <div className="w-6 h-6 bg-purple-500 transform rotate-45 animate-bounce" style={{ animationDelay: '1.5s', boxShadow: '0 0 15px rgba(128, 0, 128, 0.8)' }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;