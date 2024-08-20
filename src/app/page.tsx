/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import CTA from "@components/cta";
import Hero from "@components/hero";
import LatestNieuws from "@components/latestNieuws";
import NavBar from "@components/navBar";
import Footer from "@components/footer";
import { placementEnum } from "@/types/enums";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <CTA>
        <div className="flex justify-center">
          <img src="png/cta-city.png" alt="buildings" className="" />
          <div className="flex flex-col justify-between items-start h-[372px] w-[597px]">
            <h1 className="text-[var(--accent)] text-[32px] font-overlock">
              We verbeteren onze woningen
            </h1>
            <article className="flex flex-col gap-2 ">
              <p>
                Bij KnusWonen zetten we ons in om onze woningen energiezuiniger
                en duurzamer te maken. We verbeteren de isolatie met dubbelglas
                en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt
                het wooncomfort, dalen de energiekosten, en verminderen we de
                CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten
                van een warme, veilige en toekomstbestendige woning.
              </p>
              <p>Wilt u meer weten over onze energiebesparende maatregelen?</p>
            </article>
            <button>Lees meer</button>
          </div>
        </div>
      </CTA>
      <LatestNieuws />
      <CTA>
        <div className="flex flex-row-reverse">
          <img src="png/cta-news.png" alt="news" />
          <div className="flex flex-col justify-between items-start h-[372px] w-[597px]">
            <h1 className="text-[var(--secondary)] text-[32px] font-overlock">
              Schrijf je in voor onze nieuwsbrief
            </h1>
            <p>
              Wil je als eerste op de hoogte zijn van het laatste nieuws over
              jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van
              KnusWonen! Iedere maand sturen we je een update met belangrijk
              nieuws, praktische tips, en informatie over onderhoudsprojecten en
              buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden
              gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in
              de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist.
            </p>
            <p>Schrijf je vandaag nog in en blijf verbonden met KnusWonen!</p>
            <button>Inschrijven</button>
          </div>
        </div>
      </CTA>
      <Footer />
    </main>
  );
};

export default Home;
