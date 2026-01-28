# Engineering Dashboard

A modern, responsive internal dashboard for tracking engineering metrics, system health, and deployment velocity. Built with **React**, **TypeScript**, and **Tailwind CSS**.

![Dashboard Preview](./public/vite.svg) *Note: Replace with actual screenshot*

## Features

- **Real-time Overview**:
  - **Key Metrics**: Track Total Deployments, Build Times, and Error Rates.
  - **Activity Trends**: Visualized active user history using Recharts.
  - **Recent Deployments**: Status table (Success, Failed, In-Progress) with environment tracking.
- **"Live" Data Simulation**: Mock API layer simulates network latency and provides real-time "Last Updated" timestamps.
- **Responsive Layout**:
  - Collapsible Sidebar navigation.
  - Mobile-friendly Drawer menu.
  - Grid-based layouts adapting from Desktop to Mobile.
- **Modern Design**:
  - Clean, enterprise-ready UI using `shadcn/ui`-inspired patterns.
  - Full aesthetic control with Tailwind CSS (HSL variable-based theming).
- **Navigation**: Client-side routing with `react-router-dom` (Overview vs. Activity views).

## Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utils**: `clsx` & `tailwind-merge` for robust class handling.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd engineering-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:5173` (or similar port).

### Building for Production

To create a production-ready build:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

##  Project Structure

```text
src/
├── components/          # Shared UI components (Buttons, Cards, Inputs)
│   ├── layout/          # AppShell, Sidebar, Navbar
│   ├── ui/              # Atom-level design primitives
│   └── data-display/    # Charts and complex visualizations
├── features/            # Feature-specific logic (Domain Driven)
│   ├── dashboard/       # Overview page components & logic
│   └── activity/        # Activity page components
├── lib/                 # Utilities and API mocks
├── mocks/               # JSON data fixtures
├── types/               # TypeScript interfaces (Data Models)
└── App.tsx              # Main Router setup
```

##  Customization

- **Theming**: Edit `src/index.css` to tweak CSS variables (Colors, Radius) that power the Tailwind config.
- **Data**: Update `src/lib/api.ts` to swap the mock `setTimeout` with real `fetch` calls to your backend.

---

*Verified locally on Windows.*
