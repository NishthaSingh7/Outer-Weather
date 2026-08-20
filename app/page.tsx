export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="atmosphere" aria-hidden="true" />
      <div className="horizon" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-16 pb-28 text-center">
        <p className="mb-5 text-sm font-medium tracking-[0.35em] text-[#e8c9a0] uppercase">
          Launching soon
        </p>

        <h1 className="font-serif text-[clamp(3.75rem,12vw,8.5rem)] leading-[0.9] tracking-[-0.04em] text-[#f4efe6]">
          Outer Weather
        </h1>

        <span className="mt-8 h-px w-20 bg-[#e8c9a0]/80" aria-hidden="true" />

        <p className="mt-8 max-w-lg text-base leading-8 text-[#c5cdd8] sm:text-lg">
          A public library of AI research briefs, written by a researcher and
          writer crew.
        </p>
      </section>

      <footer className="relative z-10 mt-auto border-t border-[#e8c9a0]/20 bg-[#07090f]/70 px-6 py-5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm text-[#f4efe6]">Nishtha Singh</p>
            <p className="mt-0.5 text-xs tracking-wide text-[#8a93a3]">
              Founder, Outer Weather
            </p>
          </div>

          <p className="text-xs tracking-[0.18em] text-[#8a93a3] uppercase">
            A CrewAI research library
          </p>

          <a
            className="text-sm text-[#e8c9a0] underline-offset-4 hover:underline"
            href="https://github.com/NishthaSingh7/Outer-Weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
