import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Check, 
  Camera, 
  Video, 
  Layers, 
  ShoppingBag, 
  MapPin, 
  Shirt, 
  Monitor,
  Star
} from 'lucide-react';
import Button from '../../components/ui/Button';
import FadeIn from '../../components/ui/FadeIn';

export default function HomePageV2() {
  return (
    <div className="bg-white font-sans text-black selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
      
      {/* 1. Hero Section — Editorial Collage */}
      <section className="relative w-full min-h-[95vh] flex items-center py-24 px-6 lg:px-12 bg-[#FBF8F5]">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-10 z-10 relative">
             <FadeIn delay={100}>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
                  Exceptional <br />
                  fashion <span className="italic font-light text-gray-400">imagery.</span> <br />
                  Every time.
                </h1>
                <p className="text-xl text-gray-600 max-w-md leading-relaxed mb-10 font-light">
                  Runway, campaigns, ecommerce, and editorial — we help fashion brands look as premium as they feel.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link to="/start-project">
                    <Button size="lg" className="px-10 h-16 text-sm bg-black text-white hover:bg-gray-800 rounded-none">Book a Campaign</Button>
                  </Link>
                </div>

                <div className="border-t border-gray-300 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                   {['Creative Direction', 'Premium Quality', 'Consistent Results'].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2">
                         <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                         <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{item}</span>
                      </div>
                   ))}
                </div>
             </FadeIn>
          </div>

          {/* Right Column (7 Cols) - Editorial Collage */}
          <div className="lg:col-span-7 relative h-[600px] lg:h-[800px]">
             <FadeIn delay={300} className="w-full h-full relative">
                {/* Main Large Image */}
                <div className="absolute top-0 right-0 w-[85%] h-[90%] bg-gray-200 overflow-hidden">
                   <img 
                      src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop" 
                      alt="Editorial Main" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                   />
                </div>
                {/* Overlapping Image 1 */}
                <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gray-300 overflow-hidden border-8 border-[#FBF8F5] shadow-2xl">
                   <img 
                      src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop" 
                      alt="Street Style" 
                      className="w-full h-full object-cover"
                   />
                </div>
                {/* Overlapping Image 2 (Detail) */}
                <div className="absolute top-20 left-10 w-[25%] h-[30%] bg-gray-900 overflow-hidden border-4 border-white shadow-lg hidden xl:block">
                   <img 
                      src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400&auto=format&fit=crop" 
                      alt="Detail Shot" 
                      className="w-full h-full object-cover opacity-80"
                   />
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Latest Campaigns Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
              <h2 className="text-4xl lg:text-5xl font-serif font-medium">Latest Campaigns</h2>
              <Link to="/projects" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors mb-2">
                 View All Work <ArrowRight size={14} />
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                 { title: "Summer Editorial '25", tag: "Editorial", img: "https://images.unsplash.com/photo-1529139574466-a302d20525a9?q=80&w=800" },
                 { title: "Milan Fashion Week", tag: "Runway", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800" },
                 { title: "Urban Capsule", tag: "Commercial", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800" },
              ].map((item, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100 shadow-none group-hover:shadow-xl transition-all duration-500">
                       <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
                       />
                       <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Project
                       </div>
                    </div>
                    <div className="flex justify-between items-start">
                       <div>
                          <h3 className="text-2xl font-serif font-medium mb-1 group-hover:text-purple-600 transition-colors">{item.title}</h3>
                          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.tag}</span>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. About / Studio Section */}
      <section className="py-32 px-6 lg:px-12 bg-[#F5F5F0]">
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Image (6 Cols) */}
            <div className="lg:col-span-6 h-[700px] relative">
               <img 
                  src="https://images.unsplash.com/photo-1520024146169-3240400354ae?q=80&w=1000" 
                  alt="Studio Interior" 
                  className="w-full h-full object-cover shadow-xl"
               />
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white p-8 flex flex-col justify-center items-center shadow-lg hidden lg:flex">
                  <span className="text-4xl font-serif font-bold">1500</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">Sq Ft Studio</span>
               </div>
            </div>

            {/* Right Text (6 Cols) */}
            <div className="lg:col-span-6 lg:pl-12">
               <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6 block">The Studio</span>
               <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-8 leading-tight">A studio you can trust.</h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
                  We understand the pressures of the fashion calendar. From Fashion Week deadlines to seasonal drops, agencies and designers rely on us for on-time, high-fidelity assets delivered ready for print and digital channels.
               </p>

               <div className="space-y-6">
                  {[
                     { label: 'Creative Direction', desc: 'Art directors ensuring vision alignment.' },
                     { label: 'Rapid Turnaround', desc: 'First proofs in 24 hours.' },
                     { label: 'Brand Consistency', desc: 'Visual identity across lookbooks.' },
                  ].map((feat, i) => (
                     <div key={i} className="flex gap-6 items-start group">
                        <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                           <Check size={18} />
                        </div>
                        <div>
                           <h4 className="font-bold text-sm uppercase tracking-wide mb-1">{feat.label}</h4>
                           <p className="text-sm text-gray-500">{feat.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. Signature Story Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Portrait (5 Cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
               <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden group">
                  <img 
                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800" 
                     alt="Founder Portrait" 
                     className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="font-serif italic text-lg">"Fashion is about storytelling."</span>
                  </div>
               </div>
            </div>
            
            {/* Right Text (7 Cols) */}
            <div className="lg:col-span-7 lg:pl-16 order-1 lg:order-2">
               <h2 className="text-5xl lg:text-7xl font-serif font-medium mb-10 leading-none">
                  20+ years in the <br /> fashion industry.
               </h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
                  From boutique labels to Fortune 500 brands, we've mastered the art of capturing fashion that sells. Our extensive portfolio includes work for fashion houses, beauty brands, and lifestyle companies across the globe.
               </p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                  {['Global runway coverage', 'Campaigns for independent labels', 'Ecommerce & catalog production', 'High-end retouching'].map((item) => (
                     <li key={item} className="flex items-center gap-3 text-sm font-bold text-black uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 bg-black rounded-full"></span> {item}
                     </li>
                  ))}
               </ul>
               <Link to="/about">
                  <Button variant="outline" size="lg" className="h-14 px-10 rounded-none border-black hover:bg-black hover:text-white">See Client Stories</Button>
               </Link>
            </div>
         </div>
      </section>

      {/* 5. Ecommerce Product Photography (Dark) */}
      <section className="py-32 px-6 lg:px-12 bg-[#1A1D2D] text-white overflow-hidden relative">
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6">
               <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6">Ecommerce Product <br/> Photography.</h2>
               <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                  Clean, high-fidelity product photography increases conversion and reduces returns. We provide styling, shooting, and retouching optimized for Shopify, Amazon, and luxury marketplaces.
               </p>

               <div className="space-y-8 mb-12">
                  {[
                     { title: 'Consistent Lighting & Styling', desc: 'Ensure your collection looks cohesive on the grid.' },
                     { title: 'On-Model or Ghost Mannequin', desc: 'Versatile shooting styles to match guidelines.' }
                  ].map((benefit, i) => (
                     <div key={i} className="pl-6 border-l border-gray-700">
                        <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-500">{benefit.desc}</p>
                     </div>
                  ))}
               </div>

               <Link to="/services/photography">
                  <Button className="bg-white text-black hover:bg-gray-200 border-none px-10 h-14 rounded-none">View Ecommerce Packages</Button>
               </Link>
            </div>

            {/* Right Images (6 Cols) */}
            <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center">
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-64 h-80 bg-gray-800 rounded-lg shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
                   <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" className="w-full h-full object-cover rounded-lg opacity-90" alt="Product" />
                </div>
                <div className="absolute bottom-10 left-10 w-64 h-80 bg-gray-800 rounded-lg shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                   <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" className="w-full h-full object-cover rounded-lg opacity-90" alt="Product" />
                </div>
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/30 blur-[100px] rounded-full"></div>
            </div>
         </div>
      </section>

      {/* 6. Testimonial Section */}
      <section className="py-32 px-6 lg:px-12 bg-white text-center">
         <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
               <div className="flex gap-1 text-purple-600">
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
               </div>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-12 text-gray-900">
               “We’ve trusted FashionOS Studio with our campaigns for 6+ years. They always deliver imagery that moves product.”
            </h3>
            <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
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
      <section className="py-32 px-6 lg:px-12 bg-[#FBF8F5]">
         <div className="max-w-[1440px] mx-auto">
            <div className="mb-20 flex justify-between items-end">
               <h2 className="text-4xl font-serif font-medium">Creative Services</h2>
               <Link to="/services">
                  <Button variant="outline" className="border-gray-300 hover:border-black rounded-none">View All Services</Button>
               </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { icon: Camera, title: 'Campaigns', desc: 'Editorial-quality campaigns for seasonal stories.' },
                  { icon: Layers, title: 'Runway', desc: 'On-the-ground coverage capturing energy and details.' },
                  { icon: ShoppingBag, title: 'Ecommerce', desc: 'High-volume imagery optimized for online sales.' },
                  { icon: Video, title: 'Video & Social', desc: 'Short-form video, reels, and BTS content.' },
               ].map((s, i) => (
                  <div key={i} className="bg-white p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group min-h-[350px] flex flex-col justify-between">
                     <div>
                        <s.icon size={32} strokeWidth={1} className="mb-6 text-gray-400 group-hover:text-black transition-colors" />
                        <h3 className="font-bold text-xl mb-4 font-serif">{s.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                     </div>
                     <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={14} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. Fashion Directory Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
         <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               <div className="lg:col-span-4 sticky top-32 h-fit">
                  <span className="text-xs font-bold tracking-widest text-gray-400 uppercase block mb-6">The Network</span>
                  <h2 className="text-5xl font-serif font-medium mb-8">Fashion <br /> Directory.</h2>
                  <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                     We curate a network of the best photographers, stylists, models, and MUAs in the industry. Find your next collaborator.
                  </p>
                  <Link to="/directory">
                     <Button size="lg" className="bg-black text-white px-10 h-14 rounded-none w-full sm:w-auto">Explore Directory</Button>
                  </Link>
               </div>
               
               <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                     { name: 'Elena Rodriguez', role: 'Photographer', img: 'https://images.unsplash.com/photo-1589571894960-20bbe2815d17?q=80&w=500' },
                     { name: 'Marcus Chen', role: 'Stylist', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500' },
                     { name: 'Sarah Jenkins', role: 'Model', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500' },
                  ].map((p, i) => (
                     <div key={i} className="group cursor-pointer">
                        <div className="aspect-[3/4] overflow-hidden mb-4 relative bg-gray-100">
                           <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h4 className="font-serif font-bold text-xl mb-1">{p.name}</h4>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-transparent group-hover:border-gray-400 pb-0.5 transition-colors">{p.role}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 9. Fashion Marketplace Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
         <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-16">
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
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <m.icon size={48} strokeWidth={1} className="mb-4 opacity-90" />
                        <h3 className="text-3xl font-serif italic mb-2">{m.title}</h3>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 10. Behind the Scenes Section */}
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
                 <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black px-10 h-14 rounded-none">Watch the Studio Tour</Button>
            </div>
         </div>
      </section>

      {/* 11. Contact / CTA Section */}
      <section className="py-32 px-6 bg-[#FBF8F5]">
         <div className="max-w-4xl mx-auto bg-white p-12 lg:p-24 shadow-2xl relative overflow-hidden text-center border border-gray-100">
             <div className="relative z-10 space-y-8">
                <span className="text-xs font-bold tracking-widest text-purple-600 uppercase block">Bespoke Production</span>
                <h2 className="text-4xl lg:text-6xl font-serif font-medium leading-tight">Need something a <br />little more creative?</h2>
                <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed font-light">
                    Have a complex vision? We love the unusual. Bring us your wildest briefs for multi-day productions, exotic locations, or set builds.
                </p>
                <div className="pt-4">
                    <Link to="/start-project">
                        <Button size="lg" className="bg-black text-white px-12 h-16 text-sm rounded-none">Start a Custom Brief</Button>
                    </Link>
                </div>
             </div>
         </div>
      </section>

    </div>
  );
}