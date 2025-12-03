import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Wrench, Menu, Bell, User } from 'lucide-react';
import Button from '../components/ui/Button';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
    { name: 'Services', href: '/dashboard/services', icon: Wrench },
  ];

  return (
    <div className="min-h-screen bg-cream flex font-sans">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-gray-100 transition-all duration-300 fixed h-full z-20 flex flex-col shadow-soft`}
      >
        <div className="h-20 flex items-center justify-center border-b border-gray-100">
           <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold text-lg font-serif">
              F
            </div>
            {isSidebarOpen && <span className="font-bold text-lg tracking-tight font-serif">FashionOS</span>}
           </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-black text-white shadow-md' 
                    : 'text-gray-500 hover:bg-cream hover:text-black'
                }`}
              >
                <item.icon size={20} className={isActive ? 'text-white' : 'group-hover:text-black transition-colors'} />
                {isSidebarOpen && <span className="font-medium text-sm tracking-wide">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-100">
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-full flex items-center justify-center p-2 text-gray-400 hover:bg-cream hover:text-black rounded-lg transition-colors">
             {isSidebarOpen ? 'Collapse' : 'Expand'}
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        {/* Top Header */}
        <header className="h-20 bg-cream/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10 border-b border-white/50">
          <div>
             <h1 className="text-2xl font-serif font-bold text-black">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0">
              <Bell size={20} />
            </Button>
            <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-black shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <User size={18} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;