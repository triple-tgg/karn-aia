import React from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  title?: string;
  quote?: string;
  paragraphs?: string[];
  highlightQuote?: string;
  author?: string;
  className?: string;
  imgSrc?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "Our Vision",
  quote = "",
  paragraphs = [],
  highlightQuote = "",
  author = "",
  className = "",
  imgSrc = ""
}) => {
  return (
    <section id="about" className={`py-20 bg-gray-100 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Left: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center p-10">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-red mb-4">{title}</h2>
            {quote && (
              <p className="text-2xl font-semibold mb-6 text-secondary-black">&ldquo;{quote}&rdquo;</p>
            )}
            <div className="space-y-4 mb-6 mt-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-base md:text-lg">{paragraph}</p>
              ))}
            </div>
            {highlightQuote && (
              <div className="bg-secondary-black p-6 rounded-2xl text-center my-6">
                <p className="text-xl font-semibold text-white">&ldquo;{highlightQuote}&rdquo;</p>
                {author && (
                  <p className="mt-2 text-lg opacity-90 text-white/90">- {author}</p>
                )}
              </div>
            )}
          </div>
          {/* Right: Image + Icon Bar */}
          <div className="md:w-1/2 w-full relative flex items-center justify-center bg-gray-200">
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={title}
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
