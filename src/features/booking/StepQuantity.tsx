import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { Shirt, Image as ImageIcon } from 'lucide-react';

export default function StepQuantity() {
  const { shotCount, setShotCount } = useBooking();

  return (
    <div className="space-y-12 py-8">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
        <div className="text-6xl font-serif font-bold text-black mb-2">
            {shotCount}
        </div>
        <p className="text-gray-500 font-medium uppercase tracking-wide">Looks / Products</p>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Adjust Volume</label>
        <input 
            type="range" 
            min="1" 
            max="100" 
            value={shotCount} 
            onChange={(e) => setShotCount(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
        <div className="flex justify-between text-xs text-gray-400 font-mono">
            <span>1 Look</span>
            <span>100 Looks</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
         <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl text-purple-800 text-sm">
            <Shirt size={20} />
            <span>Wardrobe styling included</span>
         </div>
         <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl text-purple-800 text-sm">
            <ImageIcon size={20} />
            <span>5 Retouched photos per look</span>
         </div>
      </div>
    </div>
  );
}