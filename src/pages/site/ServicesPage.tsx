import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, Palette, ShoppingBag, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
           <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block">Our Expertise</span>
              <h1 className="text-4xl lg:text-6xl font-serif font-medium mb-6">Creative Services</h1>
              <p className="text-gray-600 text-lg">
                Comprehensive production solutions for fashion brands. Select a category below to explore our specific packages and capabilities.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Photography Card */}
              <Link to="/services/photography" className="group relative h-[400px] overflow-hidden rounded-2xl block">
                 <img 
                    src="https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&w=1200" 
                    alt="Photography" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-8 flex flex-col justify-end text-white">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                        <Camera size={24} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold mb-2">Photography</h2>
                    <p className="text-gray-200 mb-6 max-w-sm">Ecommerce, campaign, lookbook, and editorial imagery.</p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Packages <ArrowRight size={14} />
                    </div>
                 </div>
              </Link>

              {/* Video Card - Placeholder Link */}
              <div className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer">
                 <img 
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200" 
                    alt="Video Production" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-8 flex flex-col justify-end text-white">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                        <Video size={24} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold mb-2">Video Production</h2>
                    <p className="text-gray-200 mb-6 max-w-sm">Campaign films, social reels, and BTS coverage.</p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Coming Soon <ArrowRight size={14} />
                    </div>
                 </div>
              </div>

               {/* Design - Placeholder Link */}
              <div className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer">
                 <img 
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200" 
                    alt="Web Design" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-8 flex flex-col justify-end text-white">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                        <Palette size={24} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold mb-2">Digital Design</h2>
                    <p className="text-gray-200 mb-6 max-w-sm">Shopify design, lookbook layout, and branding.</p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Coming Soon <ArrowRight size={14} />
                    </div>
                 </div>
              </div>

               {/* Ecommerce - Placeholder Link */}
              <div className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer">
                 <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1200" 
                    alt="Ecommerce" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-8 flex flex-col justify-end text-white">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag size={24} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold mb-2">Ecommerce Strategy</h2>
                    <p className="text-gray-200 mb-6 max-w-sm">Conversion optimization and platform management.</p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Coming Soon <ArrowRight size={14} />
                    </div>
                 </div>
              </div>
           </div>
       </div>
    </div>
  );
}