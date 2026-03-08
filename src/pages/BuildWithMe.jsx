import { useState } from "react";
import {
  sendBuildAdminEmail,
  sendBuildConfirmationEmail,
} from "../services/email";

const initialFormData = {
  selectedPlan: "",
  service: "",
  goal: "",
  experience: "",
  trainingDays: "",
  equipment: "",
  nutritionGoal: "",
  biggestStruggle: "",
  successVision: "",
  name: "",
  email: "",
};

export default function BuildWithMe() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({
      type: "",
      message: "",
    });

    try {
      await sendBuildAdminEmail(formData);
      await sendBuildConfirmationEmail(formData);

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to submit Build With Me form:", error);

      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong while sending your form. Please try again in a minute.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleStartAnotherBuild() {
    setIsSubmitted(false);
    setSubmitStatus({
      type: "",
      message: "",
    });
    setFormData(initialFormData);
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <section className="mx-auto flex min-h-[70vh] max-w-4xl items-center px-6 py-16 sm:px-8 lg:px-12">
          <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center shadow-2xl shadow-black/20 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
              Build Submitted
            </p>

            <h1 className="mt-4 text-4xl font-black sm:text-5xl">
              You’re officially in.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Your request has been sent successfully. I’ll personally review
              your answers and follow up using the email you submitted.
            </p>

            <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm leading-7 text-emerald-200">
              A confirmation email should already be on its way to your inbox.
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/"
                className="rounded-2xl bg-fuchsia-500 px-6 py-3 text-base font-bold text-white transition hover:bg-fuchsia-400"
              >
                Back to Home
              </a>

              <button
                type="button"
                onClick={handleStartAnotherBuild}
                className="rounded-2xl border border-zinc-700 bg-zinc-950 px-6 py-3 text-base font-semibold text-zinc-200 transition hover:border-fuchsia-400 hover:text-white"
              >
                Submit Another Build
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            Build With Me
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Let’s Build the Right Next Step
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            This form helps me understand the athlete, their goals, their
            current level, and what kind of support will best help them build
            speed, confidence, explosiveness, and discipline.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl shadow-black/20 sm:p-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-white">
              1. Which build feels like the best fit?
            </h2>
            <p className="mt-2 text-zinc-400">
              Choose the option that best matches the level of support you want
              right now.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                {
                  name: "Speed Build",
                  price: "$49",
                  desc: "A speed-focused training plan for structure, movement, and performance.",
                },
                {
                  name: "Athlete Build",
                  price: "$99",
                  desc: "Training plus added support for performance, recovery, and consistency.",
                },
                {
                  name: "Full Performance Build",
                  price: "$199",
                  desc: "A more complete development plan for performance, discipline, and long-term growth.",
                },
              ].map((plan) => (
                <label
                  key={plan.name}
                  className={`cursor-pointer rounded-2xl border p-4 transition ${
                    formData.selectedPlan === plan.name
                      ? "border-fuchsia-400 bg-fuchsia-500/10"
                      : "border-zinc-700 bg-zinc-950 hover:border-fuchsia-500"
                  }`}
                >
                  <input
                    type="radio"
                    name="selectedPlan"
                    value={plan.name}
                    checked={formData.selectedPlan === plan.name}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />

                  <p className="text-lg font-bold text-white">{plan.name}</p>
                  <p className="mt-1 text-fuchsia-300">{plan.price}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {plan.desc}
                  </p>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              2. What kind of support are you looking for?
            </h2>
            <p className="mt-2 text-zinc-400">
              Choose the type of support that matters most right now.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["Speed Training", "Performance Guidance", "Both"].map((option) => (
                <label
                  key={option}
                  className={`cursor-pointer rounded-2xl border p-4 transition ${
                    formData.service === option
                      ? "border-fuchsia-400 bg-fuchsia-500/10"
                      : "border-zinc-700 bg-zinc-950 hover:border-fuchsia-500"
                  }`}
                >
                  <input
                    type="radio"
                    name="service"
                    value={option}
                    checked={formData.service === option}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  <span className="font-semibold text-white">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="goal" className="block text-lg font-bold text-white">
              3. What is the athlete trying to build most right now?
            </label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-fuchsia-400"
              required
            >
              <option value="">Select the primary goal</option>
              <option value="Speed">Speed</option>
              <option value="Agility">Agility</option>
              <option value="Explosiveness">Explosiveness</option>
              <option value="Acceleration">Acceleration</option>
              <option value="Athletic Performance">Athletic Performance</option>
              <option value="Confidence and Discipline">Confidence and Discipline</option>
              <option value="Overall Athlete Development">Overall Athlete Development</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block text-lg font-bold text-white"
            >
              4. What is the athlete’s current experience level?
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-fuchsia-400"
              required
            >
              <option value="">Select experience level</option>
              <option value="Beginner">Beginner</option>
              <option value="Developing">Developing</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="trainingDays"
              className="block text-lg font-bold text-white"
            >
              5. How many days per week can the athlete realistically train?
            </label>
            <select
              id="trainingDays"
              name="trainingDays"
              value={formData.trainingDays}
              onChange={handleChange}
              className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-fuchsia-400"
              required
            >
              <option value="">Select training days</option>
              <option value="1-2 days">1–2 days</option>
              <option value="2-3 days">2–3 days</option>
              <option value="3-4 days">3–4 days</option>
              <option value="4-5 days">4–5 days</option>
              <option value="5+ days">5+ days</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="equipment"
              className="block text-lg font-bold text-white"
            >
              6. What equipment or training environment is available?
            </label>
            <textarea
              id="equipment"
              name="equipment"
              value={formData.equipment}
              onChange={handleChange}
              rows="4"
              placeholder="Example: field, track, turf, gym, dumbbells, bodyweight only, school weight room, etc."
              className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-fuchsia-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="nutritionGoal"
              className="block text-lg font-bold text-white"
            >
              7. Are there any nutrition or recovery goals to support performance?
            </label>
            <input
              id="nutritionGoal"
              name="nutritionGoal"
              type="text"
              value={formData.nutritionGoal}
              onChange={handleChange}
              placeholder="Example: better recovery, more energy, healthier eating, weight management"
              className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-fuchsia-400"
            />
          </div>

          <div>
            <label
              htmlFor="biggestStruggle"
              className="block text-lg font-bold text-white"
            >
              8. What is the athlete struggling with most right now?
            </label>
            <textarea
              id="biggestStruggle"
              name="biggestStruggle"
              value={formData.biggestStruggle}
              onChange={handleChange}
              rows="5"
              placeholder="Example: confidence, consistency, speed, explosiveness, work ethic, structure, staying motivated"
              className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-fuchsia-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="successVision"
              className="block text-lg font-bold text-white"
            >
              9. What would success look like over the next 3 to 6 months?
            </label>
            <textarea
              id="successVision"
              name="successVision"
              value={formData.successVision}
              onChange={handleChange}
              rows="5"
              placeholder="Describe what better performance, confidence, or progress would look like."
              className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-fuchsia-400"
              required
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-lg font-bold text-white">
                10. Parent or athlete name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-fuchsia-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-bold text-white">
                11. Best email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-fuchsia-400"
                required
              />
            </div>
          </div>

          <div className="rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/10 p-5">
            <p className="text-sm leading-7 text-zinc-200">
              After you submit, I’ll review your answers and use them to build
              the right next step for the athlete’s performance, growth, and
              long-term development.
            </p>
          </div>

          {submitStatus.message && (
            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-7 text-red-200">
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-fuchsia-500 px-6 py-4 text-base font-bold text-white transition hover:bg-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit My Build"}
          </button>
        </form>
      </section>
    </main>
  );
}