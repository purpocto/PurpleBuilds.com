import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="text-xl font-black tracking-tight text-white">
          <span className="text-fuchsia-400">Purple</span>Builds
        </Link>

        <div className="flex items-center gap-6 text-sm font-semibold text-zinc-300">
          <Link to="/" className="transition hover:text-fuchsia-400">
            Home
          </Link>

          <Link to="/build-with-me" className="transition hover:text-fuchsia-400">
            Build With Me
          </Link>

          <Link to="/pricing" className="transition hover:text-fuchsia-400">
            Pricing
          </Link>

          <Link to="/faq" className="transition hover:text-fuchsia-400">
            FAQ
          </Link>

          <Link to="/about" className="transition hover:text-fuchsia-400">
            About
          </Link>

          <Link to="/contact" className="transition hover:text-fuchsia-400">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}