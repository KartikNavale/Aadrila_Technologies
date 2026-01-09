import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const RootLayout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,  
      smoothWheel: true,
      smoothTouch: true,  
      touchMultiplier: 1.2,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

//  AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,  
      offset: 120,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 container-fluid p-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
