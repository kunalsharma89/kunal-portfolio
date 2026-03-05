import { developer } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <p className="font-mono text-primary-400 text-sm sm:text-base mb-4 tracking-wider uppercase">
          {developer.experience} Experience
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
          {developer.name}
        </h1>
        <p className="text-xl sm:text-2xl text-primary-300 font-medium mb-2">
          {developer.title}
        </p>
        <p className="text-slate-400 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          {developer.subtitle}
        </p>
        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-10">
          {developer.tagline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary-500/25 transition hover:bg-primary-600 hover:shadow-primary-500/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-primary-500/50 hover:text-primary-400"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
