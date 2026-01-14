import AboutUsHero from "../components/hero/AboutUsHero";
import ContactUs from "../components/layout/ContactUs";
import BlogTitle from "../components/blog/BlogTitle";
import OurTeam from "../components/team/OurTeam";

import useReadingProgress from "../hooks/useReadingProgress";

const About = () => {
  const progressRef = useReadingProgress();
  return (
    <>
      <div className="reading-progress-container">
        <div ref={progressRef} className="reading-progress-bar" />
      </div>
      <AboutUsHero />
      <BlogTitle
        title="Meet our team"
        subtitle="Meet our passionate and talented team, committed to delivering exceptional results,
         driving innovation, and transforming your vision into reality."
        showDots={false}
        compact
      />
      <OurTeam />
      <ContactUs />
    </>
  );
};

export default About;
