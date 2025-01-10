import React, { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Requierments from "../../components/requierments/Requierments";
import Features from "../../components/features/Features";
import { Helmet } from "react-helmet-async";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="home page" />
      </Helmet>
      <Hero />
      <Requierments />
      <Features />
    </>
  );
}
