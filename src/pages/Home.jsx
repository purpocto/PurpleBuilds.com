export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
              PurpleBuilds
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Building Together
              <span className="block text-fuchsia-400">
                Mentally, Physically, and Spiritually
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              PurpleBuilds helps people build structure, strength, and direction
              through personalized training plans, meal guidance, and real-world
              coaching built for real life.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/build-with-me"
                className="rounded-2xl bg-fuchsia-500 px-6 py-3 text-base font-bold text-white transition hover:bg-fuchsia-400"
              >
                Start Your Build
              </a>

              <a
                href="/about"
                className="rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-base font-semibold text-zinc-200 transition hover:border-fuchsia-400 hover:text-white"
              >
                Meet Ryan
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full rounded-3xl border border-fuchsia-500/20 bg-zinc-900 p-8 shadow-2xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                What You Can Build
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                  <h2 className="text-lg font-bold text-white">Training Plans</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Strength, endurance, athletic performance, discipline, and
                    structure tailored to your goals.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                  <h2 className="text-lg font-bold text-white">Meal Guidance</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Practical nutrition support for weight loss, performance,
                    muscle gain, or simply eating with more consistency.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                  <h2 className="text-lg font-bold text-white">Personal Growth</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Build better habits, stronger routines, and a more grounded
                    life with purpose-driven coaching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            A simple process built around real people
          </h2>

          <p className="mt-4 text-lg leading-8 text-zinc-300">
            No fluff. No overcomplicated systems. Just a clear path from where
            you are now to where you want to go.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Step 1
            </p>
            <h3 className="mt-3 text-xl font-bold text-white">Tell Me About You</h3>
            <p className="mt-3 leading-7 text-zinc-300">
              Fill out the Build With Me form so I can understand your goals,
              current situation, and what support you actually need.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Step 2
            </p>
            <h3 className="mt-3 text-xl font-bold text-white">I Review Your Build</h3>
            <p className="mt-3 leading-7 text-zinc-300">
              I personally review every request and use your answers to shape a
              plan that fits your life, schedule, and goals.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Step 3
            </p>
            <h3 className="mt-3 text-xl font-bold text-white">Start Building</h3>
            <p className="mt-3 leading-7 text-zinc-300">
              You get a more focused starting point, more structure, and more
              momentum to move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            Built for Real Life
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            This is for people who want more structure, not more noise.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Whether you want to build strength, improve endurance, clean up your
            nutrition, or reset your direction, PurpleBuilds is designed to help
            you move forward in a way that is practical, personal, and sustainable.
          </p>

          <a
            href="/build-with-me"
            className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-8 py-4 text-base font-bold text-white transition hover:bg-fuchsia-400"
          >
            Build With Me
          </a>
        </div>
      </section>
    </main>
  );
}