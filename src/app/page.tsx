import Hero from "@/components/home/Hero";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import Roles from "@/components/home/Roles";
import AboutSection from "@/components/home/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <Roles />
      <AboutSection />
    </>
  );
}