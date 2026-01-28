import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { DeploymentTable } from "@/features/dashboard/components/DeploymentTable"
import { DashboardSkeleton } from "@/features/dashboard/components/DashboardSkeleton"
import { api } from "@/lib/api"
import type { DashboardData, Deployment, DeploymentStatus, Environment } from "@/types/dashboard"
import { AlertCircle, Filter } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function DeploymentsPage() {
    const [data, setData] = useState<DashboardData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    
    // Filters
    const [statusFilter, setStatusFilter] = useState<DeploymentStatus | "all">("all")
    const [envFilter, setEnvFilter] = useState<Environment | "all">("all")

    useEffect(() => {
        setIsLoading(true)
        api.getDashboardData()
            .then(setData)
            .catch(() => setError("Failed to load deployment data."))
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) return <DashboardSkeleton />
    
    if (error) {
        return (
            <div className="flex h-[50vh] flex-col items-center justify-center space-y-4">
                <Card className="w-full max-w-md border-destructive/50 bg-destructive/10">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                        <AlertCircle className="h-10 w-10 text-destructive mb-4" />
                        <h2 className="text-lg font-semibold text-destructive mb-2">Error Loading Data</h2>
                        <p className="text-sm text-muted-foreground mb-6">{error}</p>
                        <Button onClick={() => window.location.reload()} variant="outline" className="border-destructive/50 hover:bg-destructive/20">
                            Try Again
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (!data) return null

    // Filter logic
    const filteredDeployments = data.recentDeployments.filter((deployment: Deployment) => {
        const statusMatch = statusFilter === "all" || deployment.status === statusFilter
        const envMatch = envFilter === "all" || deployment.environment === envFilter
        return statusMatch && envMatch
    })

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Deployments</h1>
                <p className="text-muted-foreground">
                    Manage and view deployment history across all environments.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Deployment History</CardTitle>
                            <CardDescription>
                                A detailed log of all deployment activities.
                            </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                           <div className="flex items-center space-x-2">
                                <Filter className="h-4 w-4 text-muted-foreground" />
                                <select 
                                    className="h-9 w-[150px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value as DeploymentStatus | "all")}
                                >
                                    <option value="all">All Statuses</option>
                                    <option value="success">Success</option>
                                    <option value="failed">Failed</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="queued">Queued</option>
                                </select>
                                <select
                                    className="h-9 w-[150px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    value={envFilter}
                                    onChange={(e) => setEnvFilter(e.target.value as Environment | "all")}
                                >
                                    <option value="all">All Environments</option>
                                    <option value="production">Production</option>
                                    <option value="staging">Staging</option>
                                    <option value="development">Development</option>
                                </select>
                           </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <DeploymentTable data={filteredDeployments} />
                </CardContent>
            </Card>
        </div>
    )
}