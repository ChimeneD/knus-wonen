import React from "react";
import CTA from "@components/cta";
import Hero from "@components/hero";
import LatestNieuws from "@components/latestNieuws";
import NavBar from "@components/navBar";
import { placementEnum } from "@/types/enums";
import Footer from "@components/footer";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <CTA placement={placementEnum.right} />
      <LatestNieuws />
      <CTA placement={placementEnum.left} />
      <Footer />
    </main>
  );
};

export default Home;
