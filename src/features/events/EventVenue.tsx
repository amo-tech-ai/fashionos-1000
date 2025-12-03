import React from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { MapPin, Search } from 'lucide-react';

export default function EventVenue() {
  return (
    <div className="space-y-6">
        <Card>
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Venue Details</h3>
                <Button variant="outline" size="sm">Change Venue</Button>
            </div>
            
            <div className="aspect-video bg-gray-100 rounded-xl mb-6 flex items-center justify-center text-gray-400 relative overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop)'}}></div>
                <div className="z-10 flex flex-col items-center bg-white/90 p-4 rounded-xl backdrop-blur-sm">
                    <MapPin className="mb-2 text-purple-600" />
                    <span className="font-bold text-black">Grand Palais</span>
                    <span className="text-xs text-gray-500">3 Av. du Général Eisenhower, Paris</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                    <span className="block text-xs text-gray-500 uppercase">Capacity</span>
                    <span className="font-bold text-lg">1,200</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                    <span className="block text-xs text-gray-500 uppercase">Access</span>
                    <span className="font-bold text-lg">08:00 - 23:00</span>
                </div>
            </div>
        </Card>

        <Card className="bg-purple-50 border-purple-100">
            <h4 className="font-bold text-purple-900 mb-2">AI Scout</h4>
            <p className="text-sm text-purple-700 mb-4">Need nearby suppliers? Ask the scout.</p>
            <div className="flex gap-2">
                <Input placeholder="Find caterers near Grand Palais..." className="h-10 bg-white border-purple-200" />
                <Button size="sm" icon={Search}>Find</Button>
            </div>
        </Card>
    </div>
  );
}