import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClassesSection from "@/components/ClassesSection";
import AboutSection from "@/components/AboutSection";
import TimetableSection from "@/components/TimetableSection";
import MembershipSection from "@/components/MembershipSection";
import PersonalTrainingSection from "@/components/PersonalTrainingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function MuayThaiGym() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <ClassesSection />
      <AboutSection />
      <TimetableSection />
      <MembershipSection />
      <PersonalTrainingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
