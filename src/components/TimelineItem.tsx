import React, { useState } from 'react';
import { Phone, Network, Tv, Globe, Wifi, Radio, Building, Users } from 'lucide-react';

const iconMap = {
  Phone,
  Network,
  Tv,
  Globe,
  Wifi,
  Radio,
  Building,
  Users
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  category: string;
  icon: keyof typeof iconMap;
  isLeft?: boolean;
  isLast?: boolean;
}

export default function TimelineItem({ 
  year, 
  title, 
  description, 
  category,
  icon,
  isLeft = false, 
  isLast = false 
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[icon];

  return (
    <div className="relative flex items-center min-h-[120px]">
      {/* Icon overlapping the timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
        <div className={`
          w-12 h-12 rounded-full
          bg-gradient-to-r from-[#0060AE] to-[#FF0000]
          transition-all duration-300 ease-in-out
          hover:scale-110 hover:shadow-lg
          ${isExpanded ? 'scale-110 shadow-lg' : ''}
        `}>
          <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#0060AE]" />
          </div>
        </div>
      </div>

      {/* Content cards */}
      <div className="w-full flex justify-center items-center">
        {/* Left spacer or content */}
        <div className={`w-[calc(50%-1.5rem)] ${!isLeft ? 'pr-6' : ''}`}>
          {isLeft && (
            <div 
              className={`
                ml-auto mr-6
                p-6 rounded-lg bg-white
                shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                transition-all duration-300 ease-in-out
                hover:shadow-lg cursor-pointer hover:scale-105
                border border-gray-100 hover:border-[#0060AE]
                ${isExpanded ? 'shadow-lg border-[#0060AE] scale-105' : ''}
                max-w-md
              `}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex justify-end mb-2">
                <span className="px-2 py-1 text-xs rounded-full bg-[#0060AE]/10 text-[#0060AE] font-['Trebuchet_MS']">
                  {category}
                </span>
              </div>
              <h3 className="text-[#0F2B71] font-bold text-xl mb-2 text-right font-['Trebuchet_MS']">{year}</h3>
              <h4 className="text-[#0060AE] font-semibold mb-2 text-right font-['Trebuchet_MS']">{title}</h4>
              <p className={`
                text-gray-600 text-right font-['Trebuchet_MS']
                transition-all duration-300 ease-in-out
                ${isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}
              `}>
                {description}
              </p>
            </div>
          )}
        </div>

        {/* Timeline spacer */}
        <div className="w-12 flex-shrink-0" />

        {/* Right spacer or content */}
        <div className={`w-[calc(50%-1.5rem)] ${isLeft ? 'pl-6' : ''}`}>
          {!isLeft && (
            <div 
              className={`
                ml-6
                p-6 rounded-lg bg-white
                shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                transition-all duration-300 ease-in-out
                hover:shadow-lg cursor-pointer hover:scale-105
                border border-gray-100 hover:border-[#0060AE]
                ${isExpanded ? 'shadow-lg border-[#0060AE] scale-105' : ''}
                max-w-md
              `}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex justify-start mb-2">
                <span className="px-2 py-1 text-xs rounded-full bg-[#0060AE]/10 text-[#0060AE] font-['Trebuchet_MS']">
                  {category}
                </span>
              </div>
              <h3 className="text-[#0F2B71] font-bold text-xl mb-2 font-['Trebuchet_MS']">{year}</h3>
              <h4 className="text-[#0060AE] font-semibold mb-2 font-['Trebuchet_MS']">{title}</h4>
              <p className={`
                text-gray-600 font-['Trebuchet_MS']
                transition-all duration-300 ease-in-out
                ${isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}
              `}>
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}