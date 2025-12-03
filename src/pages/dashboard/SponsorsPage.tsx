import React from 'react';
import SponsorPipeline from '../../features/crm/SponsorPipeline';

export default function SponsorsPage() {
  return (
    <div className="animate-in fade-in duration-500">
        <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-900">Sponsorships</h1>
            <p className="text-gray-500">Manage brand partnerships and deal flow.</p>
        </div>
        <SponsorPipeline />
    </div>
  );
}