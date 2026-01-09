import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

import RootLayout from "./RootLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Industries from "./pages/industries";
import Products from "./pages/products";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import SplashScreen from "./components/common/SplashScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "industries", element: <Industries /> },
      { path: "products", element: <Products /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <RouterProvider router={router} />;
}

export default App;
