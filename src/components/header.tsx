import Link from "next/link";
import Image from "next/image";

import Logo from "../imgs/booberry-logo-circle.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg)]/90 backdrop-blur-sm border-b border-[var(--berry-dim)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} width={50} height={50} alt="Boo-Berry Logo" />
        </Link>{" "}
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
  );
}
