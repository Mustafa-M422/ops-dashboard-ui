import type { MetricStats } from "@/types/dashboard"
import { StatCard } from "./StatCard"

interface KPIGridProps {
    metrics: MetricStats[]
}

export function KPIGrid({ metrics }: KPIGridProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
                <StatCard key={metric.id} data={metric} />
            ))}
        </div>
    )
}
