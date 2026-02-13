import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy, Suspense, useEffect, useState } from "react";

import RootLayout from "./RootLayout";
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Industries = lazy(() => import("./pages/industries"));
const Products = lazy(() => import("./pages/products"));
const Blog = lazy(() => import("./pages/blog"));
const Contact = lazy(() => import("./pages/contact"));
const SplashScreen = lazy(() => import("./components/common/SplashScreen"));

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

  
  return (<Suspense fallback={<SplashScreen />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
