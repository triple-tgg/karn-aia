import React from 'react';

interface HeroTitleProps {
  mainTitle?: string;
  mainTitleHighlight?: string;
  subtitle?: string;
  subtitleHighlight?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  mainTitle = "SMART",
  mainTitleHighlight = "PLANNING",
  subtitle = "SECURE",
  subtitleHighlight = "FUTURE"
}) => {
  return (
    <div className="space-y-4">
      <h1 className="text-6xl md:text-7xl font-bold leading-tight">
        {mainTitle}<br />
        <span className="text-primary-red">{mainTitleHighlight}</span>
      </h1>
      <h2 className="text-4xl text-primary-red md:text-5xl font-bold">
        {subtitle}<br />
        <span className="text-primary-red">{subtitleHighlight}</span>
      </h2>
    </div>
  );
};

export default HeroTitle;
