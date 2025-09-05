import React from 'react';

interface FloatingElement {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  color: string;
  opacity: string;
  animation: string;
}

interface HeroFloatingElementsProps {
  elements?: FloatingElement[];
  className?: string;
}

const defaultElements: FloatingElement[] = [
  {
    top: "-top-36",
    right: "right-0",
    width: "w-20",
    height: "h-20",
    color: "bg-primary-red",
    opacity: "opacity-80",
    animation: "animate-float"
  },
  {
    top: "-top-56",
    left: "left-1/4",
    width: "w-16",
    height: "h-16",
    color: "bg-accent-yellow",
    opacity: "opacity-60",
    animation: "animate-float-delay"
  },
  {
    bottom: "bottom-0",
    right: "right-2/4",
    width: "w-12",
    height: "h-12",
    color: "bg-secondary-black",
    opacity: "opacity-70",
    animation: "animate-float"
  },
  {
    bottom: "bottom-0",
    left: "-left-56",
    width: "w-24",
    height: "h-24",
    color: "bg-secondary-purple",
    opacity: "opacity-50",
    animation: "animate-float-delay"
  }
];

const HeroFloatingElements: React.FC<HeroFloatingElementsProps> = ({
  elements = defaultElements,
  className = ""
}) => {
  return (
    <div className={`relative hidden md:block ${className}`}>
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.top || ''} ${element.bottom || ''} ${element.left || ''} ${element.right || ''} ${element.width} ${element.height} ${element.color} rounded-full ${element.opacity} ${element.animation}`}
        ></div>
      ))}
    </div>
  );
};

export default HeroFloatingElements;
