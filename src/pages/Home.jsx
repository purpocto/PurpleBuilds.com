import ryanphoto from "../assets/ryanphoto.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* HERO */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
                PurpleBuilds Performance
              </p>

              <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
                Speed Training for Athletes Who Want an Edge
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                PurpleBuilds helps athletes from 4th grade through college
                build speed, agility, explosiveness, and the mental discipline
                to outwork the competition.
              </p>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
                This is athlete development for families who care about more
                than talent alone. Build speed. Build confidence. Build
                discipline.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/build-with-me"
                  className="rounded-2xl bg-fuchsia-500 px-6 py-3 text-center font-bold text-white transition hover:bg-fuchsia-400"
                >
                  Start Building
                </a>

                <a
                  href="/pricing"
                  className="rounded-2xl border border-zinc-700 px-6 py-3 text-center font-semibold text-white transition hover:border-fuchsia-400"
                >
                  View Training Options
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={ryanphoto}
                alt="Ryan Brown"
                className="w-full max-w-sm rounded-3xl border border-zinc-800 object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRAND POSITIONING */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Talent matters. Training matters more.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            PurpleBuilds was built on the belief that athletes should never get
            beat because they lacked preparation, structure, or discipline.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            The goal is not just to create faster athletes. The goal is to
            build mentally tough, physically prepared competitors who learn how
            to work when others don’t.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
              Who This Is For
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Athlete development for youth through college
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              PurpleBuilds is designed for athletes and families who want a
              real performance edge.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Youth Athletes</h3>
              <p className="mt-3 text-zinc-300">
                Build movement skills, coordination, confidence, and a strong
                foundation early.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Middle & High School</h3>
              <p className="mt-3 text-zinc-300">
                Improve speed, agility, explosiveness, and the discipline
                needed to compete at a higher level.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">College Athletes</h3>
              <p className="mt-3 text-zinc-300">
                Sharpen performance, maintain an edge, and keep building the
                mindset required to compete.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* WHAT ATHLETES TRAIN */}
<section className="border-t border-zinc-800 bg-zinc-950">
  <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
        What Athletes Train
      </p>

      <h2 className="mt-4 text-3xl font-black sm:text-4xl">
        Speed and athletic development that builds real performance
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-300">
        PurpleBuilds focuses on the athletic qualities that create
        faster, more confident competitors.
      </p>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
        <h3 className="text-xl font-bold">Speed</h3>
        <p className="mt-3 text-zinc-300">
          Sprint mechanics, acceleration, and building the ability to
          move faster in competition.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
        <h3 className="text-xl font-bold">Agility</h3>
        <p className="mt-3 text-zinc-300">
          Change of direction, reaction, balance, and movement
          efficiency under pressure.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
        <h3 className="text-xl font-bold">Explosive Power</h3>
        <p className="mt-3 text-zinc-300">
          Jumping, acceleration, and power development that translates
          directly to sport performance.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
        <h3 className="text-xl font-bold">Mental Discipline</h3>
        <p className="mt-3 text-zinc-300">
          Training habits, focus, and the work ethic required to keep
          improving when others stop.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* SERVICES / OFFERS */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
              What PurpleBuilds Offers
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Built to grow from coaching into a full athlete development brand
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Speed Training Programs</h3>
              <p className="mt-3 text-zinc-300">
                Performance-focused programs built around speed mechanics,
                acceleration, agility, and explosiveness.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Youth Athlete Coaching</h3>
              <p className="mt-3 text-zinc-300">
                Coaching that helps young athletes build confidence, movement
                quality, and work ethic early.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Online Programs</h3>
              <p className="mt-3 text-zinc-300">
                Structured remote training options for athletes who want to
                build from anywhere.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Camps</h3>
              <p className="mt-3 text-zinc-300">
                High-energy group training experiences focused on speed,
                explosiveness, and competitive mindset.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Courses</h3>
              <p className="mt-3 text-zinc-300">
                Future educational programs for athletes and families who want
                better training knowledge and structure.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Team Training</h3>
              <p className="mt-3 text-zinc-300">
                Speed, agility, and athlete development sessions built for
                teams that want to train with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            The PurpleBuilds Approach
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Build Speed</h3>
              <p className="mt-3 text-zinc-300">
                Develop acceleration, agility, change of direction, and
                explosiveness through intentional training.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Build Physically</h3>
              <p className="mt-3 text-zinc-300">
                Become a stronger, more capable athlete with a foundation that
                supports performance in competition.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">Build Mentally</h3>
              <p className="mt-3 text-zinc-300">
                Learn discipline, focus, consistency, and the mentality to
                outwork talent when talent doesn’t train.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            How It Works
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">1. Choose Your Direction</h3>
              <p className="mt-3 text-zinc-300">
                Review training options, pricing, and the type of support that
                best fits the athlete’s goals.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">2. Submit Your Build</h3>
              <p className="mt-3 text-zinc-300">
                Fill out the intake form so I can understand the athlete, their
                training background, and what they need most.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
              <h3 className="text-xl font-bold">3. Start Training With Purpose</h3>
              <p className="mt-3 text-zinc-300">
                Build speed, structure, confidence, and discipline with a
                clearer direction and stronger plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to help your athlete build an edge?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Start with the Build With Me form and let’s create the right next
            step for speed, confidence, and discipline.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/build-with-me"
              className="rounded-2xl bg-fuchsia-500 px-8 py-4 font-bold text-white transition hover:bg-fuchsia-400"
            >
              Build With Me
            </a>

            <a
              href="/pricing"
              className="rounded-2xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-fuchsia-400"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}