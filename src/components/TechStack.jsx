import { techStack } from '../data/portfolio'

const categoryLabels = {
  backend: 'Backend',
  language: 'Language',
  api: 'API',
  architecture: 'Architecture',
  database: 'Database',
  messaging: 'Messaging',
  frontend: 'Frontend',
  devops: 'DevOps',
}

export default function TechStack() {
  const byCategory = techStack.reduce((acc, item) => {
    const cat = item.category || 'other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(item.name)
    return acc
  }, {})

  return (
    <section id="tech" className="py-20 sm:py-24 border-t border-slate-800/50 bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle mb-12">
          Technologies and tools I use to build robust backend systems.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Object.entries(byCategory).map(([category, items]) => (
            <div key={category} className="card p-5">
              <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-3">
                {categoryLabels[category] || category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((name) => (
                  <li
                    key={name}
                    className="rounded-md bg-slate-800/80 px-3 py-1.5 text-sm text-slate-300 font-mono"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
