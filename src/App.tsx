import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Skeleton } from "@/components/ui/Skeleton"
import { Activity } from "lucide-react"

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-8 space-y-8 bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-3xl space-y-4">
        <h1 className="text-3xl font-bold">Design System Verification</h1>

        {/* Buttons */}
        <div className="flex gap-4 items-center">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive" className="bg-red-500 text-white hover:bg-red-600">
            Destructive (Overridden)
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="icon"><Activity className="h-4 w-4" /></Button>
        </div>

        {/* Badges */}
        <div className="flex gap-4">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="destructive">Failed</Badge>
          <Badge variant="secondary">In Progress</Badge>
          <Badge variant="outline">Queued</Badge>
        </div>

        {/* Card */}
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Metric Card</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Total Deployments</p>
                <p className="text-sm text-muted-foreground">Last 24 hours</p>
              </div>
              <div className="text-2xl font-bold">2,345</div>
            </div>
          </CardContent>
        </Card>

        {/* Skeletons */}
        <Card className="w-[350px]">
          <CardHeader>
            <Skeleton className="h-6 w-[150px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
