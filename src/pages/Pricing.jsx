export default function Pricing() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            Pricing
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Training Options Built for Athlete Development
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            PurpleBuilds is built for athletes and families who want more than
            generic workouts. These options are designed to support speed,
            explosiveness, confidence, and discipline from youth athletes
            through college.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Speed Build
            </p>

            <h2 className="mt-4 text-3xl font-black">$49</h2>

            <p className="mt-4 text-zinc-300">
              A strong starting point for athletes who want more structure,
              better movement, and a focused performance plan.
            </p>

            <ul className="mt-8 space-y-3 text-zinc-300">
              <li>• Personalized speed-focused training plan</li>
              <li>• Built around age, level, and schedule</li>
              <li>• Agility and explosiveness structure</li>
              <li>• Delivered digitally</li>
            </ul>

            <a
              href="/build-with-me"
              className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-6 py-3 font-bold text-white transition hover:bg-fuchsia-400"
            >
              Choose Speed Build
            </a>
          </div>

          <div className="rounded-3xl border border-fuchsia-500/40 bg-fuchsia-500/10 p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Athlete Build
            </p>

            <h2 className="mt-4 text-3xl font-black">$99</h2>

            <p className="mt-4 text-zinc-200">
              Best for athletes who want both performance training and the
              support structure needed to stay consistent and keep progressing.
            </p>

            <ul className="mt-8 space-y-3 text-zinc-200">
              <li>• Personalized training plan</li>
              <li>• Speed, agility, and explosiveness focus</li>
              <li>• Nutrition and recovery guidance</li>
              <li>• Performance-based direction</li>
            </ul>

            <a
              href="/build-with-me"
              className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-6 py-3 font-bold text-white transition hover:bg-fuchsia-400"
            >
              Choose Athlete Build
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Full Performance Build
            </p>

            <h2 className="mt-4 text-3xl font-black">$199</h2>

            <p className="mt-4 text-zinc-300">
              For athletes and families who want a more complete development
              plan built around performance, discipline, and long-term growth.
            </p>

            <ul className="mt-8 space-y-3 text-zinc-300">
              <li>• Personalized performance training plan</li>
              <li>• Speed, agility, explosiveness, and structure</li>
              <li>• Nutrition and recovery guidance</li>
              <li>• 4-week progression framework</li>
            </ul>

            <a
              href="/build-with-me"
              className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-6 py-3 font-bold text-white transition hover:bg-fuchsia-400"
            >
              Choose Full Performance Build
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
              Coming Soon
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              PurpleBuilds is growing beyond individual plans
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <h3 className="text-lg font-bold">Youth Athlete Coaching</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Personalized development for young athletes building
                  confidence, movement quality, and speed early.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <h3 className="text-lg font-bold">Online Programs</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Structured digital programs for athletes who want to train
                  from anywhere with purpose.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <h3 className="text-lg font-bold">Camps</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Speed and explosiveness camps designed to build both
                  athleticism and confidence.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <h3 className="text-lg font-bold">Courses</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Educational resources for athletes and families who want a
                  smarter approach to development.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <h3 className="text-lg font-bold">Team Training</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Speed, agility, and athlete development training for teams
                  that want a performance edge.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <h3 className="text-lg font-bold">Performance Coaching</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Future coaching options that blend physical development with
                  work ethic, discipline, and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Not sure which option fits best?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Start with the Build With Me form and I’ll help point you toward the
            right next step based on the athlete’s goals, level, and current
            situation.
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