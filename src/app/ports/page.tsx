"use client";

import Link from "next/link";

const ports = [
  {
    name: "Neovim",
    description: "The original Boo-Berry theme",
    color: "var(--mint)",
    link: "https://github.com/booberrytheme/boo-berry.nvim",
    category: "Editor",
  },
  {
    name: "Ghostty",
    description: "Terminal emulator",
    color: "var(--violet)",
    link: "https://github.com/booberrytheme/ghostty",
    category: "Terminal",
  },
  {
    name: "Zed",
    description: "The new editor on the block",
    color: "var(--mint)",
    link: "https://github.com/booberrytheme/zed",
    category: "Editor",
  },
];

const categories = [...new Set(ports.map((p) => p.category))];

export default function Ports() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg)]/90 backdrop-blur-sm border-b border-[var(--berry-dim)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🫐</span>
            <span className="text-xl font-semibold">Boo-Berry</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/colors"
              className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              Colors
            </Link>
            <a
              href="https://github.com/booberrytheme/boo-berry.nvim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface)] hover:bg-[var(--berry-fade)] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.10 2.64.65.71 1.03 1.60 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Ports */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Ports</h1>
            <p className="text-[var(--fg-muted)]">
              Boo-Berry is available for your favorite tools
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-lg font-semibold mb-4 text-[var(--violet)]">
                {category}
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {ports
                  .filter((p) => p.category === category)
                  .map((port) => (
                    <a
                      key={port.name}
                      href={port.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl bg-[var(--surface)] border border-[var(--berry-dim)] hover:border-[var(--violet)] transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: port.color }}
                        >
                          <svg
                            className="w-4 h-4 text-[var(--bg)]"
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
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-[var(--violet)] transition-colors">
                            {port.name}
                          </h3>
                          <p className="text-xs text-[var(--fg-muted)]">
                            {port.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--berry-dim)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--fg-muted)] mb-4">
            Made with <span className="text-[var(--bubblegum)]">♥</span> by{" "}
            <a
              href="https://github.com/booberrytheme"
              className="text-[var(--violet)] hover:underline"
            >
              booberrytheme
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
