import { links } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-slate-800/50 bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle mb-12">
          Open to backend roles, consulting, and technical discussions.
        </p>
        <div className="card p-8 max-w-2xl mx-auto text-center">
          <p className="text-slate-300 mb-6">
            I'm available for full-time roles, contract work, and architecture reviews. Reach out via email or connect on LinkedIn.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={links.email}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-primary-500/50 hover:text-primary-400"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
