import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AIBitsSection, { AIBitArchive } from "./sections/AIBitsSection";
import ProgramRoadmap from "./components/ProgramRoadmap";
import HeroSection from "./sections/HeroSection";
import JoinSection from "./sections/JoinSection";
import MeetingsSection from "./sections/MeetingsSection";
import ResourcesSection from "./sections/ResourcesSection";
import TeamSection from "./sections/TeamSection";
import WhatWeDoSection from "./sections/WhatWeDoSection";

export default function App() {
  if (new URLSearchParams(window.location.search).get("view") === "bits")
    return (
      <>
        <AIBitArchive />
        <Footer />
      </>
    );
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <MeetingsSection />
        <ProgramRoadmap />
        <WhatWeDoSection />
        <AIBitsSection />
        <ResourcesSection />
        <TeamSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
