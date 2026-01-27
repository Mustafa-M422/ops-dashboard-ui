import { Skeleton } from "@/components/ui/Skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/Card"

export function DashboardSkeleton() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-[250px]" />
                    <Skeleton className="h-4 w-[350px]" />
                </div>
                <Skeleton className="h-4 w-[150px]" />
            </div>

            {/* KPI Grid Skeleton */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i}>
                        <CardHeader className="pb-2">
                            <Skeleton className="h-4 w-[100px]" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-8 w-[60px] mb-2" />
                            <Skeleton className="h-3 w-[120px]" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Chart Skeleton */}
                <Card className="col-span-4 lg:col-span-4">
                    <CardHeader>
                        <Skeleton className="h-6 w-[150px]" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-[300px] w-full" />
                    </CardContent>
                </Card>

                {/* Status List Skeleton */}
                <Card className="col-span-1 lg:col-span-3">
                    <CardHeader>
                        <Skeleton className="h-6 w-[120px]" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="flex items-center">
                                    <Skeleton className="h-4 w-4 mr-4 rounded-full" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[200px]" />
                                        <Skeleton className="h-3 w-[100px]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Table Skeleton */}
            <Card className="col-span-7">
                <CardHeader>
                    <Skeleton className="h-6 w-[180px]" />
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
