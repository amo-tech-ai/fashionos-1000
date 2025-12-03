import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
  section: 'Website' | 'Dashboard';
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description, section }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center animate-in fade-in duration-500">
      <div className={`text-xs font-bold tracking-widest uppercase mb-2 ${
        section === 'Dashboard' ? 'text-indigo-500' : 'text-pink-500'
      }`}>
        {section}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {description || 'This page is currently under construction.'}
      </p>
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-400 font-mono">
        src/pages/{section.toLowerCase()}/{title.replace(/\s+/g, '')}.tsx
      </div>
    </div>
  );
};

export default PlaceholderPage;