import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceholderPage from '../../../components/ui/PlaceholderPage';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function EventDashboard() {
  const { id } = useParams();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Event Header */}
      <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="purple">Production</Badge>
            <Badge variant="warning">Planning Phase</Badge>
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">SS25 Runway Show</h1>
          <p className="text-gray-500 mt-1 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1"><Calendar size={14}/> Oct 14, 2025</span>
            <span className="flex items-center gap-1"><MapPin size={14}/> Grand Palais, Paris</span>
          </p>
        </div>
        <div className="flex gap-3">
            <Button variant="secondary" size="sm">Edit Details</Button>
            <Button variant="primary" size="sm">Publish Event</Button>
        </div>
      </div>

      {/* Placeholder for sub-routes if any, or main dashboard widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
            <PlaceholderPage 
                title={`Command Center (${id})`} 
                section="Dashboard" 
                description="This is the central hub for managing this specific event. Timeline, logistics, and casting widgets will live here." 
            />
        </div>
        <div className="space-y-6">
             {/* Mini Widgets */}
             <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Team Access</h3>
                <div className="flex -space-x-2 overflow-hidden mb-4">
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-200"></div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-300"></div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-400"></div>
                </div>
                <Button variant="outline" size="sm" className="w-full">Manage Team</Button>
             </div>
        </div>
      </div>
    </div>
  );
}
