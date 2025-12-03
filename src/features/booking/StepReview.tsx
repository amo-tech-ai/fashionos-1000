import React from 'react';
import { useBooking } from '../../context/BookingContext';
import Card from '../../components/ui/Card';

export default function StepReview() {
  const { category, serviceType, shotCount, creativeBrief, estimatedPrice } = useBooking();

  return (
    <div className="space-y-8">
      <Card className="bg-gray-50 border-gray-200">
        <h3 className="font-serif font-bold text-2xl mb-6">Production Overview</h3>
        
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
            <div>
                <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Service Type</dt>
                <dd className="font-medium text-lg capitalize">{serviceType}</dd>
            </div>
            <div>
                <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Category</dt>
                <dd className="font-medium text-lg capitalize">{category}</dd>
            </div>
            <div>
                <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Volume</dt>
                <dd className="font-medium text-lg">{shotCount} Looks</dd>
            </div>
            <div>
                <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Estimated Total</dt>
                <dd className="font-medium text-lg text-green-600 font-serif">${estimatedPrice}</dd>
            </div>
        </dl>
      </Card>

      <div>
        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">Creative Brief</h4>
        <div className="p-6 bg-white rounded-2xl border border-gray-200 italic text-gray-700 leading-relaxed">
            "{creativeBrief || 'No brief provided yet.'}"
        </div>
      </div>
    </div>
  );
}