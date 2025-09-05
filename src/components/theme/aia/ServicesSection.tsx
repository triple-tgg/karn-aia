import React from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  serviceList?: Service[];
  className?: string;
}

const iconComponents = {
  calculator: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  ),
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  ),
  "trending-up": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  ),
  user: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  ),
  "book-open": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  ),
  gift: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
  )
};

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "บริการของที่ปรึกษาการเงิน",
  subtitle = "Financial Advisory Services",
  serviceList = [],
  className = ""
}) => {
  return (
    <section id="services" className={`py-20 bg-secondary-black ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl text-black card-hover">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {iconComponents[service.icon as keyof typeof iconComponents]}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm opacity-90">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
