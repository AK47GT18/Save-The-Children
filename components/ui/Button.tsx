import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', className = '', size = 'md', onClick }: ButtonProps) => {
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3",
    lg: "px-9 py-4 text-lg"
  };
  
  const baseStyle = "rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-brand-dark hover:bg-yellow-400 shadow-[0_8px_16px_-8px_rgba(250,204,21,0.5)]",
    secondary: "bg-secondary text-white hover:bg-green-700 shadow-[0_8px_16px_-8px_rgba(21,128,61,0.5)]",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent",
    dark: "bg-brand-dark text-white hover:bg-green-950",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
