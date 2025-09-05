"use client";

import React from 'react';
import {
  Navigation,
  HeroSection,
  AboutSection,
  CoreValuesSection,
  ServicesSection,
  CareersSection,
  Footer
} from '@/components/theme/aia';
import { usePageEffects } from '@/hooks/usePageEffects';
import pageData from '@/data/pageData.json';

export default function Page() {
  usePageEffects();

  const handleBookingClick = () => {
    console.log('Booking consultation clicked');
    // Add booking logic here
  };

  const handleJoinClick = () => {
    console.log('Join team clicked');
    // Add join team logic here
  };

  return (
    <>
      <Navigation
        brand={pageData.navigation.brand}
        links={pageData.navigation.links}
      />

      <HeroSection
        mainTitle={pageData.hero.mainTitle}
        mainTitleHighlight={pageData.hero.mainTitleHighlight}
        subtitle={pageData.hero.subtitle}
        subtitleHighlight={pageData.hero.subtitleHighlight}
        description={pageData.hero.description}
        primaryButtonText={pageData.hero.primaryButtonText}
        secondaryButtonText={pageData.hero.secondaryButtonText}
        onBookingClick={handleBookingClick}
        onJoinClick={handleJoinClick}
      />

      <AboutSection
        title={pageData.about.title}
        quote={pageData.about.quote}
        paragraphs={pageData.about.paragraphs}
        highlightQuote={pageData.about.highlightQuote}
        author={pageData.about.author}
        imgSrc={pageData.about.imgSrc}
      />

      <CoreValuesSection
        title={pageData.coreValues.title}
        subtitle={pageData.coreValues.subtitle}
        values={pageData.coreValues.values}
      />

      <ServicesSection
        title={pageData.services.title}
        subtitle={pageData.services.subtitle}
        serviceList={pageData.services.serviceList}
      />

      <CareersSection
        title={pageData.careers.title}
        keywords={pageData.careers.keywords}
        whyAia={pageData.careers.whyAia}
        positions={pageData.careers.positions}
        callToAction={pageData.careers.callToAction}
      />

      <Footer
        brand={pageData.footer.brand}
        description={pageData.footer.description}
        tagline={pageData.footer.tagline}
        socialLinks={pageData.footer.socialLinks}
        quickLinks={pageData.footer.quickLinks}
        serviceLinks={pageData.footer.serviceLinks}
        legalLinks={pageData.footer.legalLinks}
      />
    </>
  );
}
