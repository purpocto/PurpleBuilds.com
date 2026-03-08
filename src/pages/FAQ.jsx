export default function FAQ() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            FAQ
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Common Questions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Everything you need to know before getting started with PurpleBuilds.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="space-y-10">
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
            <h2 className="text-xl font-bold">Who is PurpleBuilds for?</h2>
            <p className="mt-3 leading-8 text-zinc-300">
              PurpleBuilds is for people who want more structure, discipline,
              and direction in their training, nutrition, and personal growth.
              Whether you're a beginner or already active, plans are built
              around your actual situation.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
            <h2 className="text-xl font-bold">Do I need a gym membership?</h2>
            <p className="mt-3 leading-8 text-zinc-300">
              No. Plans can be built around a full gym, a home gym, dumbbells,
              bodyweight, outdoor training, or whatever equipment you have.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
            <h2 className="text-xl font-bold">Is this remote coaching?</h2>
            <p className="mt-3 leading-8 text-zinc-300">
              Yes. PurpleBuilds currently works as a remote coaching and
              planning service. You submit your build request online and
              receive a plan designed around your goals.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
            <h2 className="text-xl font-bold">
              How long does it take to receive my plan?
            </h2>
            <p className="mt-3 leading-8 text-zinc-300">
              Most requests are reviewed within 48–72 hours. Timing can vary
              depending on demand, but you’ll receive confirmation once your
              build request is submitted.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
            <h2 className="text-xl font-bold">What do I actually receive?</h2>
            <p className="mt-3 leading-8 text-zinc-300">
              Depending on your plan, you may receive a personalized training
              plan, nutrition guidance, structure for habits and consistency,
              and a more focused direction for your next phase.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
            <h2 className="text-xl font-bold">
              Can beginners use PurpleBuilds?
            </h2>
            <p className="mt-3 leading-8 text-zinc-300">
              Absolutely. Everything is built around your current level. The
              goal is not to overwhelm you — it's to create something practical
              and sustainable.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8">
            <h2 className="text-xl font-bold">What if I’m not sure what I need?</h2>
            <p className="mt-3 leading-8 text-zinc-300">
              That’s exactly what the Build With Me form is for. Share your
              goals, struggles, and schedule, and I’ll help point you toward
              the right option.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to start building?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            If you’re ready to build strength, structure, and momentum, start
            with the intake form.
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