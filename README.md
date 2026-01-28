# Engineering Dashboard

A modern, responsive internal dashboard for tracking engineering metrics, system health, and deployment velocity. Built with **React**, **TypeScript**, and **Tailwind CSS**.

This project mirrors how internal dashboards are built in real engineering teams, focusing on clarity, usability, and realistic UI states rather than marketing visuals.



## Features

### Real-time Overview
- **Key Metrics**
  - Track Total Deployments, Average Build Time, and Error Rates.
- **Activity Trends**
  - Visualized active usage history using Recharts.
- **Recent Deployments**
  - Status table (Success, Failed, In-Progress) with environment tracking and timestamps.

### UX & State Handling
- **"Live" Data Simulation**
  - Mock API layer simulates network latency.
  - Dynamic “Last Updated” timestamps with active indicator.
- **Loading States**
  - Skeleton placeholders for smoother perceived performance.
- **Error Handling**
  - Retry action when data fetching fails.
- **Empty States**
  - Graceful handling when deployment data is unavailable.

### Layout & Navigation
- Collapsible Sidebar navigation.
- Top Navbar with user controls.
- Client-side routing using `react-router-dom`:
  - Overview
  - Activity
  - Settings
- Grid-based layouts adapting from Desktop to Mobile.

### User Experience Enhancements
- **Dark / Light Mode**
  - Toggle available from the top navigation.
  - Theme preference persists across sessions.
- **User Menu**
  - Displays current signed-in user.
  - Quick access to Settings and Sign Out.
- **Settings Page**
  - Theme selection (Light / Dark / System).
  - Sign out action.

### Design System
- Clean, enterprise-ready UI using `shadcn/ui`-inspired component patterns.
- Fully styled with Tailwind CSS using HSL-based theming tokens.
- Reusable primitives (Cards, Buttons, Badges, Skeletons).

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
│   └── data-display/    # Charts and tables
├── features/            # Feature-specific logic (Domain Driven)
│   ├── dashboard/       # Overview page components & logic
│   ├── activity/        # Activity page components
│   └── settings/        # User preferences and settings
├── lib/                 # Utilities and API mocks
├── mocks/               # JSON data fixtures
├── types/               # TypeScript interfaces (Data Models)
└── App.tsx              # Main Router setup
```

##  Customization

- **Theming**: Edit `src/index.css` to tweak CSS variables (Colors, Radius) that power the Tailwind config.
- **Data**: Update `src/lib/api.ts` to swap the mock `setTimeout` with real `fetch` calls to your backend.


## Visuals

- **Dashboard**
<img width="1890" height="888" alt="image" src="https://github.com/user-attachments/assets/3a5c68bb-293f-41e5-b0f0-6038892403f1" />

<img width="1890" height="897" alt="image" src="https://github.com/user-attachments/assets/1cfba58b-9b68-4e55-b5c1-98d718587340" />

- **Activity Page**
<img width="1887" height="827" alt="image" src="https://github.com/user-attachments/assets/529de1d8-48fb-47b3-80a3-3035f05f25e5" />

- **Setting Page**
<img width="1918" height="807" alt="image" src="https://github.com/user-attachments/assets/22ba71e7-8c1d-40ed-96e0-998dd10756b9" />

- **Deployment Page**
<img width="1918" height="772" alt="image" src="https://github.com/user-attachments/assets/6e3d8a18-b45a-4dfb-b9d8-3048f12d10ca" />




*Verified locally on Windows.*
