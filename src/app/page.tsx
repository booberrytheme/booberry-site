"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../imgs/booberry-logo-circle.png";

const features = [
  {
    title: "Syntax Highlighting",
    description: "Carefully crafted syntax colors for vibrant, readable code",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Hand-Crafted",
    description: "Every color chosen with care for visual harmony",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Easy to Use",
    description: "Simple setup with plugin managers",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg)]/90 backdrop-blur-sm border-b border-[var(--berry-dim)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} width={50} height={50} alt="Boo-Berry Logo" />
          </Link>{" "}
          <nav className="flex items-center gap-4">
            <Link
              href="/ports"
              className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              Ports
            </Link>
            <Link
              href="/colors"
              className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              Colors
            </Link>
            <a
              href="https://github.com/booberytheme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface)] hover:bg-[var(--berry-fade)] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <Image
              src={Logo}
              height={150}
              width={150}
              alt="BooBerry Logo"
              className="mx-auto"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--bubblegum)] via-[var(--violet)] to-[var(--mint)] bg-clip-text text-transparent">
              Boo-Berry
            </h1>
            <p className="text-xl md:text-2xl text-[var(--fg-muted)] max-w-2xl mx-auto mb-8">
              A dark purple theme with bubblegum, mint, and violet accents for
              Neovim
            </p>
            <div className="flex gap-4 justify-center mb-16">
              <a
                href="/ports"
                className="px-6 py-3 rounded-lg bg-[var(--violet)] text-[var(--berry-saturated)] font-semibold hover:opacity-90 transition-opacity glow"
              >
                Discover Ports
              </a>
              <a
                href="/colors"
                className="px-6 py-3 rounded-lg bg-[var(--surface)] hover:bg-[var(--berry-fade)] transition-colors"
              >
                Explore Colors
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-xl bg-[var(--surface)] border border-[var(--berry-dim)]"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[var(--berry-fade)] flex items-center justify-center text-[var(--violet)]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--fg-muted)] text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Preview */}
      <section className="py-16 px-6 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 justify-center mb-8">
            <div className="w-16 h-16 rounded-xl bg-[var(--bubblegum)]"></div>
            <div className="w-16 h-16 rounded-xl bg-[var(--mint)]"></div>
            <div className="w-16 h-16 rounded-xl bg-[var(--violet)]"></div>
            <div className="w-16 h-16 rounded-xl bg-[var(--gold)]"></div>
          </div>
          <p className="text-center text-[var(--fg-muted)]">
            A soothing palette inspired by Boo Berry cereal
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[var(--berry-dim)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Project</h4>
              <ul className="space-y-2 text-[var(--fg-muted)]">
                <li>
                  <a
                    href="/ports"
                    className="hover:text-[var(--fg)] transition-colors"
                  >
                    Ports
                  </a>
                </li>
                <li>
                  <a
                    href="/colors"
                    className="hover:text-[var(--fg)] transition-colors"
                  >
                    Palette
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mrpbennett/booberytheme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--fg)] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <ul className="space-y-2 text-[var(--fg-muted)]">
                <li>
                  <a
                    href="https://github.com/booberytheme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--fg)] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Boo-Berry</h4>
              <p className="text-[var(--fg-muted)] text-sm">
                A community-driven color scheme for developers who love purple.
              </p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-[var(--berry-dim)]">
            <p className="text-[var(--fg-muted)] text-sm">
              Made with <span className="text-[var(--bubblegum)]">♥</span> by{" "}
              <a
                href="https://github.com/booberytheme"
                className="text-[var(--violet)] hover:underline"
              >
                booberry team
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
