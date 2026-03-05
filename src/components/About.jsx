import { developer } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-slate-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle mb-8">
          A brief introduction and what I bring to the table.
        </p>
        <div className="card p-6 sm:p-8 max-w-3xl">
          <p className="text-slate-300 leading-relaxed whitespace-pre-line">
            {developer.about}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-primary-500/20 px-4 py-1.5 text-sm font-medium text-primary-300">
              {developer.experience} Experience
            </span>
            <span className="rounded-full bg-slate-700/50 px-4 py-1.5 text-sm text-slate-300">
              Backend & APIs
            </span>
            <span className="rounded-full bg-slate-700/50 px-4 py-1.5 text-sm text-slate-300">
              Microservices
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
