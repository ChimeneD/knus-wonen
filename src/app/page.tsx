/* eslint-disable @next/next/no-img-element */
"use client";
import React, { Suspense } from "react";
import CTA from "@components/cta";
import Hero from "@components/hero";
import LatestNieuws from "@components/latestNieuws";
import NavBar from "@components/navBar";
import Footer from "@components/footer";
import LoadingComponent from "@components/loading";
import { motion } from "framer-motion";
import { container, items } from "@utils/animations/cta";

const Home = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <main className="overflow-x-hidden">
        <NavBar />
        <Hero />
        <CTA>
          <div className="flex justify-center flex-col lg:flex-row py-4 md:py-0 w-full">
            <motion.img
              src="png/cta-city.png"
              alt="buildings"
              initial={{ opacity: 0, translateY: -1, scale: 0.95 }}
              whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
            />
            <motion.div
              className="flex flex-col justify-between items-start md:h-[372px] lg:w-[597px] w-full"
              initial="hidden"
              whileInView="show"
              variants={container}
            >
              <motion.h1
                className="text-[var(--accent)] md:text-[32px] text-xl font-overlock m-auto md:my-0 lg:m-0"
                variants={items}
              >
                We verbeteren onze woningen
              </motion.h1>
              <motion.article
                className="flex flex-col gap-2 text-xs md:text-base text-center lg:text-left"
                variants={items}
              >
                <motion.p>
                  Bij KnusWonen zetten we ons in om onze woningen
                  energiezuiniger en duurzamer te maken. We verbeteren de
                  isolatie met dubbelglas en plaatsen moderne cv-ketels en
                  zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de
                  energiekosten, en verminderen we de CO2-uitstoot. Ons doel is
                  dat al onze huurders kunnen genieten van een warme, veilige en
                  toekomstbestendige woning.
                </motion.p>
                <motion.p>
                  Wilt u meer weten over onze energiebesparende maatregelen?
                </motion.p>
              </motion.article>
              <motion.button
                className="text-white bg-gradient-to-r from-[var(--gradient-green-from)] to-[var(--gradient-green-to)] px-[24px] py-[8px] rounded-[8px] w-full md:w-auto mt-4 md:my-2 lg:my-0 md:mx-auto lg:mx-0"
                variants={items}
              >
                Lees meer
              </motion.button>
            </motion.div>
          </div>
        </CTA>
        <LatestNieuws />
        <CTA>
          <div className="flex justify-center flex-col lg:flex-row-reverse py-4 md:py-0 w-full">
            <motion.img
              src="png/cta-news.png"
              alt="news"
              initial={{ opacity: 0, translateY: -1, scale: 0.95 }}
              whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
            />
            <motion.div
              className="flex flex-col justify-between items-start md:h-[372px] lg:w-[597px] w-full"
              initial="hidden"
              whileInView="show"
              variants={container}
            >
              <motion.h1
                className="text-[var(--secondary)] md:text-[32px] text-xl font-overlock m-auto md:my-0 lg:m-0"
                variants={items}
              >
                Schrijf je in voor onze nieuwsbrief
              </motion.h1>
              <motion.article
                className="flex flex-col gap-2 text-xs md:text-base text-center lg:text-left"
                variants={items}
              >
                <p>
                  Wil je als eerste op de hoogte zijn van het laatste nieuws
                  over jouw woning en buurt? Schrijf je dan in voor de
                  nieuwsbrief van KnusWonen! Iedere maand sturen we je een
                  update met belangrijk nieuws, praktische tips, en informatie
                  over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt
                  weten wanneer er werkzaamheden gepland zijn, of je
                  geïnteresseerd bent in nieuwe initiatieven in de wijk, onze
                  nieuwsbrief zorgt ervoor dat je niets mist.
                </p>
                <p>
                  Schrijf je vandaag nog in en blijf verbonden met KnusWonen!
                </p>
              </motion.article>
              <motion.button
                className="text-white bg-gradient-to-r from-[var(--gradient-orange-from)] to-[var(--gradient-orange-to)] px-[24px] py-[8px] rounded-[8px] w-full md:w-auto mt-4 md:my-2 lg:my-0 md:mx-auto lg:mx-0"
                variants={items}
              >
                Inschrijven
              </motion.button>
            </motion.div>
          </div>
        </CTA>
        <Footer />
      </main>
    </Suspense>
  );
};

export default Home;
