"use client";

import Image from "next/image";
import CustomLink from "./CustomLink";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";

const Hero = () => {
  useGSAP(() => {
    const split = SplitText.create(".hero-text", { type: "words,lines" });

    const words = split.words;

    gsap.fromTo(
      words,
      {
        opacity: 0,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        ease: "power2.inOut",
        stagger: {
          each: 0.09,
          from: "start",
        },
      },
    );

    return () => split.revert();
  });
  return (
    <section className="pt-20 pb-10">
      <div className="container flex flex-col items-center">
        <div className="size-24 bg-black flex rounded-full overflow-hidden">
          <Image
            src="/images/img.jpg"
            alt="my photo"
            width={160}
            height={160}
          />
        </div>
        <div className="text-center mt-4 space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-6xl uppercase w-full h-full text-neutral-900/90">
            Mohammad Amin a <br />{" "}
            <span
              style={{
                WebkitTextStroke: "1px #171717",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              Fullstack
            </span>{" "}
            developer.
          </h1>
          <p className="hero-text mx-auto text-neutral-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            esse deleniti autem eveniet consequuntur! Placeat praesentium
            quisquam omnis doloribus quam veniam, pariatur aut cum excepturi!
            Necessitatibus in omnis aspernatur? Voluptatem?
          </p>
          <CustomLink
            label="More about me"
            href="#"
            className="text-xl font-semibold"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
