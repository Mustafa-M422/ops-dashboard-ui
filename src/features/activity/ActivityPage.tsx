import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { TrendChart } from "@/components/data-display/TrendChart"
import { Activity as ActivityIcon, AlertTriangle, CheckCircle, Info } from "lucide-react"
import { api } from "@/lib/api"
import type { DashboardData } from "@/types/dashboard"
import { DashboardSkeleton } from "@/features/dashboard/components/DashboardSkeleton"

export function ActivityPage() {
    const [data, setData] = useState<DashboardData | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.getDashboardData()
            .then(setData)
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) return <DashboardSkeleton />
    if (!data) return null

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">System Activity</h1>
                <p className="text-muted-foreground">Real-time usage metrics and system events.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ActivityIcon className="h-5 w-5" />
                            Active Users Trend
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[400px]">
                            <TrendChart data={data.activity} dataKey="users" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-2 md:col-span-1">
                    <CardHeader>
                        <CardTitle>System Health</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 rounded-lg border p-4">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <div>
                                    <div className="font-semibold">All Systems Operational</div>
                                    <div className="text-sm text-muted-foreground">Last check 2 mins ago</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 rounded-lg border p-4 bg-yellow-50/10">
                                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                                <div>
                                    <div className="font-semibold">High Latency Detected</div>
                                    <div className="text-sm text-muted-foreground">Region: us-east-1</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-2 md:col-span-1">
                    <CardHeader>
                        <CardTitle>Recent Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                                    <div className="mt-1 rounded-full bg-blue-100 p-1 dark:bg-blue-900">
                                        <Info className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            Automated Scaling Action
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Scaled up instance count to 5 due to load.
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {10 + i} mins ago
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
