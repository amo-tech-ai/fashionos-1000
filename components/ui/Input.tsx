import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ElementType;
  className?: string;
  id?: string;
  name?: string;
}

export default function Input({
  label,
  error,
  icon: Icon,
  className,
  id,
  name,
  ...props
}: InputProps) {
  const inputId = id || name || Math.random().toString(36).substr(2, 9);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 ml-1">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <Icon size={20} />
          </div>
        )}
        <input
          id={inputId}
          name={name}
          className={twMerge(
            'w-full h-14 bg-white border border-gray-200 rounded-xl text-black placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200',
            Icon ? 'pl-11 pr-4' : 'px-4',
            error ? 'border-red-500 focus:ring-red-500' : '',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium ml-1">{error}</p>
      )}
    </div>
  );
}