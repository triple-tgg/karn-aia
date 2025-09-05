import React from 'react';

interface HeroDescriptionProps {
  description?: string;
  className?: string;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({
  description = "Financial Planning | Insurance | Legacy Solutions",
  className = ""
}) => {
  return (
    <p className={`text-xl bg-white/80 backdrop-blur-sm py-1 inline-block pr-4 rounded-full text-black mb-8 ${className}`}>
      {description}
    </p>
  );
};

export default HeroDescription;
