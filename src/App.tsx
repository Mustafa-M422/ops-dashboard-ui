import { Routes, Route } from "react-router-dom"
import { AppShell } from "@/components/layout/AppShell"
import { DashboardPage } from "@/features/dashboard/DashboardPage"
import { ActivityPage } from "@/features/activity/ActivityPage"

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/activity" element={<ActivityPage />} />
      </Routes>
    </AppShell>
  )
}

export default App
