import React from 'react';

interface HeroButtonsProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({
  primaryButtonText = "Booking Consultation",
  secondaryButtonText = "Join Our Team",
  onPrimaryClick,
  onSecondaryClick,
  className = ""
}) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <button
        className="cursor-pointer bg-[#008080] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary-red/30"
        onClick={onPrimaryClick}
      >
        {primaryButtonText}
      </button>
      <button
        className="cursor-pointer bg-white/80 backdrop-blur-xs border-2 border-secondary-black text-secondary-black hover:bg-secondary-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
        onClick={onSecondaryClick}
      >
        {secondaryButtonText}
      </button>
    </div>
  );
};

export default HeroButtons;
