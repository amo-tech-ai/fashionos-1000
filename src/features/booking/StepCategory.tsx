import React from 'react';
import { useBooking, Category, ServiceType } from '../../context/BookingContext';
import Card from '../../components/ui/Card';
import { Camera, Video, Layers, ShoppingBag, Instagram, BookOpen, Megaphone } from 'lucide-react';
import { clsx } from 'clsx';

export default function StepCategory() {
  const { category, setCategory, serviceType, setServiceType } = useBooking();

  const categories: { id: Category; label: string; icon: any; desc: string }[] = [
    { id: 'lookbook', label: 'Lookbook', icon: BookOpen, desc: 'Seasonal collection showcase' },
    { id: 'e-comm', label: 'E-Commerce', icon: ShoppingBag, desc: 'White background product shots' },
    { id: 'campaign', label: 'Ad Campaign', icon: Megaphone, desc: 'High concept editorial' },
    { id: 'social', label: 'Social Content', icon: Instagram, desc: 'Vertical video & lifestyle' },
  ];

  const services: { id: ServiceType; label: string; icon: any }[] = [
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'video', label: 'Video', icon: Video },
    { id: 'hybrid', label: 'Hybrid', icon: Layers },
  ];

  return (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Select Service</label>
        <div className="grid grid-cols-3 gap-4">
            {services.map((s) => (
                <button
                    key={s.id}
                    onClick={() => setServiceType(s.id)}
                    className={clsx(
                        "flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-200",
                        serviceType === s.id 
                            ? "bg-black text-white border-black ring-2 ring-purple-200" 
                            : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                    )}
                >
                    <s.icon size={24} className="mb-2" />
                    <span className="text-xs font-bold uppercase tracking-wide">{s.label}</span>
                </button>
            ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Select Category</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((c) => (
                <Card 
                    key={c.id} 
                    className={clsx(
                        "cursor-pointer transition-all duration-200 border-2",
                        category === c.id ? "border-purple-500 ring-1 ring-purple-500" : "border-transparent"
                    )}
                    onClick={() => setCategory(c.id)}
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className={clsx(
                            "p-3 rounded-full",
                            category === c.id ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-500"
                        )}>
                            <c.icon size={20} />
                        </div>
                        {category === c.id && <div className="w-3 h-3 bg-purple-500 rounded-full" />}
                    </div>
                    <h3 className="font-bold text-lg mb-1">{c.label}</h3>
                    <p className="text-sm text-gray-500">{c.desc}</p>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}