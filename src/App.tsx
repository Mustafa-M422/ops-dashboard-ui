import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { AppShell } from "@/components/layout/AppShell"
import { DashboardPage } from "@/features/dashboard/DashboardPage"
import { ActivityPage } from "@/features/activity/ActivityPage"
import { SettingsPage } from "@/features/settings/SettingsPage"
import { LoginPage } from "@/features/auth/LoginPage"

import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider, useAuth } from "@/context/AuthContext"

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <RequireAuth>
                <AppShell>
                  <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/activity" element={<ActivityPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                  </Routes>
                </AppShell>
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
