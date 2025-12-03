import React from 'react';
import { BookingProvider, useBooking } from '../../context/BookingContext';
import WizardLayout from '../../layouts/WizardLayout';
import StepCategory from '../../features/booking/StepCategory';
import StepQuantity from '../../features/booking/StepQuantity';
import StepBrief from '../../features/booking/StepBrief';
import StepReview from '../../features/booking/StepReview';

function WizardContent() {
  const { step } = useBooking();

  let content;
  let title = '';
  let subtitle = '';

  switch (step) {
    case 1:
        title = "What are we creating?";
        subtitle = "Choose the type of content you need for your brand.";
        content = <StepCategory />;
        break;
    case 2:
        title = "How much content?";
        subtitle = "Define the scale of your production.";
        content = <StepQuantity />;
        break;
    case 3:
        title = "The Creative Vision";
        subtitle = "Brief the team on style, mood, and requirements.";
        content = <StepBrief />;
        break;
    case 4:
        title = "Review & Confirm";
        subtitle = "Double check the details before we send the proposal.";
        content = <StepReview />;
        break;
    default:
        content = null;
  }

  return (
    <WizardLayout title={title} subtitle={subtitle}>
        {content}
    </WizardLayout>
  );
}

export default function StartProjectPage() {
  return (
    <BookingProvider>
        <WizardContent />
    </BookingProvider>
  );
}