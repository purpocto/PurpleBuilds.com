export default function Contact() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Let’s Connect
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Whether you’re ready to start building or just have a question,
            I’d be glad to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl shadow-black/20">
            <h2 className="text-2xl font-bold text-white">Get in Touch</h2>

            <p className="mt-4 text-lg leading-8 text-zinc-300">
              The best way to reach me is by email. I personally review every
              message and every build request.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Email
              </p>

              <a
                href="mailto:ryanrb.engineer@gmail.com"
                className="mt-2 inline-block text-lg font-semibold text-fuchsia-400 transition hover:text-fuchsia-300"
              >
                ryanrb.engineer@gmail.com
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Response Time
              </p>

              <p className="mt-2 text-zinc-300">
                I aim to respond as soon as possible, usually within 1–2 days.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-fuchsia-500/30 bg-fuchsia-500/10 p-8">
            <h2 className="text-2xl font-bold text-white">Start with the Form</h2>

            <p className="mt-4 text-lg leading-8 text-zinc-200">
              If you're looking for a custom training plan, meal plan, or both,
              the Build With Me form is the best place to start.
            </p>

            <p className="mt-4 text-zinc-300">
              It gives me the context I need to understand your goals, your
              current situation, and how to build something that actually fits
              your life.
            </p>

            <a
              href="/build-with-me"
              className="mt-8 inline-block rounded-2xl bg-fuchsia-500 px-6 py-3 text-base font-bold text-white transition hover:bg-fuchsia-400"
            >
              Go to Build With Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
