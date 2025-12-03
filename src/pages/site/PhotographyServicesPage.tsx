import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Layers, 
  ArrowRight, 
  Check, 
  Play, 
  Plus, 
  Minus
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import FadeIn from '../../components/ui/FadeIn';

// Helper for FAQ Accordion
const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-lg font-medium group-hover:text-purple-600 transition-colors">
          {question}
        </span>
        <span className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 leading-relaxed text-sm pr-8">{answer}</p>
      </div>
    </div>
  );
};

export default function PhotographyServicesPage() {
  return (
    <div className="bg-white font-sans text-black selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-cream flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <FadeIn delay={100} className="order-2 lg:order-1 space-y-8">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Services / Photography</span>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1]">
              Ecommerce Fashion <br />
              <span className="italic font-light text-gray-600">Photography</span> & Video
            </h1>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Creating ecom content trusted by prominent clients, from high-end to fast fashion. We provide premium product, editorial, and on-model photography optimized for conversion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/start-project">
                <Button size="lg" className="px-10">Book a Shoot</Button>
              </Link>
              <Button variant="outline" size="lg" icon={Play}>View Showreel</Button>
            </div>

            <div className="flex gap-8 pt-8 border-t border-gray-200/50 mt-8">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-purple-600">
                    <Layers size={14} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Fast Turnaround</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-purple-600">
                    <Camera size={14} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Studio or Location</span>
               </div>
            </div>
          </FadeIn>

          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] group">
             <div className="absolute inset-0 bg-white p-2 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out z-10">
                <img 
                  src="https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&w=800&auto=format&fit=crop" 
                  alt="High Fashion Model Puffer Jacket" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <div className="absolute inset-0 bg-gray-100 -rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out scale-95" />
          </div>
        </div>
      </section>

      {/* 2. Highlighted Service Banner - Grid */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Studio & On-Model", 
                desc: "Clean, consistent imagery that aligns with your visual identity.",
                img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
              },
              { 
                title: "Stocking & Commercial", 
                desc: "High volume production for catalogs and marketplaces.",
                img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600"
              },
              { 
                title: "Runway & Fashion Week", 
                desc: "On-the-ground coverage capturing the energy of the show.",
                img: "https://images.unsplash.com/photo-1574291825920-532159df8354?q=80&w=600"
              }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4 max-w-xs">{item.desc}</p>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-gray-200 pb-1 group-hover:border-black transition-colors">Learn More</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pricing & Packages */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
           <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-serif font-medium mb-4">Production Packages</h2>
              <p className="text-gray-500">Transparent pricing for standard ecommerce needs. Custom campaigns available upon request.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="p-10 flex flex-col h-full hover:shadow-xl transition-all duration-300 border-none">
                 <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Starter</span>
                    <h3 className="text-2xl font-serif font-bold mt-2">Ecommerce Product</h3>
                    <div className="mt-4 flex items-baseline">
                       <span className="text-4xl font-serif font-medium">$1,200</span>
                       <span className="ml-2 text-gray-500 text-sm">/ day</span>
                    </div>
                 </div>
                 <ul className="space-y-4 mb-8 flex-1">
                    {['Ghost Mannequin or Flat Lay', 'Up to 30 Products', 'Basic Retouching', 'Web-Ready Assets'].map(item => (
                       <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                          <Check size={16} className="text-green-500" /> {item}
                       </li>
                    ))}
                 </ul>
                 <Button variant="outline" className="w-full">Book This Package</Button>
              </Card>

              {/* Card 2 - Featured */}
              <Card className="p-10 flex flex-col h-full hover:shadow-2xl transition-all duration-300 bg-black text-white transform md:-translate-y-4 border-none relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4">
                    <span className="bg-purple-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">Popular</span>
                 </div>
                 <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Professional</span>
                    <h3 className="text-2xl font-serif font-bold mt-2">On-Model & Video</h3>
                    <div className="mt-4 flex items-baseline">
                       <span className="text-4xl font-serif font-medium">$3,500</span>
                       <span className="ml-2 text-gray-400 text-sm">/ day</span>
                    </div>
                 </div>
                 <ul className="space-y-4 mb-8 flex-1">
                    {['Model Casting Included', 'Hair & Makeup Artist', 'Stylist on Set', '50 Final Retouched Images', '5 Short Social Videos'].map(item => (
                       <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                          <Check size={16} className="text-purple-400" /> {item}
                       </li>
                    ))}
                 </ul>
                 <Button className="w-full bg-white text-black hover:bg-gray-200">Book This Package</Button>
              </Card>

              {/* Card 3 */}
              <Card className="p-10 flex flex-col h-full hover:shadow-xl transition-all duration-300 border-none">
                 <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Enterprise</span>
                    <h3 className="text-2xl font-serif font-bold mt-2">Full Campaign</h3>
                    <div className="mt-4 flex items-baseline">
                       <span className="text-4xl font-serif font-medium">$8,000+</span>
                       <span className="ml-2 text-gray-500 text-sm">/ project</span>
                    </div>
                 </div>
                 <ul className="space-y-4 mb-8 flex-1">
                    {['Creative Direction', 'Location Scouting', 'Full Production Crew', 'Usage Rights Management', 'Campaign Video'].map(item => (
                       <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                          <Check size={16} className="text-green-500" /> {item}
                       </li>
                    ))}
                 </ul>
                 <Button variant="outline" className="w-full">Get Custom Quote</Button>
              </Card>
           </div>
        </div>
      </section>

      {/* 4. Brand Statement */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-serif font-medium leading-tight">
                 We create brand-elevating, <br />
                 <span className="italic text-gray-400">conversion-driven</span> <br />
                 fashion photography.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                 Our on-model services include editorial photoshoots, lookbook creation, campaign photography, and ecommerce photography. We understand that in the digital age, your image is your storefront.
              </p>
              <div className="flex gap-12 pt-4">
                 <div>
                    <span className="block text-4xl font-serif font-bold mb-1">48h</span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Asset Delivery</span>
                 </div>
                 <div>
                    <span className="block text-4xl font-serif font-bold mb-1">5k+</span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Products Shot</span>
                 </div>
              </div>
           </div>
           <div className="relative h-[600px] bg-gray-100 rounded-sm overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1509967419530-da842fe46f2b?q=80&w=800&auto=format&fit=crop" 
                 alt="Editorial Portrait" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md p-6 border border-white/20 max-w-xs">
                   <p className="text-white text-sm font-serif italic">"FashionOS redefined our visual language. Sales increased by 40% in the first quarter."</p>
               </div>
           </div>
        </div>
      </section>

      {/* 5. Services Overview Grid */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
         <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { title: "On-Model", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400", desc: "Show fit and drape with professional talent." },
                  { title: "Lookbook", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=400", desc: "Tell your seasonal story through location shoots." },
                  { title: "Studio Ecom", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=400", desc: "Clean white background for product pages." },
                  { title: "Social", img: "https://images.unsplash.com/photo-1611558709796-ca5687958861?q=80&w=400", desc: "Vertical content for Reels and TikTok." },
               ].map((s, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-2 transition-transform duration-500">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-white shadow-md">
                         <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-serif font-bold text-xl mb-3">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 min-h-[40px]">{s.desc}</p>
                      <Link to="/start-project" className="text-xs font-bold uppercase tracking-widest text-purple-600 hover:text-purple-800">
                         Book Now
                      </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Creative Showcase */}
      <section className="py-24 px-6 lg:px-12 bg-white">
         <div className="max-w-[1400px] mx-auto space-y-24">
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl font-serif font-medium mb-6">E-commerce Fashion Video</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                     Our e-commerce fashion video service is designed to help your clothing stand out online—whether it’s clean, crisp model walk-throughs, detailed close-ups that highlight fit and fabric or something a little more creative, we have it covered.
                  </p>
                  <ul className="space-y-4 mb-10">
                     {[
                        { title: 'Catwalk-style videos', sub: 'Full-length model walk-throughs' },
                        { title: 'Close-up detail shots', sub: 'Show texture, fit, and features clearly' },
                        { title: 'Short-form video content', sub: 'Ideal for social media and advertising' }
                     ].map((item, i) => (
                        <li key={i}>
                           <span className="block font-bold text-black">{item.title}</span>
                           <span className="text-gray-500 text-sm">{item.sub}</span>
                        </li>
                     ))}
                  </ul>
                  <Button className="bg-black text-white">View Showreel</Button>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=400" className="w-full h-[400px] object-cover rounded-sm mt-12" alt="Texture Detail" />
                  <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400" className="w-full h-[400px] object-cover rounded-sm" alt="Catwalk" />
               </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 relative h-[500px]">
                   <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600" className="absolute top-0 right-0 w-[80%] h-full object-cover rounded-sm z-10" alt="Shoe Product" />
                   <div className="absolute bottom-10 left-0 w-[40%] h-[50%] bg-gray-900 z-20 p-8 flex items-center justify-center">
                      <span className="text-white font-serif text-3xl italic">Detail.</span>
                   </div>
               </div>
               <div className="order-1 lg:order-2 pl-0 lg:pl-12">
                   <h2 className="text-4xl font-serif font-medium mb-6">Apparel Product Photography</h2>
                   <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      We have years of expertise in producing quality clothing photography. We can present your collection in various ways, including invisible mannequins, hung flats, and creative flat lays.
                   </p>
                   <Button variant="outline">View Gallery</Button>
               </div>
            </div>
         </div>
      </section>

      {/* 7. BTS Hero */}
      <section className="relative h-[80vh] bg-black flex items-center justify-center group overflow-hidden">
         <div className="absolute inset-0 opacity-50">
             <img 
                src="https://images.unsplash.com/photo-1620216443831-d8525b651061?q=80&w=1600" 
                alt="Studio BTS" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s]"
             />
         </div>
         <div className="relative z-10 text-center text-white space-y-8 px-6">
             <button className="w-24 h-24 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center mx-auto hover:bg-white hover:text-black transition-all duration-300">
                <Play size={32} fill="currentColor" className="ml-2" />
             </button>
             <h2 className="text-5xl lg:text-7xl font-serif font-medium">Behind the scenes.</h2>
             <p className="text-gray-300 max-w-lg mx-auto text-lg">
                Capture the energy behind the camera. Our BTS video give your clients a glimpse into your shoots, perfect for social sharing.
             </p>
         </div>
         <div className="absolute bottom-12 right-12 text-xs font-bold uppercase tracking-widest text-white/50">
             Shot at FashionOS Studio A
         </div>
      </section>

      {/* 8. Trust Section */}
      <section className="py-20 bg-black text-white border-b border-gray-900">
         <div className="max-w-[1400px] mx-auto px-6 text-center">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 block">Trusted by Major Retail Brands</span>
             <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 {['GUCCI', 'PRADA', 'NIKE', 'ZARA', 'H&M', 'VOGUE'].map(brand => (
                    <span key={brand} className="text-3xl font-serif font-bold">{brand}</span>
                 ))}
             </div>
         </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Ecom On-Model Fashion FAQs</h2>
            <div className="space-y-2">
                <AccordionItem 
                    question="What is included in the photography and videography packages?" 
                    answer="Our packages include a professional photographer/videographer, studio rental, and lighting. You'll receive a minimum of 40 images/video files for a half-day session or 70 images/video files for a full-day session. Both still images and video can be captured on the same set." 
                />
                <AccordionItem 
                    question="Do you provide models for the shoot?" 
                    answer="We can handle full casting through our Fashion Directory. We have a roster of verified models, or we can work with your preferred agency." 
                />
                 <AccordionItem 
                    question="How long does post-production take?" 
                    answer="Our standard turnaround is 48 hours for proofs and 3-5 business days for final retouched assets. Rush delivery is available upon request." 
                />
                <AccordionItem 
                    question="Can I bring my own stylist?" 
                    answer="Absolutely. We love collaboration. If you don't have one, we can provide an experienced fashion stylist from our team." 
                />
            </div>
            <div className="text-center mt-12">
               <Link to="/contact">
                   <Button variant="ghost">Have more questions? Contact Us</Button>
               </Link>
            </div>
         </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
         <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { 
                      text: "We've happily worked with FashionOS for a couple of seasons. Their desire to always improve what they can offer us and the quality of their photography is something we value extremely highly.",
                      name: "Michael Wheeler",
                      role: "Art Director, Stitchd"
                  },
                  { 
                      text: "The team at FashionOS are both highly professional and knowledgeable. I trust them to deliver high-quality fashion images that perfectly align with our brand and business needs.",
                      name: "Catarina Fernandes",
                      role: "Marketing Manager, Hervé"
                  },
                  { 
                      text: "FashionOS's expertise in lighting helped us achieve outstanding results. We have proudly used their photographs across all our marketing materials.",
                      name: "Gurdeep Bains",
                      role: "Global Creative Director, YuMe"
                  }
               ].map((t, i) => (
                  <div key={i} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100/50">
                      <div className="text-purple-400 text-4xl font-serif mb-6">"</div>
                      <p className="text-gray-600 italic leading-relaxed mb-8 min-h-[100px]">{t.text}</p>
                      <div>
                          <h4 className="font-bold text-black">{t.name}</h4>
                          <span className="text-xs text-gray-400 uppercase tracking-widest">{t.role}</span>
                      </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 11. Additional Highlights */}
      <section className="py-24 px-6 lg:px-12 bg-white">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="bg-gray-50 p-12 rounded-3xl flex flex-col items-start">
                 <h3 className="text-3xl font-serif font-medium mb-4">Our Campaign Fashion <br/> Photography Service</h3>
                 <p className="text-gray-500 mb-8 leading-relaxed">
                     Rest assured, we're well-equipped and fully prepared for your more creative shoots. We can supply everything you need, from our in-house fashion photographer, digital operator, stylist, models, and hair and make-up artists through to set designers.
                 </p>
                 <div className="mt-auto">
                    <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=600" className="w-full h-64 object-cover rounded-xl mb-6" alt="Campaign" />
                    <Button variant="outline">Explore Campaigns</Button>
                 </div>
             </div>
             <div className="bg-gray-50 p-12 rounded-3xl flex flex-col items-start">
                 <h3 className="text-3xl font-serif font-medium mb-4">Our Studio Locations</h3>
                 <p className="text-gray-500 mb-8 leading-relaxed">
                     Our studios are designed to accommodate large scale fashion shoots. We have two large 1500 sq. ft studios with climate control, extensive HMUA and changing areas. With our high wifi speeds and comfortable surroundings, our clients can relax.
                 </p>
                 <div className="mt-auto">
                    <img src="https://images.unsplash.com/photo-1595515106967-0f6fa6bc1144?q=80&w=600" className="w-full h-64 object-cover rounded-xl mb-6" alt="Studio" />
                    <Button variant="outline">View Studio Specs</Button>
                 </div>
             </div>
         </div>
      </section>

      {/* 12. Final CTA */}
      <section className="py-32 px-6 bg-white text-center">
         <div className="max-w-2xl mx-auto">
             <h2 className="text-5xl font-serif font-medium mb-6">Let's create something <br/>extraordinary.</h2>
             <p className="text-gray-500 text-lg mb-10">Ready to elevate your brand imagery? Start your brief today.</p>
             <Link to="/start-project">
                <Button size="lg" className="bg-black text-white px-12 h-14 text-sm">Start Your Brief</Button>
             </Link>
         </div>
      </section>
      
    </div>
  );
}