import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
          <div className="relative z-0"></div>
        </div>
      ),
    },
  ],
  {
    // Add this to the 'future' section in the configuration:
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true, // Enable the new relative splat resolution behavior
    },
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
