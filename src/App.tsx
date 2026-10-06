import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import { AIBitArchive } from "./sections/AIBitsSection";
import ProgramRoadmap from "./components/ProgramRoadmap";
import HeroSection from "./sections/HeroSection";
import JoinSection from "./sections/JoinSection";
import MeetingsSection from "./sections/MeetingsSection";
import MeetingHistory from "./sections/MeetingHistory";
import ResourcesSection from "./sections/ResourcesSection";
import TeamSection from "./sections/TeamSection";
import WhatWeDoSection from "./sections/WhatWeDoSection";
import HomePreview from "./sections/HomePreview";
import { pages, readRoute, routeHref } from "./navigation";
export default function App() {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const update = () => setRoute(readRoute());
    const sameRouteClick = (event: MouseEvent) => {
      const link =
        event.target instanceof Element ? event.target.closest("a") : null;
      if (link?.hash === window.location.hash && link.hash.startsWith("#/"))
        update();
    };
    document.addEventListener("click", sameRouteClick);
    const canonical = routeHref(route.page, route.anchor);
    if (
      window.location.hash !== canonical ||
      new URLSearchParams(window.location.search).has("view")
    ) {
      const url = new URL(window.location.href);
      url.searchParams.delete("view");
      url.hash = canonical;
      window.history.replaceState(null, "", url);
    }
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("hashchange", update);
      document.removeEventListener("click", sameRouteClick);
    };
  }, []);
  useEffect(() => {
    document.title = pages[route.page].title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", pages[route.page].description);
    const frame = requestAnimationFrame(() => {
      if (route.anchor && route.page !== "program") {
        document
          .getElementById(route.anchor)
          ?.scrollIntoView({ block: "start" });
      } else if (!route.anchor) {
        window.scrollTo({ top: 0, behavior: "instant" });
        document
          .querySelector<HTMLElement>("main h1")
          ?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [route]);
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>
      <Navbar active={route.page} />
      <main id="main" tabIndex={-1} className={`page-view page-${route.page}`}>
        {route.page !== "home" && <PageHeader page={route.page} />}
        {route.page === "home" && (
          <>
            <HeroSection />
            <MeetingsSection />
            <HomePreview />
          </>
        )}
        {route.page === "program" && (
          <>
            <ProgramRoadmap />
            <WhatWeDoSection />
          </>
        )}
        {route.page === "meetings" && (
          <>
            <MeetingsSection />
            <MeetingHistory />
          </>
        )}
        {route.page === "ai-bits" && <AIBitArchive />}
        {route.page === "resources" && <ResourcesSection />}
        {route.page === "team" && <TeamSection />}
        {route.page === "join" && <JoinSection />}
      </main>
      <Footer />
    </>
  );
}
