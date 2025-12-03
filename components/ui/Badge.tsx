import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'success' | 'warning' | 'purple' | 'black';
  className?: string;
}

export default function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  const variants = {
    neutral: 'bg-gray-100 text-gray-600',
    success: 'bg-green-50 text-green-700 border border-green-100',
    warning: 'bg-orange-50 text-orange-700 border border-orange-100',
    purple: 'bg-purple-50 text-purple-700 border border-purple-100',
    black: 'bg-black text-white',
  };

  return (
    <span className={twMerge(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}