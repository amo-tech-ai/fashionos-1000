import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Wrench, 
  Calendar, 
  Users, 
  DollarSign,
  ArrowLeft,
  Activity,
  MapPin,
  Megaphone,
  Clock
} from 'lucide-react';
import { clsx } from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  special?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  // Check if we are in an Event Context (e.g., /dashboard/events/123/...)
  // We exclude 'new' to keep the creation flow in the global context if desired, 
  // or handle it separately.
  const eventMatch = matchPath('/dashboard/events/:id/*', location.pathname);
  const eventId = eventMatch?.params.id;
  const isEventContext = !!eventId && eventId !== 'new';

  const globalNav: NavItem[] = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
    { name: 'Events', href: '/dashboard/events', icon: Calendar },
    { name: 'Services', href: '/dashboard/services', icon: Wrench },
    { name: 'Sponsors (CRM)', href: '/dashboard/sponsors', icon: Users },
    { name: 'Finance', href: '/dashboard/finance', icon: DollarSign },
  ];

  const eventNav: NavItem[] = [
    { name: 'Back to Global', href: '/dashboard/events', icon: ArrowLeft, special: true },
    { name: 'Command Center', href: `/dashboard/events/${eventId}`, icon: Activity },
    { name: 'Timeline', href: `/dashboard/events/${eventId}/timeline`, icon: Clock },
    { name: 'Logistics & Map', href: `/dashboard/events/${eventId}/logistics`, icon: MapPin },
    { name: 'Sponsors', href: `/dashboard/events/${eventId}/sponsors`, icon: DollarSign },
    { name: 'Casting', href: `/dashboard/events/${eventId}/casting`, icon: Users },
  ];

  const navigation = isEventContext ? eventNav : globalNav;

  return (
    <aside 
      className={clsx(
        "bg-white border-r border-gray-100 transition-all duration-300 fixed h-full z-20 flex flex-col shadow-soft",
        isOpen ? 'w-64' : 'w-20'
      )}
    >
      <div className="h-20 flex items-center justify-center border-b border-gray-100">
         <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold text-lg font-serif">
            F
          </div>
          {isOpen && <span className="font-bold text-lg tracking-tight font-serif">FashionOS</span>}
         </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {isEventContext && isOpen && (
          <div className="px-3 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600">Event Context</span>
          </div>
        )}
        
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || (item.href !== '/dashboard' && location.pathname.startsWith(item.href) && !item.special);
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={clsx(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? 'bg-black text-white shadow-md' 
                  : item.special 
                    ? 'text-gray-500 hover:text-black hover:bg-gray-100'
                    : 'text-gray-500 hover:bg-cream hover:text-black'
              )}
            >
              <item.icon size={20} className={clsx(isActive ? 'text-white' : 'group-hover:text-black transition-colors')} />
              {isOpen && <span className="font-medium text-sm tracking-wide">{item.name}</span>}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-100">
         <button onClick={toggleSidebar} className="w-full flex items-center justify-center p-2 text-gray-400 hover:bg-cream hover:text-black rounded-lg transition-colors">
           {isOpen ? 'Collapse' : 'Expand'}
         </button>
      </div>
    </aside>
  );
};

export default Sidebar;