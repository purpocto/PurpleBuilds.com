// src/pages/Home.jsx

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
          PurpleBuilds
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Building Together
          <span className="block text-fuchsia-400">
            Mentally, Physically, and Spiritually
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
          PurpleBuilds helps people create structure, strength, discipline, and
          momentum through custom training plans, meal guidance, and purpose-driven
          coaching.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/build-with-me"
            className="rounded-2xl bg-fuchsia-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02] hover:bg-fuchsia-400"
          >
            Build With Me
          </a>

          <a
            href="/about"
            className="rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-base font-semibold text-zinc-200 transition hover:border-fuchsia-400 hover:text-white"
          >
            About Ryan
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 sm:px-8 lg:grid-cols-3 lg:px-12">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
            <h2 className="text-xl font-bold text-fuchsia-300">Mental</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Build focus, discipline, consistency, and a stronger mindset for
              everyday life.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
            <h2 className="text-xl font-bold text-fuchsia-300">Physical</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Get custom training built around your goals, your schedule, and the
              equipment you actually have.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
            <h2 className="text-xl font-bold text-fuchsia-300">Spiritual</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Move with more purpose, direction, and intention as you build the
              life you actually want.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            What We Build
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Simple coaching built around real goals
          </h2>
          <p className="mt-4 leading-7 text-zinc-300">
            No overcomplicated systems. No generic advice. Just practical guidance
            to help you move forward with clarity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-bold text-white">Training Plans</h3>
            <p className="mt-3 leading-7 text-zinc-300">
              Strength, endurance, performance, structure, and progression built for
              your level and lifestyle.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-bold text-white">Meal Guidance</h3>
            <p className="mt-3 leading-7 text-zinc-300">
              Nutrition support for weight loss, muscle gain, performance, or simply
              making eating easier and more consistent.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-bold text-white">Coaching Support</h3>
            <p className="mt-3 leading-7 text-zinc-300">
              Build stronger habits, stronger routines, and stronger follow-through
              in every part of life.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to start building?
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-300">
            Tell me where you are, where you want to go, and we’ll build the next
            phase together.
          </p>

          <a
            href="/build-with-me"
            className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02] hover:bg-fuchsia-400"
          >
            Start Your Build
          </a>
        </div>
      </section>
    </main>
  );
}