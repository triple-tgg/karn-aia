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
    <section id="about" className={`pb-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#C8AE70] mb-4 ">About Us</h2>
        </div> */}
        <div className="-mt-20 flex flex-col md:flex-row bg-[#FFFFFF] rounded-3xl  overflow-hidden shadow-2xl border border-[#C8AE70]">
          {/* Left: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center gap-6 p-10 md:p-14 lg:p-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-2 tracking-tight" style={{ color: '#36454f', letterSpacing: '-2px' }}>{title}</h2>
            {quote && (
              <p className="text-2xl font-semibold mb-4" style={{ color: '#C8AE70' }}>&ldquo;{quote}&rdquo;</p>
            )}
            <div className="space-y-4 mb-2">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg md:text-xl leading-relaxed" style={{ color: '#36454F' }}>{paragraph}</p>
              ))}
            </div>

          </div>
          {/* Right: Image */}
          <div className="md:w-1/2 w-full relative flex items-center justify-center bg-[#C8AE70] flex-col py-4 pb-6">
            {imgSrc && (
              <div className="flex items-center justify-center w-full h-full p-8">
                <Image
                  src={imgSrc}
                  alt={title}
                  width={400}
                  height={400}
                  className="object-cover rounded-2xl shadow-2xl border-4 border-[#FFFFFF]"
                  priority
                />
              </div>
            )}
            {highlightQuote && (
              <div className="p-6 rounded-xl text-center mb-4 shadow-lg" style={{ background: '#36454f' }}>
                <p className="text-xl font-semibold" style={{ color: '#FFFFFF' }}>&ldquo;{highlightQuote}&rdquo;</p>
                {author && (
                  <p className="mt-2 text-lg font-medium" style={{ color: '#C8AE70' }}>- {author}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
