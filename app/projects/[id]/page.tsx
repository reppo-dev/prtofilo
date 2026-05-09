import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";
import { projects } from "@/data/data";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>; // ← Promise
}) {
  const { id } = await params; // ← await کن
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-950 w-screen text-white">
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-12">
          <h1 className="text-lg md:text-5xl font-bold">{project.title}</h1>
          <div className="flex gap-2 mt-3">
            {project.tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs bg-white/10 rounded-full backdrop-blur"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Overview & Meta */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold border-b border-gray-800 pb-2">
              About the Project
            </h2>
            <p className="text-gray-300 leading-relaxed">{project.overview}</p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400">
                Role
              </h3>
              <p>{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400">
                Duration
              </h3>
              <p>{project.duration}</p>
            </div>
            <div className="flex gap-3">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
                >
                  <RiGithubFill className="w-4 h-4" />
                  Source Code
                </Link>
              )}
              {project.haveLive && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm bg-emerald-700 hover:bg-emerald-600 px-4 py-2 rounded-lg"
                >
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-800 pb-2 mb-6">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">▹</span>
                <span className="text-gray-300">{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold border-b border-gray-800 pb-2 mb-6">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-xl overflow-hidden border border-gray-800"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-800 pb-2 mb-6">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.techStack.map((stack) => (
              <div key={stack.category} className="bg-gray-900 p-5 rounded-xl">
                <h3 className="text-lg font-medium text-emerald-400 mb-3">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Structure */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-800 pb-2 mb-6">
            Project Structure
          </h2>
          <div className="bg-gray-900 p-5 rounded-xl font-mono text-sm text-gray-300 space-y-1 overflow-x-auto">
            {project.structure.map((s) => (
              <div key={s.path} className="flex gap-4">
                <span className="text-emerald-400 whitespace-nowrap">
                  {s.path}
                </span>
                <span className="text-gray-500 hidden md:inline">
                  → {s.description}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-800 pb-2 mb-6">
            Getting Started
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.setup.backend && (
              <div className="bg-gray-900 p-5 rounded-xl">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-blue-400">⚙️</span> Backend
                </h3>
                <pre className="bg-black/50 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                  {project.setup.backend}
                </pre>
              </div>
            )}
            {project.setup.frontend && (
              <div className="bg-gray-900 p-5 rounded-xl">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-blue-400">🖥️</span> Frontend
                </h3>
                <pre className="bg-black/50 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                  {project.setup.frontend}
                </pre>
              </div>
            )}
          </div>
          {project.setup.env && (
            <div className="mt-6 bg-gray-900 p-5 rounded-xl">
              <h3 className="font-medium mb-3">Environment Variables</h3>
              <pre className="bg-black/50 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                {project.setup.env.join("\n")}
              </pre>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
