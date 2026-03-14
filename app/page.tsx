"use client";

import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <FeaturedProject />
        <Projects />
        <Experience />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
