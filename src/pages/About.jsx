export default function About() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      
      {/* HERO SECTION */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
          
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            About
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Meet Ryan
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            PurpleBuilds exists to help people build structure, strength, and direction 
            in their lives — mentally, physically, and spiritually.
          </p>

        </div>
      </section>

      {/* STORY SECTION */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12 space-y-8">

        <p className="text-lg leading-8 text-zinc-300">
          My name is Ryan, and PurpleBuilds started from a simple belief: 
          the strongest lives are intentionally built.
        </p>

        <p className="text-lg leading-8 text-zinc-300">
          Over the years I’ve seen how powerful training, discipline, and 
          structure can be — not just for physical health, but for mindset, 
          confidence, and direction in life.
        </p>

        <p className="text-lg leading-8 text-zinc-300">
          The goal of PurpleBuilds is simple: help people build systems 
          that actually work in the real world. No unrealistic programs. 
          No fake motivation. Just practical structure that helps you 
          move forward consistently.
        </p>

      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="border-y border-zinc-800 bg-zinc-900">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">

          <h2 className="text-2xl font-bold">The PurpleBuilds Philosophy</h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-300">

            <p>
              <span className="font-semibold text-white">Build mentally.</span>{" "}
              Develop discipline, focus, and clarity so you can show up every day.
            </p>

            <p>
              <span className="font-semibold text-white">Build physically.</span>{" "}
              Strength, endurance, and health create the foundation for everything else.
            </p>

            <p>
              <span className="font-semibold text-white">Build spiritually.</span>{" "}
              Purpose and direction matter just as much as performance.
            </p>

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">

        <div className="rounded-3xl border border-fuchsia-500/30 bg-fuchsia-500/10 p-8 text-center">

          <h3 className="text-2xl font-bold">
            Ready to Build Your Next Phase?
          </h3>

          <p className="mt-4 text-zinc-300">
            If you're ready to create structure and momentum in your life,
            start by filling out the Build With Me form.
          </p>

          <a
            href="/build-with-me"
            className="mt-6 inline-block rounded-2xl bg-fuchsia-500 px-6 py-3 font-bold text-white transition hover:bg-fuchsia-400"
          >
            Start Building
          </a>

        </div>

      </section>

    </main>
  );
}