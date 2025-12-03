import React from 'react';
import EventVenue from '../../../features/events/EventVenue';

export default function EventLogisticsPage() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
        <h1 className="text-2xl font-serif font-bold mb-6">Logistics & Venue</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EventVenue />
            <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-lg mb-4">Transport & Parking</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between border-b border-gray-50 pb-2">
                            <span>VIP Parking Spots</span>
                            <span className="font-bold">20 Reserved</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-50 pb-2">
                            <span>Equipment Loading</span>
                            <span className="font-bold">Gate 4</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}