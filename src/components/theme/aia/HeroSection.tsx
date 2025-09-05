import React from 'react';
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroButtons from './HeroButtons';
import HeroFloatingElements from './HeroFloatingElements';

interface HeroSectionProps {
  // Title props
  mainTitle?: string;
  mainTitleHighlight?: string;
  subtitle?: string;
  subtitleHighlight?: string;

  // Description props
  description?: string;

  // Button props
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onBookingClick?: () => void;
  onJoinClick?: () => void;

  // Layout props
  backgroundClassName?: string;
  containerClassName?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mainTitle,
  mainTitleHighlight,
  subtitle,
  subtitleHighlight,
  description,
  primaryButtonText,
  secondaryButtonText,
  onBookingClick,
  onJoinClick,
  backgroundClassName = "min-h-[calc(100vh-64px)] bg-hero-pattern bg-hero-cover relative overflow-hidden bg-gradient-to-br from-gray-900 to-secondary-black",
  containerClassName = "container mx-auto px-6 pt-32 pb-20"
}) => (
  <section className={backgroundClassName}>
    <div className={containerClassName}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-black space-y-6">
          <HeroTitle
            mainTitle={mainTitle}
            mainTitleHighlight={mainTitleHighlight}
            subtitle={subtitle}
            subtitleHighlight={subtitleHighlight}
          />

          <HeroDescription description={description} />

          <HeroButtons
            primaryButtonText={primaryButtonText}
            secondaryButtonText={secondaryButtonText}
            onPrimaryClick={onBookingClick}
            onSecondaryClick={onJoinClick}
          />
        </div>

        <HeroFloatingElements />
      </div>
    </div>
  </section>
);

export default HeroSection;
