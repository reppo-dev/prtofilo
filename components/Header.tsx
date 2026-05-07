import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <div className="w-full sticky top-0 left-0 z-50 pb-1 pt-2 border-b border-gray-100 bg-white/60 backdrop-blur-2xl">
      {/* Mobile Menu */}
      <nav className="container flex items-center justify-between gap-8.5 lg:hidden">
        <div className="flex items-center gap-2 sm:gap-7">
          <CustomLink
            href="#projects"
            label="Projects"
            className="uppercase font-semibold"
          />

          <CustomLink
            href="#about"
            label="Projects"
            className="uppercase font-semibold"
          />
        </div>
      </nav>

      <nav className="container lg:flex  items-center justify-center gap-8 hidden">
        <CustomLink
          href="#projects"
          label="Projects"
          className="uppercase font-semibold"
        />
        <CustomLink
          href="#about"
          label="About"
          className="uppercase font-semibold"
        />
      </nav>
    </div>
  );
};

export default Header;
