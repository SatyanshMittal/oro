//@ts-nocheck
"use client"
// import React, { useRef } from 'react';
// import Hero from '@/components/Hero';
// import Benefits from '@/components/Benefits';
// import EarlyAccess from '@/components/EarlyAccess';
// import Footer from '@/components/Footer';

// export default function Page() {
//   // Create a ref for the target section (Benefits)
//   const sectionRef = useRef(null);

//   // Function to scroll to the Benefits section
//   const handleScroll = () => {
//     sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="bg-[#0A0E1E] sm:px-10 px-3 w-full overflow-hidden">
//       <Hero handleScroll={handleScroll} />
//       <Benefits ref={sectionRef} />
//       <EarlyAccess />
//       <Footer />
//     </div>
//   );
// }


// page.tsx
import React, { useRef } from 'react'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import EarlyAccess from '@/components/EarlyAccess'
import Footer from '@/components/Footer'

export default function Page() {
  // Create a ref for the benefits section
  const benefitsRef = useRef(null);

  return (
    <div className='bg-[#0A0E1E] sm:px-10 px-3 w-full overflow-hidden'>
      <Hero benefitsRef={benefitsRef} />
      <div ref={benefitsRef}>
        <Benefits />
      </div>
      <EarlyAccess />
    </div>
  )
}