import { projects } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { RiGithubFill, RiGlobalLine, RiGlobeLine } from "react-icons/ri";

const Project = () => {
  return (
    <section className="py-20 mb-[60vh]">
      <div className="container border-t border-neutral-300">
        <div className="flex items-center gap-4 py-4">
          <div className="shrink-0 hidden sm:block">
            <Image
              src={"/images/portfolio.png"}
              alt=""
              width={120}
              height={120}
              className="w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-6xl font-bold uppercase">
            Selected{" "}
            <span
              className=""
              style={{
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              Projects
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-7 mt-12">
          {projects.map((project) => (
            <div
              className="px-2 py-2 border border-neutral-900 overflow-hidden shadow-[4px-4px-0-0] max-w-160 mx-auto"
              key={project.id}
            >
              <div className="relative bg-neutral-900/90 rounded-lg overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={793}
                  height={420}
                  className="rounded-md w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-950/10" />
              </div>
              <div className="p-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p>{project.desc}</p>
              </div>
              <div className="flex flex-wrap items-center justify-between py-4 gap-5">
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={"#"}
                    className="btn flex items-center gap-2 font-semibold"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <RiGlobalLine />
                      Live Demo
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="btn flex items-center gap-2 font-semibold"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <RiGithubFill />
                      Source code
                    </span>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tools.map((tool) => (
                    <p key={tool} className="border px-2 rounded-full">
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
