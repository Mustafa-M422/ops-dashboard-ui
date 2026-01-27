import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import type { MetricStats } from "@/types/dashboard"
import { cn } from "@/lib/utils"

interface StatCardProps {
    data: MetricStats
}

const trendIcons = {
    up: ArrowUpRight,
    down: ArrowDownRight,
    neutral: Minus,
}

const trendColors = {
    up: "text-green-500",
    down: "text-red-500",
    neutral: "text-muted-foreground",
}

export function StatCard({ data }: StatCardProps) {
    const Icon = trendIcons[data.trend]

    // Logic: "Up" is usually good, but for "Error Rate" up is bad.
    // For simplicity in this demo, we assume "up" is green (good) unless context suggests otherwise.
    // In a real app we might pass a `trendIntent: 'positive' | 'negative'` prop.
    // For now, let's hardcode that "up" is green.
    const colorClass = trendColors[data.trend]

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {data.label}
                </CardTitle>
                <Icon className={cn("h-4 w-4", colorClass)} />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{data.value}</div>
                <p className="text-xs text-muted-foreground">
                    <span className={cn("font-medium", colorClass)}>
                        {data.changePercentage > 0 ? "+" : ""}
                        {data.changePercentage}%
                    </span>{" "}
                    from last month
                </p>
            </CardContent>
        </Card>
    )
}
