export default function Pricing() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            Pricing
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Simple Plans.
            <br />
            Real Structure.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            PurpleBuilds is designed to help you build strength, consistency,
            and direction with practical coaching built for real life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Starter
            </p>

            <h2 className="mt-4 text-3xl font-black">$49</h2>

            <p className="mt-4 text-zinc-300">
              A simple starting point for people who want structure and a clear
              training direction.
            </p>

            <ul className="mt-8 space-y-3 text-zinc-300">
              <li>• Personalized training plan</li>
              <li>• Built around your experience level</li>
              <li>• Schedule-based structure</li>
              <li>• Delivered digitally</li>
            </ul>

            <a
              href="/build-with-me"
              className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-6 py-3 font-bold text-white transition hover:bg-fuchsia-400"
            >
              Choose Starter
            </a>
          </div>

          <div className="rounded-3xl border border-fuchsia-500/40 bg-fuchsia-500/10 p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Build Plan
            </p>

            <h2 className="mt-4 text-3xl font-black">$99</h2>

            <p className="mt-4 text-zinc-200">
              Best for people who want both training structure and nutrition
              support working together.
            </p>

            <ul className="mt-8 space-y-3 text-zinc-200">
              <li>• Personalized training plan</li>
              <li>• Nutrition guidance</li>
              <li>• Goal-based support</li>
              <li>• Built for your real schedule</li>
            </ul>

            <a
              href="/build-with-me"
              className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-6 py-3 font-bold text-white transition hover:bg-fuchsia-400"
            >
              Choose Build Plan
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Full Build
            </p>

            <h2 className="mt-4 text-3xl font-black">$199</h2>

            <p className="mt-4 text-zinc-300">
              For people who want the most complete structure and a stronger
              reset across training, nutrition, and discipline.
            </p>

            <ul className="mt-8 space-y-3 text-zinc-300">
              <li>• Personalized training plan</li>
              <li>• Nutrition guidance</li>
              <li>• 4-week progression structure</li>
              <li>• Priority review and support</li>
            </ul>

            <a
              href="/build-with-me"
              className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-6 py-3 font-bold text-white transition hover:bg-fuchsia-400"
            >
              Choose Full Build
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Not sure which plan fits?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Start with the Build With Me form and I’ll help point you toward the
            right option based on your goals and current situation.
          </p>

          <a
            href="/build-with-me"
            className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-8 py-4 font-bold text-white transition hover:bg-fuchsia-400"
          >
            Start Your Build
          </a>
        </div>
      </section>
    </main>
  );
}