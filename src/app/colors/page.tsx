"use client";

import { useState } from "react";
import Link from "next/link";

const palette = {
  bg: "#3A2A4D",
  fg: "#C7B8E0",
  selection: "#5A3D6E",
  comment: "#886C9C",
  red: "#D678B5",
  orange: "#E3C0A8",
  yellow: "#E3C0A8",
  green: "#7FC9AB",
  purple: "#C78DFC",
  cyan: "#7FC9AB",
  pink: "#D678B5",
  violet: "#C78DFC",
  bubblegum: "#D678B5",
  bright_red: "#E08CC3",
  bright_green: "#96D6BC",
  bright_yellow: "#EDCFB8",
  bright_blue: "#D4A3FD",
  bright_magenta: "#E08CC3",
  bright_cyan: "#96D6BC",
  bright_white: "#DDD0EE",
  menu: "#2B1C3D",
  visual: "#5A3D6E",
  gutter_fg: "#886C9C",
  nontext: "#47345E",
  white: "#C7B8E0",
  black: "#2B1C3D",
};

const colorGroups = [
  {
    name: "Core",
    colors: [
      { name: "Background", value: palette.bg },
      { name: "Foreground", value: palette.fg },
      { name: "Selection", value: palette.selection },
      { name: "Comment", value: palette.comment },
    ],
  },
  {
    name: "Syntax",
    colors: [
      { name: "Red", value: palette.red },
      { name: "Orange", value: palette.orange },
      { name: "Yellow", value: palette.yellow },
      { name: "Green", value: palette.green },
      { name: "Purple", value: palette.purple },
      { name: "Cyan", value: palette.cyan },
      { name: "Pink", value: palette.pink },
    ],
  },
  {
    name: "Bright",
    colors: [
      { name: "Bright Red", value: palette.bright_red },
      { name: "Bright Green", value: palette.bright_green },
      { name: "Bright Yellow", value: palette.bright_yellow },
      { name: "Bright Blue", value: palette.bright_blue },
      { name: "Bright Magenta", value: palette.bright_magenta },
      { name: "Bright Cyan", value: palette.bright_cyan },
      { name: "Bright White", value: palette.bright_white },
    ],
  },
  {
    name: "UI",
    colors: [
      { name: "Menu", value: palette.menu },
      { name: "Visual", value: palette.visual },
      { name: "Gutter FG", value: palette.gutter_fg },
      { name: "Nontext", value: palette.nontext },
      { name: "White", value: palette.white },
      { name: "Black", value: palette.black },
    ],
  },
];

interface ToastProps {
  message: string;
  onClose: () => void;
}

function Toast({ message, onClose }: ToastProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 toast">
      <div className="bg-[var(--surface)] border border-[var(--violet)] px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
        <svg
          className="w-5 h-5 text-[var(--mint)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-[var(--fg)]">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-[var(--fg-muted)] hover:text-[var(--fg)]"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Colors() {
  const [toast, setToast] = useState<{ message: string } | null>(null);

  const copyToClipboard = async (text: string, name: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({ message: `${name} copied!` });
      setTimeout(() => setToast(null), 2000);
    } catch {
      setToast({ message: "Failed to copy" });
    }
  };

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
              href="/ports"
              className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              Ports
            </Link>
            <a
              href="https://github.com/mrpbennett/boo-berry.nvim"
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

      {/* Color Palette */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Color Palette</h1>
          <p className="text-center text-[var(--fg-muted)] mb-12">
            Click any color to copy
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {colorGroups.map((group) => (
              <div key={group.name}>
                <h3 className="text-lg font-semibold mb-4 text-[var(--violet)]">
                  {group.name}
                </h3>
                <div className="space-y-3">
                  {group.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => copyToClipboard(color.value, color.name)}
                      className="color-card w-full flex items-center gap-3 p-3 rounded-lg bg-[var(--surface)] cursor-pointer transition-all border border-transparent hover:border-[var(--berry-fade)]"
                    >
                      <div
                        className="w-10 h-10 rounded-lg shadow-inner"
                        style={{ backgroundColor: color.value }}
                      ></div>
                      <div className="text-left">
                        <div className="font-medium">{color.name}</div>
                        <div className="text-sm text-[var(--fg-muted)] font-mono">
                          {color.value}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <Toast message={toast.message} onClose={() => setToast(null)} />
      )}
    </div>
  );
}
