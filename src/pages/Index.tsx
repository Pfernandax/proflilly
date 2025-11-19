import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Subjects from "@/components/Subjects";
import Methodology from "@/components/Methodology";
import FormSection from "@/components/FormSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-['Inter',sans-serif]">
      <Header />
      <main>
        <Hero />
        <Subjects />
        <Methodology />
        <FormSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
