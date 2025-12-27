 import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const RootLayout = () => {
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
