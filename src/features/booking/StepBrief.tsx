import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import Textarea from '../../components/ui/Textarea';
import Button from '../../components/ui/Button';
import { Sparkles } from 'lucide-react';
import { polishBrief } from '../../lib/ai-service';

export default function StepBrief() {
  const { creativeBrief, setCreativeBrief } = useBooking();
  const [isPolishing, setIsPolishing] = useState(false);

  const handleAiPolish = async () => {
    if (!creativeBrief) return;
    setIsPolishing(true);
    try {
        // Call the AI service (mocked or real)
        const polished = await polishBrief(creativeBrief);
        setCreativeBrief(polished);
    } catch (error) {
        console.error("AI Polish failed", error);
    } finally {
        setIsPolishing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm uppercase tracking-wide">
                <Sparkles size={16} />
                <span>AI Creative Assistant</span>
            </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">
            Describe your vision roughly, and our AI will structure it into a professional production brief.
        </p>
        <Textarea 
            placeholder="E.g. I want a 90s minimalism vibe, shot on a rooftop, with natural light..."
            value={creativeBrief}
            onChange={(e) => setCreativeBrief(e.target.value)}
            className="min-h-[200px] bg-white"
        />
        <div className="mt-4 flex justify-end">
            <Button 
                variant="secondary" 
                size="sm" 
                onClick={handleAiPolish} 
                isLoading={isPolishing}
                icon={Sparkles}
                disabled={!creativeBrief || creativeBrief.length < 10}
            >
                Polish with Gemini
            </Button>
        </div>
      </div>
    </div>
  );
}