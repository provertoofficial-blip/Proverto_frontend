import React from "react";

const services = [
  [
    "01",
    "Website Development",
    "High-performing websites built around your goals, audience and brand.",
  ],
  [
    "02",
    "Software Development",
    "Practical, scalable software that makes complex work simpler.",
  ],
  [
    "03",
    "Mobile Apps",
    "Thoughtful mobile experiences designed for people on the move.",
  ],
  [
    "04",
    "AI & Process Automation",
    "Automate repetitive work and create more room for meaningful progress.",
  ],
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 bg-[#faf9f5] text-[#252522] font-sans">
      <header className="flex min-h-[78px] flex-wrap items-center justify-between gap-4 border-b border-[#e5e3dc] py-4 sm:h-[94px] sm:flex-nowrap sm:py-0">
        <a
          className="text-2xl font-extrabold tracking-[-1.6px] sm:text-[27px]"
          href="/"
        >
          proverto<span>.</span>
        </a>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="inline-flex min-h-[50px] items-center justify-center gap-5 rounded-sm px-5 text-xs font-bold transition hover:-translate-y-0.5 bg-[#252522] text-white hover:bg-[#3a3a34]"
          href="/appointment"
        >
          Book a consultation <span>↗</span>
        </a>
      </header>
      <section className="grid gap-10 py-14 sm:min-h-[625px] sm:grid-cols-[1fr_.92fr] sm:items-center sm:gap-[6%] sm:py-16">
        <div className="min-w-0">
          <p className="mb-5 text-[10px] font-bold tracking-[1.7px] text-[#74746c]">
            <span className="mr-2 inline-block h-[7px] w-[7px] rounded-full bg-[#98b52e]" />{" "}
            DIGITAL SOLUTIONS, BUILT AROUND YOU
          </p>
          <h1>
            Make your next
            <br />
            move <em>meaningful.</em>
          </h1>
          <p className="mb-7 max-w-[480px] text-sm leading-8 text-[#727269]">
            We turn ambitious ideas into useful digital experiences, smarter
            systems and measurable progress.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              className="inline-flex min-h-[50px] items-center justify-center gap-5 rounded-sm px-5 text-xs font-bold transition hover:-translate-y-0.5 bg-[#252522] text-white hover:bg-[#3a3a34]"
              href="/appointment"
            >
              Let's talk about your project <span>↗</span>
            </a>
            <a
              className="cursor-pointer border-0 bg-transparent p-0 text-xs font-bold"
              href="/services"
            >
              Explore our services <span>→</span>
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex">
              <i>P</i>
              <i>G</i>
              <i>+</i>
            </div>
            <p>
              <strong>Built on clarity.</strong>
              <br />
              Focused on outcomes, not noise.
            </p>
          </div>
        </div>
        <div className="relative h-[350px] overflow-hidden bg-[#eeeee7] sm:h-[455px]">
          <div className="absolute inset-0 bg-[linear-gradient(#dcdcd2_1px,transparent_1px),linear-gradient(90deg,#dcdcd2_1px,transparent_1px)] bg-[size:35px_35px] opacity-65"></div>
          <div className="absolute left-1/2 top-1/2 rounded-[50%] border border-[#aeb09f] h-[390px] w-[320px] -translate-x-1/2 -translate-y-1/2 rotate-[-27deg]"></div>
          <div className="absolute left-1/2 top-1/2 rounded-[50%] border border-[#aeb09f] h-[265px] w-[430px] -translate-x-1/2 -translate-y-1/2 rotate-[38deg]"></div>
          <div className="absolute left-1/2 top-1/2 grid h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#d9f16c] shadow-xl">
            <span>p.</span>
          </div>
          <div className="absolute bg-white px-4 py-3 text-[9px] tracking-wider shadow-md right-6 top-12">
            IDEA <b>→</b> IMPACT
          </div>
          <div className="absolute bg-white px-4 py-3 text-[9px] tracking-wider shadow-md bottom-9 left-6 leading-7 tracking-normal">
            <span className="mr-2 inline-block h-[7px] w-[7px] rounded-full bg-[#98b52e]" />{" "}
            Thoughtfully made
            <br />
            <strong>for what's next.</strong>
          </div>
          <div className="absolute bottom-4 right-4 text-[9px] text-[#777]">
            01 — 04
          </div>
        </div>
      </section>
      <section className="flex gap-5 overflow-hidden whitespace-nowrap border-y border-[#e5e3dc] py-6 text-[9px] tracking-[1.7px] text-[#74746c] sm:justify-between">
        <span>STRATEGY</span>
        <b>✳</b>
        <span>DESIGN</span>
        <b>✳</b>
        <span>DEVELOPMENT</span>
        <b>✳</b>
        <span>INTELLIGENCE</span>
        <b>✳</b>
        <span>GROWTH</span>
      </section>
      <section className="py-20 sm:py-28" id="services">
        <div className="mb-12 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-[10px] font-bold tracking-[1.7px] text-[#74746c]">
              WHAT WE DO
            </p>
            <h2>
              Good ideas deserve
              <br />
              <em>great execution.</em>
            </h2>
          </div>
          <p className="text-[13px] leading-7 text-[#77776f] max-w-[350px]">
            From your first concept to the systems that help you scale, we bring
            the right people and thinking to the table.
          </p>
        </div>
        <div className="grid grid-cols-2 border-l border-t border-[#e5e3dc] lg:grid-cols-4">
          {services.map(([n, title, desc]) => (
            <a
              className="flex min-h-[260px] flex-col border-b border-r border-[#e5e3dc] p-4 transition hover:bg-[#f0f0e8] sm:min-h-[285px] sm:p-6"
              href="/services"
              key={n}
            >
              <span className="text-[10px] text-[#88887f]">{n}</span>
              <div className="my-5 grid h-[38px] w-[38px] place-items-center rounded-full bg-[#d9f16c] text-lg">
                {["↗", "▦", "◈", "✳"][Number(n) - 1]}
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="mt-auto text-[10px] font-bold">
                Explore service ↗
              </span>
            </a>
          ))}
        </div>
      </section>
      <section
        className="mb-14 grid gap-8 bg-[#efefe8] px-6 py-10 sm:mb-24 sm:grid-cols-[.7fr_1fr] sm:gap-[12%] sm:px-[8%] sm:py-20"
        id="about"
      >
        <div className="grid h-36 w-36 place-items-center rounded-full border border-[#c7c9ba] text-7xl font-extrabold sm:h-60 sm:w-60 sm:text-9xl">
          P<span>.</span>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-bold tracking-[1.7px] text-[#74746c]">
            THE PROVERTO APPROACH
          </p>
          <h2>
            Clear thinking.
            <br />
            <em>Considered making.</em>
          </h2>
          <p className="mb-7 max-w-[480px] text-sm leading-8 text-[#727269]">
            Every project starts with listening. We learn what matters, find the
            right path and build with care—so the result works in the real
            world, not just on a screen.
          </p>
          <a
            className="cursor-pointer border-0 bg-transparent p-0 text-xs font-bold"
            href="/appointment"
          >
            Meet us and talk it through →
          </a>
        </div>
      </section>
      <section
        className="mb-12 flex flex-col items-start justify-between gap-8 bg-[#252522] px-7 py-10 text-white sm:mb-20 sm:flex-row sm:items-center sm:px-16 sm:py-14"
        id="contact"
      >
        <div>
          <p className="mb-5 text-[10px] font-bold tracking-[1.7px] text-[#74746c]">
            YOUR NEXT CHAPTER STARTS HERE
          </p>
          <h2>
            Let's make something
            <br />
            <em>worthwhile.</em>
          </h2>
        </div>
        <a
          className="inline-flex min-h-[50px] items-center justify-center gap-5 rounded-sm px-5 text-xs font-bold transition hover:-translate-y-0.5 bg-[#d9f16c] text-[#252522]"
          href="/appointment"
        >
          Book an appointment <span>↗</span>
        </a>
      </section>
      <footer className="grid gap-5 border-t border-[#e5e3dc] py-8 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
        <a
          className="text-2xl font-extrabold tracking-[-1.6px] sm:text-[27px]"
          href="/"
        >
          proverto<span>.</span>
        </a>
        <p>Digital solutions for a world moving forward.</p>
        <div>
          <a href="/services">Services</a>
          <a href="/appointment">Book an appointment</a>
          <a href="/checkout">Checkout</a>
        </div>
        <small>© 2026 Proverto Global Technologies Private Limited.</small>
      </footer>
    </main>
  );
}
