"use client";

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
