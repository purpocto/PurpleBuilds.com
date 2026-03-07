import ryanphoto from "../assets/ryanphoto.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HERO */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            PurpleBuilds
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
            Build Mentally
            <br />
            Physically
            <br />
            Spiritually
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            PurpleBuilds helps people develop structure, discipline,
            and strength through personalized training plans,
            practical nutrition guidance, and real-world coaching.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/build-with-me"
              className="rounded-2xl bg-fuchsia-500 px-6 py-3 font-bold text-white transition hover:bg-fuchsia-400"
            >
              Build With Me
            </a>

            <a
              href="/about"
              className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-fuchsia-400"
            >
              Learn More
            </a>
          </div>

        </div>
      </section>


      {/* PROBLEM */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">

          <h2 className="text-3xl font-black sm:text-4xl">
            Most people don't fail because they lack motivation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            They fail because they lack structure.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            PurpleBuilds exists to help people create real structure
            in their training, nutrition, and personal discipline.
          </p>

        </div>
      </section>


      {/* MEET RYAN */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:grid sm:grid-cols-2 sm:gap-16 sm:items-center">

          <div className="mb-10 sm:mb-0">
            <img
              src={ryanphoto}
              alt="Ryan Brown"
              className="w-full max-w-sm rounded-3xl border border-zinc-800 object-cover shadow-xl"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
              Meet Ryan
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Helping people build real strength
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              I'm Ryan Brown. PurpleBuilds was created to help people
              build structure and strength in real life. Through training,
              nutrition guidance, and practical discipline, the goal is
              simple: help people become more capable mentally,
              physically, and spiritually.
            </p>

            <a
              href="/about"
              className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-6 py-3 font-bold text-white transition hover:bg-fuchsia-400"
            >
              Learn More About Ryan
            </a>

          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <h2 className="text-center text-3xl font-black sm:text-4xl">
            How It Works
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">1. Tell Me About You</h3>
              <p className="mt-3 text-zinc-300">
                Complete the Build With Me form so I can understand your
                goals, training experience, and schedule.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">2. I Build Your Plan</h3>
              <p className="mt-3 text-zinc-300">
                Your responses are used to build a personalized training
                and nutrition structure.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">3. Start Building</h3>
              <p className="mt-3 text-zinc-300">
                Follow the plan, develop consistency, and build momentum
                toward your goals.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* WHAT YOU RECEIVE */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <h2 className="text-center text-3xl font-black sm:text-4xl">
            What You Receive
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Training Plan</h3>
              <p className="mt-3 text-zinc-300">
                Structured workouts built around your experience level
                and goals.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Nutrition Guidance</h3>
              <p className="mt-3 text-zinc-300">
                Practical nutrition strategies that support strength,
                endurance, or weight loss.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Structure & Discipline</h3>
              <p className="mt-3 text-zinc-300">
                The real goal is long-term consistency and personal
                development.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">

          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to Start Building?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            If you're ready to build strength, structure,
            and discipline in your life, start here.
          </p>

          <a
            href="/build-with-me"
            className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-8 py-4 font-bold text-white transition hover:bg-fuchsia-400"
          >
            Build With Me
          </a>

        </div>
      </section>

    </main>
  );
}