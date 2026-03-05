import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-slate-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title">Projects Showcase</h2>
        <p className="section-subtitle mb-12">
          Selected enterprise and product projects I've delivered.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="card p-6 flex flex-col"
            >
              <div className="mb-3">
                <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
                  {project.domain}
                </span>
                <p className="text-slate-500 text-xs mt-0.5">
                  {project.company} · {project.duration}
                </p>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.overview}
              </p>

              <div className="mb-4">
                <p className="text-xs font-medium text-primary-400 uppercase tracking-wider mb-2">
                  Technology Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-800 px-2 py-0.5 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1.5">
                  Key Features
                </p>
                <ul className="text-slate-400 text-sm space-y-0.5">
                  {project.keyFeatures.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary-500/80">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1.5">
                  My Contributions
                </p>
                <ul className="text-slate-400 text-sm space-y-0.5">
                  {project.myContributions.map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary-500/80">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-700/80 mt-auto">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                  Impact
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
