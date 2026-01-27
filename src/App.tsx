import { useEffect, useState } from "react"
import { AppShell } from "@/components/layout/AppShell"
import { KPIGrid } from "@/features/dashboard/components/KPIGrid"
import { api } from "@/lib/api"
import type { DashboardData } from "@/types/dashboard"

function App() {
  const [data, setData] = useState<DashboardData | null>(null)

  useEffect(() => {
    api.getDashboardData().then(setData)
  }, [])

  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Engineering Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Mostafa.</p>
        </div>

        {/* 1. KPI Section */}
        {data ? (
          <KPIGrid metrics={data.metrics} />
        ) : (
          <p>Loading metrics...</p>
        )}
      </div>
    </AppShell>
  )
}

export default App
