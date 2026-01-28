import { useEffect, useState } from "react"
import { KPIGrid } from "@/features/dashboard/components/KPIGrid"
import { ActivitySection } from "@/features/dashboard/components/ActivitySection"
import { DeploymentTable } from "@/features/dashboard/components/DeploymentTable"
import { DashboardSkeleton } from "@/features/dashboard/components/DashboardSkeleton"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { AlertCircle } from "lucide-react"
import { api } from "@/lib/api"
import type { DashboardData } from "@/types/dashboard"

export function DashboardPage() {
    const [data, setData] = useState<DashboardData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const loadData = () => {
        setIsLoading(true)
        setError(null)
        api.getDashboardData()
            .then(setData)
            .catch(() => setError("Failed to load dashboard data. Please try again."))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        loadData()
    }, [])

    if (isLoading) {
        return <DashboardSkeleton />
    }

    if (error) {
        return (
            <div className="flex h-[50vh] flex-col items-center justify-center space-y-4">
                <Card className="w-full max-w-md border-destructive/50 bg-destructive/10">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                        <AlertCircle className="h-10 w-10 text-destructive mb-4" />
                        <h2 className="text-lg font-semibold text-destructive mb-2">Error Loading Data</h2>
                        <p className="text-sm text-muted-foreground mb-6">
                            {error}
                        </p>
                        <Button onClick={loadData} variant="outline" className="border-destructive/50 hover:bg-destructive/20">
                            Try Again
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (!data) return null;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Engineering Dashboard</h1>
                    <p className="text-muted-foreground">
                        Real-time view of system performance, deployment velocity, and team activity.
                        <br />
                        Use this board to monitor production health and track release cadence.
                    </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Live • Last updated: {new Date(data.lastUpdated).toLocaleTimeString()}
                </div>
            </div>

            <KPIGrid metrics={data.metrics} />
            <ActivitySection data={data.activity} />
            <DeploymentTable data={data.recentDeployments} />
        </div>
    )
}
