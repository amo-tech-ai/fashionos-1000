import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
  id?: string;
  name?: string;
}

export default function Textarea({
  label,
  error,
  className,
  id,
  name,
  ...props
}: TextareaProps) {
  const inputId = id || name || Math.random().toString(36).substr(2, 9);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 ml-1">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        name={name}
        className={twMerge(
          'w-full min-h-[120px] p-4 bg-white border border-gray-200 rounded-xl text-black placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-y',
          error ? 'border-red-500 focus:ring-red-500' : '',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium ml-1">{error}</p>
      )}
    </div>
  );
}