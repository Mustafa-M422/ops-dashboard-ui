import { Badge } from "@/components/ui/Badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import type { Deployment, DeploymentStatus } from "@/types/dashboard"
import { format } from "date-fns"
import { GitCommit } from "lucide-react"

interface DeploymentTableProps {
    data: Deployment[]
}

const statusVariantMap: Record<DeploymentStatus, "default" | "secondary" | "destructive" | "success" | "outline"> = {
    success: "success",
    failed: "destructive",
    "in-progress": "secondary", // Blue/Gray usually implies active
    queued: "outline",
}

export function DeploymentTable({ data }: DeploymentTableProps) {
    return (
        <Card className="col-span-4 lg:col-span-7">
            <CardHeader>
                <CardTitle>Recent Deployments</CardTitle>
            </CardHeader>
            <CardContent>
                {data.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="rounded-full bg-muted/50 p-3 mb-3">
                            <GitCommit className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-medium">No recent deployments</p>
                        <p className="text-xs text-muted-foreground">Deployments will appear here once active.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-muted-foreground border-b">
                                <tr>
                                    <th className="font-medium py-3 pr-4">Project</th>
                                    <th className="font-medium py-3 px-4">Commit</th>
                                    <th className="font-medium py-3 px-4">Status</th>
                                    <th className="font-medium py-3 px-4">Environment</th>
                                    <th className="font-medium py-3 pl-4 text-right">Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {data.map((deployment) => (
                                    <tr key={deployment.id} className="group hover:bg-muted/50 transition-colors">
                                        <td className="py-3 pr-4 font-medium">
                                            {deployment.projectName}
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex flex-col">
                                                <span className="truncate max-w-[200px] font-medium text-foreground">
                                                    {deployment.commitMessage}
                                                </span>
                                                <div className="flex items-center text-xs text-muted-foreground mt-0.5">
                                                    <GitCommit className="mr-1 h-3 w-3" />
                                                    <span className="font-mono">{deployment.commitHash}</span>
                                                    <span className="mx-2">•</span>
                                                    <span>{deployment.authorName}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <Badge variant={statusVariantMap[deployment.status]}>
                                                {deployment.status}
                                            </Badge>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className="capitalize">{deployment.environment}</span>
                                        </td>
                                        <td className="py-3 pl-4 text-right text-muted-foreground">
                                            {format(new Date(deployment.deployedAt), "MMM d, HH:mm")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
