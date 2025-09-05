import React from 'react';

interface NavigationProps {
  brand?: string;
  links?: Array<{
    href: string;
    text: string;
  }>;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  brand = "MERKURIUS",
  links = [],
  className = ""
}) => {
  return (
    <nav className={`sticky top-0 w-full z-50 bg-white/10 backdrop-blur-sm ${className}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-[#C8AE70] font-bold text-2xl">{brand}</div>
          <div id="nav-links" className="hidden md:flex space-x-6 transition-colors">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-[#C8AE70] transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
