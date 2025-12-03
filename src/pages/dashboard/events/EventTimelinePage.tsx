import React from 'react';
import EventTimeline from '../../../features/events/EventTimeline';

export default function EventTimelinePage() {
  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-500">
        <h1 className="text-2xl font-serif font-bold mb-6">Run of Show & Timeline</h1>
        <EventTimeline />
    </div>
  );
}