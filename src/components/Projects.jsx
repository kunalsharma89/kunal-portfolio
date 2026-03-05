import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-slate-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title">Projects Showcase</h2>
        <p className="section-subtitle mb-12">
          Selected enterprise and product projects I've delivered.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="card p-6 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="mb-4">
                <p className="text-xs font-medium text-primary-400 uppercase tracking-wider mb-2">
                  Technology Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-800 px-2.5 py-1 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700/80">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                  Key Impact
                </p>
                <p className="text-slate-300 text-sm">
                  {project.impact}
                </p>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
              >
                View on GitHub
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
