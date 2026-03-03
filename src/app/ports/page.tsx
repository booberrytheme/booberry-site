"use client";

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
