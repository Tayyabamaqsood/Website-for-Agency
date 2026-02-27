const services = [
  {
    title: 'Email Automation',
    description:
      'Automatically handle customer emails, responses, and follow-ups without manual effort.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7.5 12 13l9-5.5" />
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
      </svg>
    ),
  },
  {
    title: 'Invoice Processing',
    description: 'Streamline invoice handling, data extraction, and accounting workflows.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 3h8l4 4v14H4V3h4Z" />
        <path d="M8 13h8M8 17h5M16 3v5h5" />
      </svg>
    ),
  },
  {
    title: 'AI Video Creation',
    description: 'Generate engaging promotional videos for your products using AI.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="6" width="14" height="12" rx="2" />
        <path d="m17 10 4-2v8l-4-2" />
        <path d="m10 9 3 3-3 3Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Inventory Management',
    description: 'Prevent overselling and manage stock efficiently with automated systems.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
        <path d="M3 15.5 12 20l9-4.5" />
        <path d="M12 13v7" />
      </svg>
    ),
  },
  {
    title: 'AI Receptionist',
    description: 'Answer calls, qualify inquiries, and route conversations 24/7 with natural AI voice agents.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6.5 4h11a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4Z" />
        <path d="M8.5 9h7M8.5 12h7M8.5 15h4" />
      </svg>
    ),
  },
  {
    title: 'Personal Assistant',
    description: 'Automate scheduling, reminders, summaries, and internal follow-ups for your team.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20a7 7 0 0 1 14 0" />
        <path d="M17 6h4M19 4v4" />
      </svg>
    ),
  },
  {
    title: 'Lead Generation',
    description: 'Capture, score, and nurture leads automatically across forms, chat, and outbound campaigns.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 18V8l8-4 8 4v10l-8 4-8-4Z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: 'Content Creation',
    description: 'Produce branded blogs, social captions, ad copy, and scripts faster with AI-assisted creative pipelines.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 4h14v16H5z" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    title: 'Content Marketing',
    description: 'Automate distribution, SEO optimization, and performance tracking to turn content into predictable growth.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16v12H4z" />
        <path d="M8 10h8M8 14h4" />
        <path d="m14 18 2 2 4-4" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: 'This automation saved us hours every day.',
    name: 'Sarah Nguyen',
    business: 'E-commerce Founder',
  },
  {
    quote: 'Our response time improved instantly.',
    name: 'Daniel Carter',
    business: 'SaaS Operations Lead',
  },
  {
    quote: 'We can now focus on growth instead of operations.',
    name: 'Priya Shah',
    business: 'Marketing Agency Owner',
  },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function HomePage() {
  return (
    <main className="scroll-smooth bg-slate-950 text-slate-100 selection:bg-fuchsia-400/30">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.28),_transparent_35%),radial-gradient(circle_at_20%_50%,_rgba(168,85,247,0.25),_transparent_40%),linear-gradient(to_bottom,_rgba(15,23,42,0.95),_rgba(2,6,23,1))]" />
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />

        <header id="home" className="relative border-b border-white/10 backdrop-blur-xl">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
            <a href="#home" className="text-sm font-semibold tracking-wide text-white/95">
              Intelligent AI Automation Agency
            </a>
            <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-fuchsia-300">
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <section className="relative mx-auto flex w-full max-w-6xl flex-col px-6 pb-24 pt-20 text-center md:pb-28 md:pt-28">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-fuchsia-300/90">AI Automation for Modern Teams</p>
          <h1 className="mx-auto max-w-4xl bg-gradient-to-r from-white via-fuchsia-100 to-purple-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl">
            Automate Your Business. Focus on Growth.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            We help women-owned businesses eliminate repetitive tasks so they can focus on growth, creativity, and scaling their brand.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendar.app.google/iUffWkRaXqSCi5AV7"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-fuchsia-500/35"
            >
              Book a Call
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-fuchsia-300/70 hover:text-fuchsia-100"
            >
              View Services
            </a>
          </div>
          <p className="mt-4 text-xs tracking-wide text-fuchsia-300/80">
            Supporting women-led businesses with smarter systems
          </p>
          <div className="mx-auto mt-14 grid w-full max-w-4xl gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur md:grid-cols-3 md:p-5">
            {[
              { label: 'Processes Automated', value: '20+' },
              { label: 'Avg. Time Saved', value: '32 hrs/mo' },
              { label: 'Client Satisfaction', value: '98%' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-slate-900/60 p-4">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section id="services" className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Services that remove bottlenecks</h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Designed for teams that want to operate faster, smarter, and with less manual overhead.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-300/50 hover:shadow-fuchsia-900/40"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-fuchsia-500/25 to-purple-500/20 p-3 text-fuchsia-200 transition group-hover:from-fuchsia-500/40 group-hover:to-purple-500/35">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-fuchsia-500/5 to-purple-500/5 p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Why Choose Intelligent AI Automation Agency</h2>
          <ul className="mt-8 space-y-4 text-slate-200">
            {['Less manual work. More time to grow your business', 'Faster replies without hiring more people', 'Reliable systems that keep everything running'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-base md:text-lg">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500/20 text-fuchsia-300">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Customer reviews</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-300/50"
            >
              <div className="mb-4 flex text-amber-300" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p className="text-slate-100">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.business}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-fuchsia-300/20 bg-gradient-to-r from-fuchsia-500/15 via-purple-500/10 to-slate-900 p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Ready to simplify your business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">Let’s set up a system that works for you.</p>
          <a
            href="https://calendar.app.google/iUffWkRaXqSCi5AV7"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-fuchsia-100"
          >
            Book a Call
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-slate-200">Intelligent AI Automation Agency</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=intelligentaiautomationagency@gmail.com" target="_blank" rel="noreferrer" className="transition hover:text-fuchsia-300">
              intelligentaiautomationagency@gmail.com
            </a>
          </div>
          <div className="flex gap-5">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-fuchsia-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}