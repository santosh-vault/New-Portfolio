import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 69, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 69, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Floating tech particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <div 
              className="w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Circuit board lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px opacity-60"
            style={{
              left: '0',
              right: '0',
              top: `${10 + i * 12}%`,
              animation: `circuitFlow ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute bg-gradient-to-b from-transparent via-cyan-500 to-transparent w-px opacity-60"
            style={{
              top: '0',
              bottom: '0',
              left: `${15 + i * 15}%`,
              animation: `circuitFlowVertical ${2.5 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Central holographic loader */}
      <div className="relative">
        {/* Outer hexagonal ring */}
        <div className="relative w-40 h-40">
          <div 
            className="absolute inset-0 border-2 border-cyan-400 opacity-80"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              animation: 'hexRotate 4s linear infinite',
              filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.6))',
            }}
          />
        </div>

        {/* Middle rotating tech ring */}
        <div className="absolute inset-4 w-32 h-32">
          <div 
            className="w-full h-full border-2 border-purple-500 rounded-full opacity-70 relative"
            style={{
              animation: 'techSpin 3s linear infinite reverse',
              filter: 'drop-shadow(0 0 15px rgba(139, 69, 255, 0.6))',
            }}
          >
            {/* Tech nodes on the ring */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-purple-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateX(60px) translateY(-6px)`,
                  boxShadow: '0 0 10px rgba(139, 69, 255, 0.8)',
                  animation: `nodePulse ${1 + i * 0.1}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Inner core with data streams */}
        <div className="absolute inset-8 w-24 h-24 flex items-center justify-center">
          <div 
            className="w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative overflow-hidden"
            style={{
              animation: 'corePulse 2s ease-in-out infinite',
              filter: 'drop-shadow(0 0 25px rgba(34, 211, 238, 0.8))',
            }}
          >
            {/* Data stream lines */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white h-px opacity-80"
                style={{
                  left: '10%',
                  right: '10%',
                  top: `${20 + i * 10}%`,
                  animation: `dataStream ${1.5 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Orbiting satellites */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-300 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
              transform: `rotate(${i * 90}deg) translateX(100px) translateY(-4px)`,
              animation: `satelliteOrbit ${6 + i * 0.5}s linear infinite`,
              boxShadow: '0 0 8px rgba(34, 211, 238, 0.9)',
            }}
          />
        ))}
      </div>

      {/* Holographic progress bar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80">
        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-300 ease-out"
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)',
            }}
          />
          {/* Progress glow effect */}
          <div 
            className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-full"
            style={{
              left: `${Math.max(0, progress - 8)}%`,
              animation: progress > 0 ? 'progressGlow 1s ease-in-out infinite' : 'none',
            }}
          />
        </div>
        {/* Progress indicators */}
        <div className="flex justify-between mt-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                progress > i * 20 
                  ? 'bg-cyan-400 shadow-lg' 
                  : 'bg-gray-600'
              }`}
              style={{
                boxShadow: progress > i * 20 ? '0 0 10px rgba(34, 211, 238, 0.8)' : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner tech elements */}
      <div className="absolute top-8 left-8">
        <div className="relative w-16 h-16">
          <div 
            className="absolute inset-0 border-l-2 border-t-2 border-cyan-400 opacity-60"
            style={{ animation: 'cornerGlow 3s ease-in-out infinite' }}
          />
          <div 
            className="absolute top-2 left-2 w-3 h-3 bg-cyan-400 rounded-full"
            style={{ 
              animation: 'cornerPulse 2s ease-in-out infinite',
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
            }}
          />
        </div>
      </div>

      <div className="absolute top-8 right-8">
        <div className="relative w-16 h-16">
          <div 
            className="absolute inset-0 border-r-2 border-t-2 border-purple-400 opacity-60"
            style={{ animation: 'cornerGlow 3s ease-in-out infinite 0.5s' }}
          />
          <div 
            className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full"
            style={{ 
              animation: 'cornerPulse 2s ease-in-out infinite 0.5s',
              boxShadow: '0 0 10px rgba(139, 69, 255, 0.8)',
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-8">
        <div className="relative w-16 h-16">
          <div 
            className="absolute inset-0 border-l-2 border-b-2 border-cyan-400 opacity-60"
            style={{ animation: 'cornerGlow 3s ease-in-out infinite 1s' }}
          />
          <div 
            className="absolute bottom-2 left-2 w-3 h-3 bg-cyan-400 rounded-full"
            style={{ 
              animation: 'cornerPulse 2s ease-in-out infinite 1s',
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-8 right-8">
        <div className="relative w-16 h-16">
          <div 
            className="absolute inset-0 border-r-2 border-b-2 border-purple-400 opacity-60"
            style={{ animation: 'cornerGlow 3s ease-in-out infinite 1.5s' }}
          />
          <div 
            className="absolute bottom-2 right-2 w-3 h-3 bg-purple-400 rounded-full"
            style={{ 
              animation: 'cornerPulse 2s ease-in-out infinite 1.5s',
              boxShadow: '0 0 10px rgba(139, 69, 255, 0.8)',
            }}
          />
        </div>
      </div>

      {/* Scanning lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.1) 50%, transparent 100%)',
          animation: 'scanLine 4s ease-in-out infinite',
        }}
      />

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes circuitFlow {
          0%, 100% { opacity: 0.3; transform: scaleX(0); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        
        @keyframes circuitFlowVertical {
          0%, 100% { opacity: 0.3; transform: scaleY(0); }
          50% { opacity: 1; transform: scaleY(1); }
        }
        
        @keyframes hexRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes techSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes nodePulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes corePulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        @keyframes dataStream {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes satelliteOrbit {
          0% { transform: rotate(0deg) translateX(100px) translateY(-4px); }
          100% { transform: rotate(360deg) translateX(100px) translateY(-4px); }
        }
        
        @keyframes progressGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes cornerGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes cornerPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        
        @keyframes scanLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;