import HeroSection from "../components/hero/HeroSection";
import IndustriesSection from "../components/industries/IndustriesSection";
import OurProductsTitle from "../components/products/OurProductsTitle";
import OurProductRight from "../components/products/OurProductRight";
import OurProductLeft from "../components/products/OurProductLeft";
import BlogTitle from "../components/blog/BlogTitle";
import BlogCarousel from "../components/blog/BlogCarousel";
import ContactUs from "../components/layout/ContactUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <OurProductsTitle />
      <OurProductRight
        badge="DocSim"
        title={<>AI-Powered Document Similarity Engine</>}
        features={[
          "Detects near-duplicates and tampered documents.",
          "Identifies fraudulent patterns across large repositories.",
          "Multi-language support for global adaptability.",
        ]}
        benefits={[
          "Save 30% time on manual checks.",
          "Reduce document fraud by up to 40%.",
        ]}
        image="/card-img-1.png"
      />
      <OurProductLeft
        badge="DocPilot"
        title={<>Streamline Document Workflows with Automation</>}
        features={[
          "Automates document collection, routing, and task assignments.",
          "Real-time tracking with advanced dashboards.",
          "Seamless integration with enterprise systems via APIs.",
        ]}
        benefits={[
          "Reduce turnaround times by 50%.",
          "Improve operational efficiency with minimal manual effort.",
        ]}
        image="/card-img-2.png"
      />
      <OurProductRight
        badge="Doxtract"
        title={<>Extract, Validate, and Process Documents with Ease</>}
        features={[
          "OCR and NLP-based data extraction.",
          "Handles unstructured documents across industries.",
          "Validates fields using external data sources.",
        ]}
        benefits={[
          "Process 10,000+ documents in minutes.",
          "Achieve 99% data accuracy with AI-driven validation.",
        ]}
        image="/card-img-3.png"
      />
      <BlogTitle
        title="Blog"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      <BlogCarousel />
      <ContactUs />
    </>
  );
};

export default Home;
