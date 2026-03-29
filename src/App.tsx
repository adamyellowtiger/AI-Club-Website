import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutSection from './sections/AboutSection';
import AIBitsSection from './sections/AIBitsSection';
import FaqSection from './sections/FaqSection';
import HeroSection from './sections/HeroSection';
import JoinSection from './sections/JoinSection';
import MeetingsSection from './sections/MeetingsSection';
import PromptathonSection from './sections/PromptathonSection';
import ProjectsSection from './sections/ProjectsSection';
import ResourcesSection from './sections/ResourcesSection';
import TeamSection from './sections/TeamSection';
import WhatWeDoSection from './sections/WhatWeDoSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatWeDoSection />
        <PromptathonSection />
        <MeetingsSection />
        <AIBitsSection />
        <ResourcesSection />
        <TeamSection />
        <FaqSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
