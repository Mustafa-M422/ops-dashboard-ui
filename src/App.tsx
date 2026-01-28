import { Routes, Route } from "react-router-dom"
import { AppShell } from "@/components/layout/AppShell"
import { DashboardPage } from "@/features/dashboard/DashboardPage"
import { ActivityPage } from "@/features/activity/ActivityPage"

import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppShell>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/activity" element={<ActivityPage />} />
        </Routes>
      </AppShell>
    </ThemeProvider>
  )
}

export default App
