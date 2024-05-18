import { Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Company from "./pages/Company";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="services" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:title/:id" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
