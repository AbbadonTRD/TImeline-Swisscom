import React from 'react';

export default function TimelineConnector() {
  return (
    <div className="absolute left-1/2 transform -translate-x-[2px] h-full">
      {/* Start date */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-[#0060AE]/20 font-['Trebuchet_MS']">
        1852
      </div>
      
      {/* Timeline line */}
      <div className="w-1 h-full bg-[#0060AE]" />
      
      {/* End date */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-[#0060AE]/20 font-['Trebuchet_MS']">
        2024
      </div>
    </div>
  );
}