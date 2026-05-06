import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <div className="w-full sticky top-0 left-0 z-50 pb-1 pt-2 border-b border-gray-100 bg-white/60 backdrop-blur-2xl">
      {/* Mobile Menu */}
      <nav className="container flex items-center justify-between gap-8.5 lg:hidden">
        <Link href={"/"}>
          <Image
            src="/images/img.jpg"
            alt="logo"
            className="w-full h-full object-cover"
            width={47}
            height={47}
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-7">
          <CustomLink
            herf="#projects"
            label="Projects"
            className="uppercase font-semibold"
          />

          <CustomLink
            herf="#about"
            label="Projects"
            className="uppercase font-semibold"
          />
        </div>
      </nav>

      <nav className="container lg:flex items-center justify-center gap-8.5 hidden">
        <nav className="uppercase font-semibold">
          <CustomLink herf="#projects" label="Projects" className="" />
          <Link href={"/"}>
            <Image
              src="/images/img.jpg"
              alt="logo"
              className="w-full h-full object-cover"
              width={47}
              height={47}
            />
          </Link>
          <CustomLink
            herf="#about"
            label="Projects"
            className="uppercase font-semibold"
          />
        </nav>
      </nav>
    </div>
  );
};

export default Header;
