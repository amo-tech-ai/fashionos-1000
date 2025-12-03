import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({ children, className, hover = true, ...props }: CardProps) {
  return (
    <div 
      className={twMerge(
        'bg-white rounded-3xl border border-gray-100 shadow-soft p-6',
        hover && 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}