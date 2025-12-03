import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Linkedin } from 'lucide-react';

const WebsiteLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Home V2', href: '/v2' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Photography Services', href: '/services/photography' },
    { name: 'Events', href: '/events' },
    { name: 'Directory', href: '/directory' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between h-24 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-gray-900">
                Fashion<span className="text-black">OS</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    location.pathname === item.href
                      ? 'text-black border-b-2 border-black pb-1'
                      : 'text-gray-400 hover:text-black hover:border-b-2 hover:border-gray-200 pb-1 border-transparent border-b-2'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

             {/* Tablet/Desktop Condensed Navigation (for smaller screens) */}
             <nav className="hidden md:flex xl:hidden space-x-6">
              {navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    location.pathname === item.href
                      ? 'text-black'
                      : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {/* Dropdown or More could go here, but for now we just show core items */}
            </nav>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-6">
              <Link to="/start-project" className="hidden lg:block px-8 py-3 text-xs font-bold uppercase tracking-widest text-white bg-black hover:bg-gray-800 transition-colors">
                Book a Shoot
              </Link>
              <Link to="/dashboard" className="hidden md:block text-xs font-bold uppercase tracking-widest text-gray-900 border border-gray-200 px-6 py-3 hover:bg-gray-50 transition-colors">
                Log In
              </Link>
              <button
                className="xl:hidden p-2 text-gray-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white border-b border-gray-100 absolute w-full h-screen z-50 overflow-y-auto pb-20">
            <div className="px-6 pt-8 pb-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-4 border-b border-gray-50 text-xl font-serif font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                 <Link
                    to="/start-project"
                    className="block w-full text-center px-4 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Book a Shoot
                </Link>
                <Link
                    to="/dashboard"
                    className="block w-full text-center px-4 py-4 border border-gray-200 text-sm font-bold uppercase tracking-widest"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Dashboard Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Minimal 3-Column Footer */}
      <footer className="bg-gray-50 text-black py-24 border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-8 md:col-span-1">
            <span className="text-3xl font-serif font-bold tracking-tight block">
              Fashion<span className="text-gray-400">OS</span>
            </span>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              The operating system for the modern fashion industry. Connecting creators, brands, and consumers in one unified ecosystem through AI-powered storytelling.
            </p>
            <div className="text-xs text-gray-400 font-medium">
                &copy; {new Date().getFullYear()} FashionOS Inc.
            </div>
          </div>
          
          {/* Column 2: Platform Links */}
          <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Platform</h3>
              <ul className="space-y-4">
                <li><Link to="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Home Classic</Link></li>
                <li><Link to="/v2" className="text-sm font-bold text-purple-600 hover:text-black transition-colors">Home V2 (Luxury)</Link></li>
                <li><Link to="/about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">About Us</Link></li>
                <li><Link to="/directory" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Directory</Link></li>
              </ul>
          </div>

          {/* Column 3: Services */}
          <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Services</h3>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">All Services</Link></li>
                <li><Link to="/services/photography" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Photography Services</Link></li>
                <li><Link to="/marketplace" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Marketplace</Link></li>
                <li><Link to="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Legal & Privacy</Link></li>
              </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Connect</h3>
            <ul className="space-y-4 mb-8">
                <li><Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Contact Support</Link></li>
                <li><Link to="/start-project" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Start a Project</Link></li>
            </ul>
            <div className="flex gap-6">
                <Instagram size={20} className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
                <Twitter size={20} className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
                <Linkedin size={20} className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default WebsiteLayout;