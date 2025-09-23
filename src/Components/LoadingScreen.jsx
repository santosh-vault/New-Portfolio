import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Faster progress animation for 2-second duration
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5; // Increased increment for faster progress
      });
    }, 40); // Reduced interval for smoother animation

    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 2000); // Reduced to 2 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-purple-950 overflow-hidden">
      {/* Animated matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 69, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(34, 211, 238, 0.2) 0%, transparent 50%),
              linear-gradient(rgba(139, 69, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 30px 30px, 30px 30px',
            animation: 'matrixFlow 8s linear infinite'
          }}
        />
      </div>

      {/* Floating energy particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div 
              className={`w-1 h-1 rounded-full ${
                i % 3 === 0 ? 'bg-purple-400' : i % 3 === 1 ? 'bg-cyan-400' : 'bg-pink-400'
              }`}
              style={{
                boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`,
                animation: `particleFloat ${2 + Math.random() * 2}s ease-in-out infinite`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Dynamic energy waves */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-purple-500/20"
            style={{
              animation: `energyWave ${1.5 + i * 0.3}s ease-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Central holographic loader */}
      <div className="relative">
        {/* Outer rotating ring with energy nodes */}
        <div className="relative w-32 h-32">
          <div 
            className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-purple-500 via-cyan-400 to-purple-500"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(139, 69, 255, 0.8), transparent, rgba(34, 211, 238, 0.8), transparent)',
              borderRadius: '50%',
              animation: 'holographicSpin 1.5s linear infinite',
              filter: 'drop-shadow(0 0 20px rgba(139, 69, 255, 0.6))',
            }}
          />
          
          {/* Energy nodes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                background: `linear-gradient(45deg, ${
                  i % 2 === 0 ? '#8b45ff' : '#22d3ee'
                }, ${i % 2 === 0 ? '#22d3ee' : '#8b45ff'})`,
                transform: `rotate(${i * 60}deg) translateX(55px) translateY(-6px)`,
                boxShadow: `0 0 15px ${i % 2 === 0 ? 'rgba(139, 69, 255, 0.8)' : 'rgba(34, 211, 238, 0.8)'}`,
                animation: `nodeOrbit ${1.5}s linear infinite, nodePulse ${0.8 + i * 0.1}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Inner core with quantum effect */}
        <div className="absolute inset-6 w-20 h-20 flex items-center justify-center">
          <div 
            className="w-full h-full rounded-full relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle, rgba(139, 69, 255, 0.9) 0%, rgba(34, 211, 238, 0.9) 50%, rgba(139, 69, 255, 0.9) 100%)',
              animation: 'quantumPulse 1s ease-in-out infinite',
              filter: 'drop-shadow(0 0 30px rgba(139, 69, 255, 0.8))',
            }}
          >
            {/* Quantum data streams */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/80 h-px"
                style={{
                  left: '15%',
                  right: '15%',
                  top: `${15 + i * 8}%`,
                  animation: `quantumStream ${1 + i * 0.1}s ease-in-out infinite`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
            
            {/* Central energy core */}
            <div 
              className="absolute inset-2 rounded-full bg-white/20"
              style={{
                animation: 'coreGlow 0.8s ease-in-out infinite alternate',
              }}
            />
          </div>
        </div>

        {/* Orbiting satellites with trails */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
              animation: `satelliteOrbit ${1.2 + i * 0.2}s linear infinite`,
            }}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                i === 0 ? 'bg-purple-400' : i === 1 ? 'bg-cyan-400' : 'bg-pink-400'
              }`}
              style={{
                transform: `translateX(${80 + i * 15}px) translateY(-4px)`,
                boxShadow: `0 0 12px currentColor`,
                filter: `drop-shadow(0 0 8px currentColor)`,
              }}
            />
            {/* Satellite trail */}
            <div
              className={`absolute w-8 h-px ${
                i === 0 ? 'bg-purple-400/50' : i === 1 ? 'bg-cyan-400/50' : 'bg-pink-400/50'
              }`}
              style={{
                transform: `translateX(${72 + i * 15}px) translateY(-4px)`,
                animation: 'trailFade 0.5s ease-out infinite',
              }}
            />
          </div>
        ))}
      </div>

      {/* Sleek progress indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-72">
        <div className="relative h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="absolute left-0 top-0 h-full rounded-full transition-all duration-100 ease-out"
            style={{ 
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #8b45ff 0%, #22d3ee 50%, #ec4899 100%)',
              boxShadow: '0 0 20px rgba(139, 69, 255, 0.8), 0 0 40px rgba(34, 211, 238, 0.4)',
            }}
          />
          {/* Progress shimmer */}
          <div 
            className="absolute top-0 h-full w-16 opacity-75 rounded-full"
            style={{
              left: `${Math.max(0, progress - 16)}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
              animation: progress > 0 ? 'progressShimmer 0.8s ease-in-out infinite' : 'none',
            }}
          />
        </div>
        
        {/* Progress dots */}
        <div className="flex justify-between mt-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                progress > i * 25 
                  ? 'bg-gradient-to-r from-purple-400 to-cyan-400 shadow-lg' 
                  : 'bg-gray-700'
              }`}
              style={{
                boxShadow: progress > i * 25 ? '0 0 12px rgba(139, 69, 255, 0.8)' : 'none',
                animation: progress > i * 25 ? 'dotPulse 1s ease-in-out infinite' : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner tech elements with enhanced glow */}
      {[
        { position: 'top-6 left-6', rotation: '0deg', color: 'purple' },
        { position: 'top-6 right-6', rotation: '90deg', color: 'cyan' },
        { position: 'bottom-6 left-6', rotation: '270deg', color: 'cyan' },
        { position: 'bottom-6 right-6', rotation: '180deg', color: 'purple' },
      ].map((corner, i) => (
        <div key={i} className={`absolute ${corner.position}`}>
          <div 
            className="relative w-12 h-12"
            style={{ transform: `rotate(${corner.rotation})` }}
          >
            <div 
              className={`absolute inset-0 border-l-2 border-t-2 ${
                corner.color === 'purple' ? 'border-purple-400' : 'border-cyan-400'
              } opacity-80 rounded-tl-lg`}
              style={{ 
                animation: `cornerGlow ${1.5 + i * 0.2}s ease-in-out infinite`,
                filter: `drop-shadow(0 0 8px ${
                  corner.color === 'purple' ? 'rgba(139, 69, 255, 0.6)' : 'rgba(34, 211, 238, 0.6)'
                })`,
              }}
            />
            <div 
              className={`absolute top-1 left-1 w-2 h-2 ${
                corner.color === 'purple' ? 'bg-purple-400' : 'bg-cyan-400'
              } rounded-full`}
              style={{ 
                animation: `cornerPulse ${1.2 + i * 0.1}s ease-in-out infinite`,
                boxShadow: `0 0 12px ${
                  corner.color === 'purple' ? 'rgba(139, 69, 255, 0.8)' : 'rgba(34, 211, 238, 0.8)'
                }`,
              }}
            />
          </div>
        </div>
      ))}

      {/* Scanning beam effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(139, 69, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(34, 211, 238, 0.1) 55%, transparent 100%)',
          animation: 'scanBeam 2s ease-in-out infinite',
        }}
      />

      <style jsx>{`
        @keyframes matrixFlow {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(30px, 30px) rotate(360deg); }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
        }
        
        @keyframes energyWave {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes holographicSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes nodeOrbit {
          0% { transform: rotate(0deg) translateX(55px) translateY(-6px); }
          100% { transform: rotate(360deg) translateX(55px) translateY(-6px); }
        }
        
        @keyframes nodePulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        
        @keyframes quantumPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        
        @keyframes quantumStream {
          0% { transform: translateX(-100%) scaleX(0); opacity: 0; }
          50% { opacity: 1; transform: scaleX(1); }
          100% { transform: translateX(100%) scaleX(0); opacity: 0; }
        }
        
        @keyframes coreGlow {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes satelliteOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes trailFade {
          0% { opacity: 0.8; transform: scaleX(1); }
          100% { opacity: 0; transform: scaleX(0.3); }
        }
        
        @keyframes progressShimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        @keyframes cornerGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes cornerPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 1; }
        }
        
        @keyframes scanBeam {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;