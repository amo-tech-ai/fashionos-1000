import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import Card from '../../components/ui/Card';
import { clsx } from 'clsx';

interface TimelineItem {
    id: string;
    title: string;
    date: string;
    status: 'done' | 'active' | 'pending';
}

const phases: TimelineItem[] = [
    { id: '1', title: 'Concept Approval', date: 'Oct 01', status: 'done' },
    { id: '2', title: 'Venue Booking', date: 'Oct 05', status: 'done' },
    { id: '3', title: 'Casting Call', date: 'Oct 10', status: 'active' },
    { id: '4', title: 'Fitting Day', date: 'Oct 12', status: 'pending' },
    { id: '5', title: 'Runway Show', date: 'Oct 14', status: 'pending' },
];

export default function EventTimeline() {
  return (
    <Card className="p-8">
        <h3 className="font-bold text-lg mb-6">Production Timeline</h3>
        <div className="relative pl-4 space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-[23px] top-2 bottom-2 w-0.5 bg-gray-100" />

            {phases.map((phase) => (
                <div key={phase.id} className="relative flex items-center gap-4 group">
                    <div className={clsx(
                        "z-10 w-5 h-5 rounded-full flex items-center justify-center border-2 bg-white transition-colors",
                        phase.status === 'done' ? "border-green-500 text-green-500" :
                        phase.status === 'active' ? "border-purple-500 text-purple-500" :
                        "border-gray-300 text-gray-300"
                    )}>
                        {phase.status === 'done' ? <CheckCircle2 size={14} /> : 
                         phase.status === 'active' ? <Clock size={14} /> : 
                         <Circle size={14} />}
                    </div>
                    <div className={clsx(
                        "flex-1 p-3 rounded-xl border transition-all",
                        phase.status === 'active' ? "bg-purple-50 border-purple-100 shadow-sm" : "border-transparent hover:bg-gray-50"
                    )}>
                        <div className="flex justify-between items-center">
                            <span className={clsx("font-bold text-sm", phase.status === 'pending' && "text-gray-400")}>{phase.title}</span>
                            <span className="text-xs font-mono text-gray-400">{phase.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Card>
  );
}