import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Camera, Video, ShoppingBag, Layers, ChevronRight, MapPin, Shirt, Monitor, Check } from 'lucide-react';
import Button from '../../components/ui/Button';
import FadeIn from '../../components/ui/FadeIn';

export default function HomePage() {
  return (
    <div className="bg-white font-sans text-black selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. Hero Section (Editorial Collage) */}
      <section className="relative px-6 lg:px-12 py-12 lg:py-24 max-w-[1600px] mx-auto min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Text Column */}
          <div className="lg:col-span-5 space-y-10 z-10">
            <FadeIn delay={100}>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-6 block">FashionOS Studio</span>
              <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8">
                Exceptional <br />
                fashion <span className="italic font-light">imagery.</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Every time.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md leading-relaxed mb-10">
                Runway, campaigns, ecommerce, and editorial — we help fashion brands look as premium as they feel.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/start-project">
                  <Button size="lg" className="px-10 h-14 text-sm">Book a Campaign</Button>
                </Link>
                <Link to="/directory">
                   <Button variant="outline" size="lg" className="px-10 h-14 text-sm">Explore Directory</Button>
                </Link>
              </div>

              <div className="pt-8 border-t border-gray-100 flex flex-col gap-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black"></span> Creative direction</span>
                <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black"></span> Premium quality</span>
                <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black"></span> Consistent results</span>
              </div>
            </FadeIn>
          </div>

          {/* Image Collage Column */}
          <div className="lg:col-span-7 relative h-[700px] hidden lg:block">
             <FadeIn delay={300} className="absolute top-0 right-0 w-[60%] h-[80%] overflow-hidden rounded-t-[10rem] rounded-b-none shadow-soft">
                <div className="w-full h-full bg-gray-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop" 
                    alt="Fashion Model Editorial" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border-black/5 border-2 rounded-t-[10rem] pointer-events-none"></div>
                </div>
             </FadeIn>
             <FadeIn delay={500} className="absolute bottom-0 left-10 w-[45%] h-[60%] overflow-hidden rounded-t-full rounded-b-lg border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" 
                  alt="Editorial Street Style" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
             </FadeIn>
             <FadeIn delay={700} className="absolute top-20 left-0 w-[28%] h-[38%] overflow-hidden rounded-full border-4 border-white shadow-xl">
                 <img 
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop" 
                  alt="Runway Detail" 
                  className="w-full h-full object-cover"
                />
             </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Latest Campaigns */}
      <section className="px-6 lg:px-12 py-32 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">Featured Work</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-medium">Latest Campaigns</h2>
            </div>
            <div className="hidden md:flex gap-4 items-center text-xs font-bold tracking-widest uppercase text-gray-400">
               Swipe to explore <div className="w-16 h-px bg-gray-300"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Summer Editorial '25", img: "https://images.unsplash.com/photo-1529139574466-a302d20525a9?q=80&w=800", cat: "Editorial" },
              { title: "Milan Fashion Week", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800", cat: "Runway" },
              { title: "Urban Capsule", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800", cat: "Lookbook" },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-sm aspect-[3/4] mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                      <ArrowRight className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">{item.cat}</span>
                    <h3 className="text-3xl font-serif font-medium group-hover:text-purple-600 transition-colors">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About / Studio Section */}
      <section className="bg-cream py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 relative">
             <div className="absolute -top-12 -left-12 w-full h-full border border-black/5 rounded-none hidden lg:block"></div>
             <img 
              src="https://images.unsplash.com/photo-1520024146169-3240400354ae?q=80&w=1000" 
              alt="Studio Life" 
              className="w-full aspect-[4/3] object-cover shadow-xl relative z-10"
             />
          </div>
          <div className="lg:col-span-6 space-y-10">
            <div>
                 <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">The Studio</span>
                 <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6">A studio you can trust.</h2>
                 <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
                  We understand the pressures of the fashion calendar. From Fashion Week deadlines to seasonal drops, agencies and designers rely on us for on-time, high-fidelity assets. 
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {[
                  { label: "Creative Direction", desc: "Art directors ensuring vision alignment." },
                  { label: "Rapid Turnaround", desc: "First proofs in 24 hours." },
                  { label: "Brand Consistency", desc: "Visual identity across channels." },
                ].map((feature, i) => (
                  <div key={i} className="bg-white p-6 shadow-sm border border-gray-100/50 hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="font-bold text-sm mb-3 uppercase tracking-wide">{feature.label}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signature / Heritage */}
      <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 h-[800px] bg-gray-100 overflow-hidden relative group">
                 <img 
                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
                   alt="Portrait" 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                 />
            </div>
            <div className="lg:col-span-7 pl-0 lg:pl-12">
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6 block">Our Heritage</span>
                <h2 className="text-5xl lg:text-6xl font-serif font-medium mb-8 leading-tight">20+ years in the <br />fashion industry.</h2>
                <p className="text-gray-600 mb-10 max-w-xl text-lg leading-relaxed">
                   From boutique labels to Fortune 500 brands, we've mastered the art of capturing fashion that sells. Our extensive portfolio includes work for fashion houses, beauty brands, jewelry designers, and lifestyle companies across the globe.
                </p>
                
                <ul className="space-y-6 mb-12">
                    {['Global runway coverage', 'Campaigns for independent labels', 'Ecommerce & catalog production'].map((item) => (
                        <li key={item} className="flex items-center gap-4 text-base font-medium">
                            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                                <Check size={14} strokeWidth={3} />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>

                <Link to="/about">
                   <Button variant="outline" className="px-10 h-14">See our work</Button>
                </Link>
            </div>
        </div>
      </section>

      {/* 5. Ecommerce Dark Mode */}
      <section className="bg-[#1A1D2D] text-white py-32 px-6 lg:px-12 overflow-hidden">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
                <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6">Ecommerce Product Photography.</h2>
                <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                    Clean, high-fidelity product photography increases conversion and reduces returns. We provide styling, shooting, and retouching optimized for Shopify, Amazon, and luxury marketplaces.
                </p>
                <div className="space-y-8 mb-12">
                    <div className="flex gap-6">
                        <div className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 bg-white/5">
                            <Camera size={24} className="text-white" />
                        </div>
                        <div>
                            <h4 className="font-bold text-base mb-1">Consistent Lighting & Styling</h4>
                            <p className="text-sm text-gray-400 max-w-sm">Ensure your collection looks cohesive on the grid.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                         <div className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 bg-white/5">
                            <Layers size={24} className="text-white" />
                        </div>
                        <div>
                            <h4 className="font-bold text-base mb-1">On-Model, Flat-Lay, or Ghost Mannequin</h4>
                            <p className="text-sm text-gray-400 max-w-sm">Versatile shooting styles to match your brand guidelines.</p>
                        </div>
                    </div>
                </div>
                <Link to="/services/photography">
                    <Button className="bg-white text-black hover:bg-gray-200 border-none px-8">View Ecommerce Packages</Button>
                </Link>
            </div>

            <div className="lg:col-span-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full"></div>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="space-y-6 translate-y-12">
                        <img 
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500" 
                            alt="Product Watch" 
                            className="rounded-lg shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                        />
                        <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10">
                            <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                            <div className="h-2 w-12 bg-white/10 rounded"></div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <img 
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" 
                            alt="Product Headphones" 
                            className="rounded-lg shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                        />
                         <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10">
                            <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                            <div className="h-2 w-12 bg-white/10 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 6. Testimonial */}
      <section className="py-32 bg-white text-black text-center px-6">
        <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-6xl font-serif text-gray-200">“</div>
            <h3 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-12">
                We’ve trusted FashionOS Studio with our campaigns for 6+ years. They always deliver imagery that moves product.
            </h3>
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                    <span className="font-bold tracking-widest uppercase text-sm block mb-1">Cristina Álvarez</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Creative Director, Atelier Eclipse</span>
                </div>
            </div>
        </div>
      </section>

      {/* 7. Creative Services Grid */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto bg-gray-50">
         <div className="flex justify-between items-end mb-20">
            <div>
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">What We Do</span>
              <h2 className="text-4xl font-serif font-medium">Creative Services</h2>
            </div>
            <Link to="/services" className="hidden md:block">
                 <Button variant="outline">View All Services</Button>
            </Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {[
                { icon: Camera, title: 'Campaigns', desc: 'Editorial-quality campaigns for new launches and seasonal stories.' },
                { icon: Layers, title: 'Runway', desc: 'On-the-ground coverage that captures energy, details, and atmosphere.' },
                { icon: ShoppingBag, title: 'Ecommerce', desc: 'High-volume, consistent imagery optimized for online sales.' },
                { icon: Video, title: 'Video & Social', desc: 'Short-form video, reels, and behind-the-scenes content for social.' },
            ].map((s, i) => (
                <div key={i} className="bg-white p-12 hover:shadow-xl hover:z-10 transition-all duration-300 group flex flex-col items-start min-h-[320px]">
                    <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center mb-auto group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <s.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-8">{s.desc}</p>
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2">
                            View Details <ArrowRight size={12} />
                        </span>
                    </div>
                </div>
            ))}
         </div>
      </section>

      {/* 8. Fashion Directory */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-8 sticky top-32">
                <div>
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase block mb-4">The Network</span>
                    <h2 className="text-5xl font-serif font-medium mb-6">Fashion <br /> Directory.</h2>
                    <p className="text-gray-600 max-w-xs leading-relaxed mb-8">
                        We curate a network of the best photographers, stylists, models, and MUAs in the industry. Find your next collaborator.
                    </p>
                </div>
                <Link to="/directory">
                    <Button size="lg" className="w-full sm:w-auto">Explore Directory</Button>
                </Link>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                 {[
                    { name: 'Elena Rodriguez', role: 'Photographer', img: 'https://images.unsplash.com/photo-1589571894960-20bbe2815d17?q=80&w=500' },
                    { name: 'Marcus Chen', role: 'Stylist', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500' },
                    { name: 'Sarah Jenkins', role: 'Model', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500' },
                 ].map((p, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-[3/4] overflow-hidden mb-4 relative">
                            <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur text-[10px] font-bold uppercase px-3 py-1.5 tracking-widest">{p.role}</span>
                            </div>
                        </div>
                        <h4 className="font-serif font-bold text-xl mb-1">{p.name}</h4>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Available for booking</p>
                    </div>
                 ))}
            </div>
        </div>
      </section>

      {/* 9. Fashion Marketplace */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
         <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">Marketplace</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-medium">Production Essentials</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: 'Wardrobe', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800', icon: Shirt },
                { title: 'Locations', img: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=800', icon: MapPin },
                { title: 'Equipment', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800', icon: Monitor },
            ].map((m, i) => (
                <div key={i} className="relative aspect-[3/4] group overflow-hidden cursor-pointer">
                    <img src={m.img} alt={m.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <m.icon size={48} strokeWidth={1} className="mb-6 opacity-80" />
                        <h3 className="text-4xl font-serif italic mb-2">{m.title}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/50 pb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            Explore Collection
                        </span>
                    </div>
                </div>
            ))}
         </div>
      </section>

      {/* 10. Behind the Scenes */}
      <section className="relative h-[800px] flex items-center justify-center bg-black overflow-hidden group">
         <div className="absolute inset-0 opacity-60">
             <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600" 
                alt="BTS Camera" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s]" 
             />
         </div>
         <div className="relative z-10 text-center text-white space-y-8 px-6 max-w-4xl">
            <button className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto hover:bg-white hover:text-black transition-all duration-300 group-btn">
                <Play fill="currentColor" className="ml-2 w-8 h-8" />
            </button>
            <h2 className="text-6xl lg:text-8xl font-serif font-medium">Behind the scenes.</h2>
            <p className="text-gray-300 text-xl font-light tracking-wide max-w-lg mx-auto">
                See how we create the magic. Full transparency from concept to final cut.
            </p>
            <div className="pt-8">
                 <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black px-10 h-14">Watch the Studio Reel</Button>
            </div>
         </div>
      </section>

      {/* 11. Custom Brief CTA */}
      <section className="py-32 px-6 bg-cream">
         <div className="max-w-4xl mx-auto bg-white p-12 lg:p-24 shadow-2xl relative overflow-hidden text-center">
             <div className="relative z-10 space-y-8">
                <span className="text-xs font-bold tracking-widest text-purple-600 uppercase block">Bespoke Production</span>
                <h2 className="text-4xl lg:text-6xl font-serif font-medium leading-tight">Need something a <br />little more creative?</h2>
                <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
                    Have a complex vision? We love the unusual. Bring us your wildest briefs for multi-day productions, exotic locations, or set builds.
                </p>
                <div className="pt-4">
                    <Link to="/start-project">
                        <Button size="lg" className="bg-black text-white px-12 h-16 text-sm">Start a Custom Brief</Button>
                    </Link>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
         </div>
      </section>
    </div>
  );
}