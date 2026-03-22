import { motion } from 'motion/react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  glowColor?: 'green' | 'teal' | 'blue';
}

export function GlowButton({ 
  variant = 'primary', 
  children, 
  glowColor = 'green',
  className = '',
  ...props 
}: GlowButtonProps) {
  const baseClasses = 'relative px-8 py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#00ff88] to-[#00d4aa] text-[#0a0b0f] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]',
    secondary: 'bg-gradient-to-r from-[#00d4aa] to-[#00e5ff] text-[#0a0b0f] hover:shadow-[0_0_30px_rgba(0,212,170,0.5)]',
    outline: 'bg-transparent border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88]/10 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]'
  };

  const glowColors = {
    green: 'rgba(0, 255, 136, 0.4)',
    teal: 'rgba(0, 212, 170, 0.4)',
    blue: 'rgba(0, 229, 255, 0.4)'
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant !== 'outline' && (
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${glowColors[glowColor]}, transparent)`
          }}
        />
      )}
    </motion.button>
  );
}
