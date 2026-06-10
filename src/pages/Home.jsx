import HeroSection from "../components/home/HeroSection";
import PhilosophySection from "../components/home/PhilosophySection";
import AboutSection from "../components/home/AboutSection";
import CurrentFocusSection from "../components/home/CurrentFocusSection";
import PrinciplesSection from "../components/home/PrinciplesSection";
import FooterSection from "../components/home/FooterSection";
import FloatingNav from "../components/home/FloatingNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <FloatingNav />
      <HeroSection />
      <PhilosophySection />
      <AboutSection />
      <CurrentFocusSection />
      <PrinciplesSection />
      <FooterSection />
    </div>
  );
}