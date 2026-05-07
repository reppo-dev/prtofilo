"use client";

import { RiFileCopyLine } from "react-icons/ri";
import CustomLink from "./CustomLink";

const Footer = () => {
  const handleCopyEmail = () => {
    const email = "Youremail@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setTimeout(() => 2000);
    });
  };
  return (
    <footer className="bg-neutral-950 z-0 text-white h-[60vh] fixed pt-10 bottom-0 w-full">
      <div className="container space-y-9 flex flex-col justify-center h-full">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {["Email", "Linkedin"].map((link) => (
              <CustomLink key={link} label={link} href="#" />
            ))}
          </div>
          <div className="flex gap-3">
            {["Twitter", "Whatsup"].map((link) => (
              <CustomLink key={link} label={link} href="#" />
            ))}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <h4 className="text-4xl sm:text-5xl text-nowrap uppercase font-bold">
            reppovn <br />
            @gmail.com
          </h4>
          <button
            onClick={handleCopyEmail}
            className="border flex items-center gap-0.5 py-1.5 px-3.5 rounded-full hover:bg-white hover:text-neutral-900 focus:bg-white focus:text-neutral-900 transition-colors font-semibold"
          >
            <RiFileCopyLine />
          </button>
        </div>
        <p className="border-t border-neutral-900 pt-1.5 mt-auto">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
