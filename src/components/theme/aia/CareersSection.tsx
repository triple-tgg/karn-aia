import React from 'react';

interface Position {
  title: string;
  color: string;
  description: string;
  qualifications: string[];
}

interface CallToAction {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  contactInfo: string;
  email: string;
}

interface WhyAia {
  title: string;
  description: string[];
}

interface CareersSectionProps {
  title?: string;
  keywords?: string[];
  whyAia?: WhyAia;
  positions?: Position[];
  callToAction?: CallToAction;
  className?: string;
}

const CareersSection: React.FC<CareersSectionProps> = ({
  title = "MERKURIUS | CAREERS",
  keywords = [],
  whyAia,
  positions = [],
  callToAction,
  className = ""
}) => {
  return (
    <section id="careers" className={`py-20 bg-gray-100 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-secondary-black mb-4">{title}</h2>
          <div className="flex justify-center flex-wrap gap-8 text-2xl font-bold text-primary-red">
            {keywords.map((keyword, index) => (
              <span key={index}>{keyword}</span>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {whyAia && (
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                รับสมัครที่ปรึกษาการเงินและตัวแทนประกันชีวิต AIA
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-secondary-black mb-4">{whyAia.title}</h4>
                {whyAia.description.map((desc, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Position Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {positions.map((position, index) => {
              // Map color names to actual CSS classes
              const colorClass = {
                'primary-red': 'bg-primary-red',
                'secondary-black': 'bg-secondary-black', 
                'secondary-purple': 'bg-secondary-purple',
                'accent-yellow': 'bg-accent-yellow'
              }[position.color] || 'bg-red-600';
              
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                  <div className={`${colorClass} text-white px-4 py-2 rounded-lg inline-block mb-4`}>
                    <h4 className="text-xl font-bold">{position.title}</h4>
                  </div>

                  <h5 className="font-semibold text-gray-800 mb-3">Roles and Responsibility</h5>
                  <p className="text-gray-700 mb-4">{position.description}</p>

                  <h5 className="font-semibold text-gray-800 mb-3">Qualifications</h5>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    {position.qualifications.map((qualification, qIndex) => (
                      <li key={qIndex}>• {qualification}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          {callToAction && (
            <div className="text-center mt-16">
              <div className="bg-secondary-black p-12 rounded-3xl">
                <h3 className="text-4xl font-bold mb-4 text-white">{callToAction.title}</h3>
                <p className="text-xl mb-2 text-white/90">{callToAction.subtitle}</p>
                <p className="text-lg mb-8 text-white/80">{callToAction.description}</p>
                <button className="bg-primary-red hover:bg-red-600 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all transform hover:scale-105 shadow-lg">
                  {callToAction.buttonText}
                </button>
                <p className="text-sm mt-6 text-white/70">
                  {callToAction.contactInfo}<br />
                  <span className="font-semibold">{callToAction.email}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
