import React from 'react';
import { useBooking } from '../context/BookingContext';
import { Check, ChevronRight, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

interface WizardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function WizardLayout({ children, title, subtitle }: WizardLayoutProps) {
  const { step, nextStep, prevStep, estimatedPrice, category, serviceType, shotCount } = useBooking();

  return (
    <div className="min-h-screen bg-cream flex flex-col md:flex-row font-sans">
      {/* Left Panel: Form */}
      <div className="flex-1 flex flex-col relative">
        <header className="p-6 md:p-12 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900">
                FASHION<span className="text-indigo-600">OS</span>
            </Link>
            <div className="text-sm text-gray-400 font-medium">
                Step {step} of 4
            </div>
        </header>
        
        <main className="flex-1 px-6 md:px-12 max-w-2xl mx-auto w-full pb-24 md:pb-12">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{title}</h1>
                <p className="text-gray-500">{subtitle}</p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {children}
            </div>
        </main>

        {/* Mobile Footer */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 flex items-center justify-between z-50">
            <div>
                <p className="text-xs text-gray-400 uppercase">Total</p>
                <p className="font-bold text-lg">${estimatedPrice}</p>
            </div>
            <div className="flex gap-2">
                {step > 1 && <Button variant="ghost" onClick={prevStep}>Back</Button>}
                <Button onClick={nextStep}>Next</Button>
            </div>
        </div>
      </div>

      {/* Right Panel: Receipt (Desktop) */}
      <div className="hidden md:flex w-96 bg-white border-l border-gray-100 p-12 flex-col sticky top-0 h-screen">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Booking Summary</h2>
        
        <div className="space-y-6 flex-1">
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-bold text-lg capitalize">{category} Shoot</p>
                    <p className="text-sm text-gray-500 capitalize">{serviceType}</p>
                </div>
                <ShoppingBag className="text-gray-300" />
            </div>
            
            <div className="h-px bg-gray-100 my-4" />
            
            <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                    <span>Base Rate ({category})</span>
                    <span>Included</span>
                </div>
                <div className="flex justify-between">
                    <span>Volume</span>
                    <span>{shotCount} looks</span>
                </div>
                <div className="flex justify-between">
                    <span>Service Fee</span>
                    <span>5%</span>
                </div>
            </div>
        </div>

        <div className="mt-auto">
            <div className="flex justify-between items-end mb-8">
                <span className="text-gray-500">Total Estimated</span>
                <span className="text-4xl font-serif font-bold">${estimatedPrice}</span>
            </div>
            <div className="flex gap-4">
                {step > 1 && (
                    <Button variant="outline" onClick={prevStep} className="flex-1">Back</Button>
                )}
                {step < 4 ? (
                    <Button onClick={nextStep} className="flex-1">Continue</Button>
                ) : (
                    <Button onClick={() => alert('Booking Submitted!')} className="flex-1 bg-success hover:bg-green-700">Confirm</Button>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}