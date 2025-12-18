import React, { useEffect, useState } from 'react';

export default function BloomingRose() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timings = [
      { delay: 0, stage: 1 },      // Stem grows
      { delay: 2000, stage: 2 },   // Leaves appear
      { delay: 3000, stage: 3 },   // Bud appears
      { delay: 4000, stage: 4 },   // Sepals open
      { delay: 5000, stage: 5 },   // Petals bloom
    ];

    timings.forEach(({ delay, stage: s }) => {
      setTimeout(() => setStage(s), delay);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0000] via-[#2d0000] to-[#1a0000] flex items-end justify-center pb-12 overflow-hidden">
      <div className="relative w-96 h-[600px]">
         <h1 className="text-5xl md:text-6xl lg:text-2xl font-extrabold text-white text-center animate-pulse drop-shadow-lg mb-10">
        🌸 &lt;3 🌸
      </h1>
        
        {/* Glow effect */}
        {stage >= 5 && (
          <div className="absolute left-1/2 top-20 -translate-x-1/2 w-64 h-64 bg-red-600/30 rounded-full blur-3xl animate-pulse" />
        )}

        {/* Stem */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 bg-gradient-to-t from-green-900 via-green-700 to-green-600 rounded-t-full origin-bottom transition-all duration-[3000ms] ease-out"
          style={{
            height: stage >= 1 ? '400px' : '0px'
          }}
        >
          {/* Left Leaf */}
          <div 
            className="absolute left-0 top-48 origin-right transition-all duration-700 ease-out"
            style={{
              opacity: stage >= 2 ? 1 : 0,
              transform: stage >= 2 ? 'translateX(-45px) rotate(-40deg) scale(1)' : 'translateX(0) rotate(0deg) scale(0)',
              transitionDelay: '200ms'
            }}
          >
            <div className="w-12 h-7 bg-gradient-to-r from-green-900 via-green-700 to-green-600 rounded-full shadow-lg" />
          </div>

          {/* Right Leaf */}
          <div 
            className="absolute right-0 top-56 origin-left transition-all duration-700 ease-out"
            style={{
              opacity: stage >= 2 ? 1 : 0,
              transform: stage >= 2 ? 'translateX(45px) rotate(40deg) scale(1)' : 'translateX(0) rotate(0deg) scale(0)',
              transitionDelay: '500ms'
            }}
          >
            <div className="w-12 h-7 bg-gradient-to-l from-green-900 via-green-700 to-green-600 rounded-full shadow-lg absolute top-13 " />
          </div>
        </div>

        {/* Rose Head Container */}
        <div className="absolute left-1/2 -translate-x-1/2 top-16 w-48 h-48">
          
          {/* Sepals (Bud covering) */}
          <div 
            className="absolute left-27 top-30  rotate-[15deg] -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
            style={{
              opacity: stage >= 3 ? 1 : 0,
              transform: `translate(-50%, -50%) scale(${stage >= 3 ? 1 : 0})`
            }}
            
          >
            {[0, 120, 240].map((angle, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 w-8 h-14 bg-gradient-to-b from-green-600 to-green-900 rounded-t-full origin-bottom transition-all duration-1000 shadow-lg"
                style={{
                  transform: stage >= 4 
                    ? `translate(-50%, -50%) rotate(${angle}deg) translateY(-20px) rotate(-60deg)`
                    : `translate(-50%, -50%) rotate(${angle}deg)`,
                  transitionDelay: `${i * 100}ms`
                }}
              />
            ))}
          </div>

          {/* Petals */}
          <div className="absolute inset-0">
            {/* Outer petals - 8 petals */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8;
              const delay = i * 80;
              return (
                <div
                  key={`outer-${i}`}
                  className="absolute left-1/2 top-1/2 w-16 h-20 rounded-full origin-center transition-all duration-700 ease-out"
                  style={{
                    background: 'linear-gradient(135deg, #8b0000 0%, #dc143c 50%, #ff6b6b 100%)',
                    boxShadow: 'inset -4px -4px 12px rgba(0,0,0,0.5), inset 4px 4px 8px rgba(255,100,100,0.3), 0 4px 12px rgba(0,0,0,0.4)',
                    transform: stage >= 5 
                      ? `translate(-50%, -50%) rotate(${angle}deg) translateY(-55px) scale(1)`
                      : `translate(-50%, -50%) rotate(${angle}deg) translateY(0) scale(0)`,
                    transitionDelay: `${delay}ms`,
                    opacity: stage >= 5 ? 1 : 0
                  }}
                />
              );
            })}

            {/* Middle petals - 6 petals */}
            {[...Array(6)].map((_, i) => {
              const angle = (i * 360) / 6 + 30;
              const delay = 600 + i * 80;
              return (
                <div
                  key={`middle-${i}`}
                  className="absolute left-1/2 top-1/2 w-14 h-16 rounded-full origin-center transition-all duration-700 ease-out"
                  style={{
                    background: 'linear-gradient(135deg, #a00000 0%, #e03131 50%, #ff8787 100%)',
                    boxShadow: 'inset -3px -3px 10px rgba(0,0,0,0.5), inset 3px 3px 6px rgba(255,120,120,0.3), 0 3px 10px rgba(0,0,0,0.3)',
                    transform: stage >= 5 
                      ? `translate(-50%, -50%) rotate(${angle}deg) translateY(-38px) scale(1)`
                      : `translate(-50%, -50%) rotate(${angle}deg) translateY(0) scale(0)`,
                    transitionDelay: `${delay}ms`,
                    opacity: stage >= 5 ? 1 : 0
                  }}
                />
              );
            })}

            {/* Inner petals - 5 petals */}
            {[...Array(5)].map((_, i) => {
              const angle = (i * 360) / 5;
              const delay = 1200 + i * 80;
              return (
                <div
                  key={`inner-${i}`}
                  className="absolute left-1/2 top-1/2 w-11 h-13 rounded-full origin-center transition-all duration-600 ease-out"
                  style={{
                    background: 'linear-gradient(135deg, #c92a2a 0%, #ff6b6b 50%, #ffa8a8 100%)',
                    boxShadow: 'inset -2px -2px 8px rgba(0,0,0,0.4), inset 2px 2px 5px rgba(255,150,150,0.4), 0 2px 8px rgba(0,0,0,0.3)',
                    transform: stage >= 5 
                      ? `translate(-50%, -50%) rotate(${angle}deg) translateY(-22px) scale(1)`
                      : `translate(-50%, -50%) rotate(${angle}deg) translateY(0) scale(0)`,
                    transitionDelay: `${delay}ms`,
                    opacity: stage >= 5 ? 1 : 0
                  }}
                />
              );
            })}

            {/* Center */}
            <div 
              className="absolute left-1/2 top-1/2 w-9 h-10 rounded-full transition-all duration-600 ease-out"
              style={{
                background: 'radial-gradient(ellipse at 30% 30%, #ff6b7a 0%, #dc143c 40%, #8b0000 100%)',
                boxShadow: 'inset 0 -8px 15px rgba(0,0,0,0.7), 0 0 20px rgba(220,20,60,0.5)',
                transform: stage >= 5 
                  ? 'translate(-50%, -50%) scale(1)'
                  : 'translate(-50%, -50%) scale(0)',
                transitionDelay: '1600ms',
                opacity: stage >= 5 ? 1 : 0
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}