import Hero from '@/components/sections/Hero';
import TechMarquee from '@/components/sections/TechMarquee';
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
      <TechMarquee />
      <AboutMe />
      <Services />
      <WhatICanDo />
      <FeaturedProjects />
      <AllProjects />
      <Workflow />
      <Technologies />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
