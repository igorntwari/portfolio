import React from 'react';
import LandingPage from '../pages/LandingPage.jsx';
import HelloPage from '../pages/HelloPage.tsx';
import TestimonialsPage from '../pages/TestimonialsPage.tsx';
import StackPage from '../pages/StackPage.tsx';
export default function Home() {
  return (
    <div className='grid grid-cols-4 gap-4 bg-black'>
      <div className='hidden lg:flex'>
        <LandingPage />
      </div>
      <div className='lg:col-span-3 col-span-full'>
        <HelloPage />
        <TestimonialsPage />
        <StackPage />
      </div>
    </div>
  );
}
