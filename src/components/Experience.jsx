import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-slate-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title">Experience Timeline</h2>
        <p className="section-subtitle mb-12">
          Career progression and focus areas.
        </p>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700 sm:left-1/2 sm:-translate-x-px" />
          <ul className="space-y-8">
            {experience.map((item, i) => (
              <li key={i} className="relative flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="absolute left-4 w-3 h-3 rounded-full bg-primary-500 border-2 border-slate-950 sm:left-1/2 sm:-translate-x-[7px]" />
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 1 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <span className="font-mono text-sm text-primary-400">{item.year}</span>
                  <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                  <p className="text-slate-500 text-sm">{item.company}</p>
                </div>
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 1 ? 'sm:pl-12' : 'sm:pr-12 sm:text-right'}`}>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
