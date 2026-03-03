# Boo-Berry Theme Showcase - Specification

## Project Overview
- **Project name**: boo-berry.nvim showcase site
- **Type**: Next.js website
- **Core functionality**: A beautiful theme showcase inspired by Catppuccin/Dracula that displays the boo-berry neovim theme with color palette, syntax highlighting preview, and installation instructions
- **Target users**: Developers looking for a dark purple/neon theme for their editor

## UI/UX Specification

### Layout Structure
- **Header**: Fixed navigation with logo and GitHub link
- **Hero Section**: Large title, tagline, and theme preview card
- **Color Palette Section**: Grid of all theme colors with names and hex codes (click to copy)
- **Syntax Preview Section**: Fake code editor showing syntax highlighting
- **Installation Section**: Copyable install commands
- **Footer**: Credits and links

### Responsive Breakpoints
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns for palette)
- Desktop: > 1024px (full layout)

### Visual Design

**Color Palette (applied to entire site)**
- Background: `#3A2A4D` (berry)
- Surface: `#2B1C3D` (berry_saturated)
- Text Primary: `#C7B8E0` (lilac)
- Text Secondary: `#886C9C` (berry_desaturated)
- Accent 1: `#D678B5` (bubblegum/red)
- Accent 2: `#7FC9AB` (mint/green)
- Accent 3: `#C78DFC` (violet/purple)
- Accent 4: `#E3C0A8` (gold/orange)

**Typography**
- Headings: "Outfit" (Google Font) - bold, modern geometric sans
- Body: "Outfit" - regular weight
- Code: "JetBrains Mono" - monospace for code display

**Spacing**
- Section padding: 80px vertical
- Container max-width: 1200px
- Card padding: 24px
- Grid gap: 16px

**Visual Effects**
- Subtle glow on accent elements
- Smooth hover transitions (0.2s ease)
- Color cards lift on hover with shadow
- Staggered fade-in animations on page load

### Components

1. **NavBar**: Logo text, GitHub icon link
2. **HeroCard**: Theme preview box with sample code
3. **ColorSwatch**: Square color card with name + hex, click to copy toast
4. **CodePreview**: Fake editor with line numbers, syntax highlighting
5. **InstallBlock**: Tabbed installer (npm, cargo, etc.) with copy button
6. **Footer**: Simple centered footer

## Functionality Specification

### Core Features
1. Display all 20+ theme colors in organized grid
2. Click any color swatch to copy hex code (show toast notification)
3. Show realistic syntax-highlighted code example
4. Display installation instructions for the neovim plugin
5. Link to GitHub repository

### User Interactions
- Hover effects on all interactive elements
- Click-to-copy on color swatches (with visual feedback)
- Smooth scroll between sections
- Copy button on install commands

### Edge Cases
- Copy to clipboard fallback for older browsers
- Graceful handling if fonts fail to load

## Acceptance Criteria
- [ ] Site loads with boo-berry theme colors applied throughout
- [ ] All color swatches display correct hex values from palette
- [ ] Clicking a color copies the hex code and shows toast
- [ ] Syntax preview shows realistic code with theme colors
- [ ] Installation section has copyable commands
- [ ] Site is responsive on mobile/tablet/desktop
- [ ] Page has smooth animations on load
- [ ] GitHub link navigates to the theme repo
