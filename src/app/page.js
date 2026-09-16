import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import AllProjects from '@/components/sections/AllProjects';
import WhatICanDo from '@/components/sections/WhatICanDo';
import Workflow from '@/components/sections/Workflow';
import Technologies from '@/components/sections/Technologies';
import Testimonials from '@/components/sections/Testimonials';
import AboutMe from '@/components/sections/AboutMe';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <AllProjects />
      <WhatICanDo />
      <Workflow />
      <Technologies />
      <Testimonials />
      <AboutMe />
      <FAQ />
      <Contact />
    </main>
  );
}
