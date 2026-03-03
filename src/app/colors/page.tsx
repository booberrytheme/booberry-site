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
