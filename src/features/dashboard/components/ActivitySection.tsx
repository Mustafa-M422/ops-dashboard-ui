import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { TrendChart } from "@/components/data-display/TrendChart"
import type { ActiveUserHistory } from "@/types/dashboard"
import { Activity } from "lucide-react"

interface ActivitySectionProps {
    data: ActiveUserHistory[]
}

export function ActivitySection({ data }: ActivitySectionProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Main Chart - Takes up 4/7 columns on large screens */}
            <div className="md:col-span-2 lg:col-span-4">
                <TrendChart
                    data={data}
                    dataKey="users"
                    title="Active Users (24h)"
                />
            </div>

            {/* Secondary Info - Takes up 3/7 columns on large screens */}
            <Card className="col-span-1 lg:col-span-3">
                <CardHeader>
                    <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {/* Mock Status Items */}
                        <div className="flex items-center">
                            <span className="relative flex h-3 w-3 mr-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">All Systems Operational</p>
                                <p className="text-sm text-muted-foreground">Updated 2m ago</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Activity className="mr-4 h-4 w-4 text-muted-foreground" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">Database Replication</p>
                                <p className="text-sm text-muted-foreground">Syncing normally</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Activity className="mr-4 h-4 w-4 text-muted-foreground" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">Cache Hit Rate</p>
                                <p className="text-sm text-muted-foreground">98.5%</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
