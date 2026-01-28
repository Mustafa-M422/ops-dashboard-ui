import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { DeploymentTable } from "@/features/dashboard/components/DeploymentTable"
import { DashboardSkeleton } from "@/features/dashboard/components/DashboardSkeleton"
import { api } from "@/lib/api"
import type { DashboardData, Deployment, DeploymentStatus, Environment } from "@/types/dashboard"
import { AlertCircle, Search, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function DeploymentsPage() {
    const [data, setData] = useState<DashboardData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    
    // Filters & Search
    const [searchQuery, setSearchQuery] = useState("")
    const [statusFilter, setStatusFilter] = useState<DeploymentStatus | "all">("all")
    const [envFilter, setEnvFilter] = useState<Environment | "all">("all")

    const loadData = () => {
        setIsLoading(true)
        api.getDashboardData()
            .then(setData)
            .catch(() => setError("Failed to load deployment data."))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        loadData()
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
        const matchesSearch = 
            deployment.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            deployment.commitMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
            deployment.authorName.toLowerCase().includes(searchQuery.toLowerCase())
            
        const matchesStatus = statusFilter === "all" || deployment.status === statusFilter
        const matchesEnv = envFilter === "all" || deployment.environment === envFilter
        
        return matchesSearch && matchesStatus && matchesEnv
    })

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Deployments</h1>
                    <p className="text-muted-foreground">
                        Manage and integrity check all system deployments.
                    </p>
                </div>
                <Button variant="outline" size="sm" onClick={loadData}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh
                </Button>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative flex-1 md:max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search projects, commits, or authors..."
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-9 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center space-x-2">
                        <select 
                            className="h-9 w-[150px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value as DeploymentStatus | "all")}
                        >
                            <option value="all" className="bg-background text-foreground">All Statuses</option>
                            <option value="success" className="bg-background text-foreground">Success</option>
                            <option value="failed" className="bg-background text-foreground">Failed</option>
                            <option value="in-progress" className="bg-background text-foreground">In Progress</option>
                            <option value="queued" className="bg-background text-foreground">Queued</option>
                        </select>
                        <select
                            className="h-9 w-[150px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            value={envFilter}
                            onChange={(e) => setEnvFilter(e.target.value as Environment | "all")}
                        >
                            <option value="all" className="bg-background text-foreground">All Environments</option>
                            <option value="production" className="bg-background text-foreground">Production</option>
                            <option value="staging" className="bg-background text-foreground">Staging</option>
                            <option value="development" className="bg-background text-foreground">Development</option>
                        </select>
                    </div>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Deployments</CardTitle>
                    <CardDescription>
                        A list of recent deployments to your environments.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DeploymentTable data={filteredDeployments} />
                    <div className="mt-4 flex items-center justify-between px-2">
                        <div className="text-sm text-muted-foreground">
                            Showing {filteredDeployments.length} results
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" disabled>Previous</Button>
                            <Button variant="outline" size="sm" disabled>Next</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}