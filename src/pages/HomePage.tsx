import HeroSection from "../components/home/sections/HeroSection";
import NewSuitesForYouSection from "../components/home/sections/NewSuitesSection";
import HowDoesItWorkSection from "../components/home/sections/HowDoesItWorkSection";
import BecomeHostSection from "../components/home/sections/BecomeHostSection";
import WhyPeopleChooseUsSection from "../components/home/sections/WhyPeopleChooseUsSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* New Suites For You Section */}
      <NewSuitesForYouSection />

      {/* How Does It Work Section */}
      <HowDoesItWorkSection />

      {/* Become Host Section */}
      <BecomeHostSection />

      {/* Why people choose us Section */}
      <WhyPeopleChooseUsSection />
    </>
  );
}
