import React, { createContext, useContext, useState, useEffect } from 'react';

export type ServiceType = 'photography' | 'video' | 'hybrid';
export type Category = 'e-comm' | 'lookbook' | 'campaign' | 'social';

interface BookingState {
  serviceType: ServiceType;
  category: Category;
  shotCount: number;
  date: Date | null;
  creativeBrief: string;
  estimatedPrice: number;
}

interface BookingContextType extends BookingState {
  setServiceType: (type: ServiceType) => void;
  setCategory: (cat: Category) => void;
  setShotCount: (count: number) => void;
  setDate: (date: Date | null) => void;
  setCreativeBrief: (brief: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  step: number;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>('photography');
  const [category, setCategory] = useState<Category>('lookbook');
  const [shotCount, setShotCount] = useState<number>(10);
  const [date, setDate] = useState<Date | null>(null);
  const [creativeBrief, setCreativeBrief] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Simple pricing logic
  useEffect(() => {
    let baseRate = 0;
    switch (category) {
      case 'e-comm': baseRate = 50; break;
      case 'social': baseRate = 80; break;
      case 'lookbook': baseRate = 150; break;
      case 'campaign': baseRate = 300; break;
    }

    if (serviceType === 'video') baseRate *= 1.5;
    if (serviceType === 'hybrid') baseRate *= 2;

    setEstimatedPrice(baseRate * shotCount);
  }, [category, serviceType, shotCount]);

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <BookingContext.Provider value={{
      step,
      serviceType,
      category,
      shotCount,
      date,
      creativeBrief,
      estimatedPrice,
      setServiceType,
      setCategory,
      setShotCount,
      setDate,
      setCreativeBrief,
      nextStep,
      prevStep
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within a BookingProvider');
  return context;
};