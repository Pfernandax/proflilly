import HeaderV2 from "@/components/HeaderV2";
import HeroV2 from "@/components/HeroV2";
import SubjectsV2 from "@/components/SubjectsV2";
import MethodologyV2 from "@/components/MethodologyV2";
import FormSection from "@/components/FormSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const IndexV2 = () => {
  return (
    <div className="min-h-screen font-['Inter',sans-serif] overflow-x-hidden">
      <HeaderV2 />
      <main>
        <HeroV2 />
        <SubjectsV2 />
        <MethodologyV2 />
        <FormSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default IndexV2;
