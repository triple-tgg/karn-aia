import clsx from 'clsx';
import React from 'react';

interface Value {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface CoreValuesSectionProps {
  title?: string;
  subtitle?: string;
  values?: Value[];
  className?: string;
}

const iconComponents = {
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  building: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  ),
  book: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  )
};

const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({
  title = "วัฒนธรรมองค์กรของเรา",
  subtitle = "Core Values",
  values = [],
  className = ""
}) => {
  return (
    <section className={`py-20 lg:pb-50 lg:py-30  bg-white ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#C8AE70] mb-4">{title}</h2>
          <p className="text-xl text-[#36454F]">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            // Map color names to actual CSS classes

            return (
              <div key={index} className={clsx("bg-white p-8 rounded-2xl shadow-lg text-center card-hover border-2", `border-[#C8AE70]`)}>
                <div className={clsx(`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`, `bg-[${value.color}]`)}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {iconComponents[value.icon as keyof typeof iconComponents]}
                  </svg>
                </div>
                <h3 className={clsx("text-2xl font-bold mb-4", `text-[${value.color}]`)}>{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
