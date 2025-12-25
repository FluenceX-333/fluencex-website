
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const iconSize = size === 'sm' ? 24 : size === 'md' ? 36 : 64;
  const textSize = size === 'sm' ? 'text-xl' : size === 'md' ? 'text-3xl' : 'text-5xl';
  const subTextSize = size === 'sm' ? 'text-[7px]' : size === 'md' ? 'text-[9px]' : 'text-[11px]';

  return (
    <div className={`flex flex-col items-center ${className} no-select cursor-pointer`}>
      
      {/* Brand Text */}
      <div className="flex flex-col items-center leading-none">
        <h1 className={`${textSize} font-outfit font-black tracking-tighter text-blue-500 flex items-end relative`}>
          Fluence
          <span className="relative">
            X
            {/* The signature bar under the X from the image */}
            <span className="absolute -bottom-1 left-0 w-full h-[3px] md:h-[4px] bg-blue-500 rounded-full"></span>
          </span>
        </h1>
        
      </div>
    </div>
  );
};

export default Logo;
