import React from 'react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { MoreHorizontal, Plus } from 'lucide-react';
import Button from '../../components/ui/Button';

interface Sponsor {
    id: string;
    name: string;
    industry: string;
    value: string;
    status: 'lead' | 'contacted' | 'negotiating' | 'signed';
}

const mockSponsors: Sponsor[] = [
    { id: '1', name: 'Vogue Tech', industry: 'Media', value: '$50k', status: 'negotiating' },
    { id: '2', name: 'LuxeWater', industry: 'Beverage', value: '$15k', status: 'signed' },
    { id: '3', name: 'SoundSystem', industry: 'Tech', value: '$25k', status: 'lead' },
    { id: '4', name: 'BeautyCo', industry: 'Beauty', value: '$30k', status: 'contacted' },
    { id: '5', name: 'EcoFabric', industry: 'Textile', value: '$10k', status: 'lead' },
];

const columns = [
    { id: 'lead', label: 'Leads' },
    { id: 'contacted', label: 'Contacted' },
    { id: 'negotiating', label: 'Negotiating' },
    { id: 'signed', label: 'Signed' },
];

export default function SponsorPipeline() {
  return (
    <div className="h-[calc(100vh-200px)] flex flex-col">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Pipeline</h2>
            <Button size="sm" icon={Plus}>Add Sponsor</Button>
        </div>
        
        <div className="flex-1 overflow-x-auto">
            <div className="flex gap-6 min-w-max h-full pb-4">
                {columns.map((col) => (
                    <div key={col.id} className="w-80 flex flex-col">
                        <div className="flex items-center justify-between mb-4 px-2">
                            <span className="font-bold text-sm uppercase tracking-wider text-gray-500">{col.label}</span>
                            <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                {mockSponsors.filter(s => s.status === col.id).length}
                            </span>
                        </div>
                        <div className="bg-gray-50/50 rounded-2xl p-3 flex-1 border border-dashed border-gray-200 space-y-3">
                            {mockSponsors.filter(s => s.status === col.id).map(sponsor => (
                                <Card key={sponsor.id} className="p-4 cursor-grab active:cursor-grabbing hover:shadow-md">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="neutral">{sponsor.industry}</Badge>
                                        <button className="text-gray-400 hover:text-black">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </div>
                                    <h4 className="font-bold text-gray-900">{sponsor.name}</h4>
                                    <p className="text-sm text-gray-500 mt-1 font-mono">{sponsor.value}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}