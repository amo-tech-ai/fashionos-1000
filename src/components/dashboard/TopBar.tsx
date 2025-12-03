import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bell, User, ChevronRight, Search } from 'lucide-react';
import Button from '../ui/Button';

const TopBar: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbName = (segment: string, index: number, array: string[]) => {
    // Simple mapping, in a real app this might fetch titles from an ID
    if (segment === 'dashboard') return 'Home';
    if (array[index - 1] === 'events' && index > 0) return `Event #${segment.substring(0, 4)}...`;
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <header className="h-20 bg-cream/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10 border-b border-white/50">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-gray-500 overflow-hidden whitespace-nowrap">
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const name = getBreadcrumbName(segment, index, pathSegments);

          return (
            <React.Fragment key={path}>
              {index > 0 && <ChevronRight size={14} className="mx-2 text-gray-400" />}
              {isLast ? (
                <span className="font-medium text-black font-serif">{name}</span>
              ) : (
                <Link to={path} className="hover:text-purple-600 transition-colors">
                  {name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 border border-gray-200 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
          <Search size={16} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-32 placeholder:text-gray-300"
          />
        </div>

        <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </Button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-black">Jane Doe</p>
            <p className="text-[10px] text-gray-500">Creative Director</p>
          </div>
          <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-black shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
