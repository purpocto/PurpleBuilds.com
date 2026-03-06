import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">

        {/* Top Section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-xl font-black text-white">
              <span className="text-fuchsia-400">Purple</span>Builds
            </h3>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Building together mentally, physically, and spiritually.
              Personalized training and nutrition guidance designed
              for real life.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Navigation
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-300">
              <Link to="/" className="transition hover:text-fuchsia-400">
                Home
              </Link>

              <Link to="/build-with-me" className="transition hover:text-fuchsia-400">
                Build With Me
              </Link>

              <Link to="/about" className="transition hover:text-fuchsia-400">
                About
              </Link>

              <Link to="/contact" className="transition hover:text-fuchsia-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Contact
            </h4>

            <p className="mt-4 text-sm text-zinc-300">
              Email:
            </p>

            <a
              href="mailto:ryanrb.engineer@gmail.com"
              className="text-sm text-fuchsia-400 transition hover:text-fuchsia-300"
            >
              ryanrb.engineer@gmail.com
            </a>

            <p className="mt-4 text-sm text-zinc-400">
              I personally review every request and respond as soon as possible.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} PurpleBuilds. All rights reserved.
        </div>

      </div>
    </footer>
  );
}