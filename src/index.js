import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Services } from "./components/Services/Services";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <AboutMe />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </React.StrictMode>
);
