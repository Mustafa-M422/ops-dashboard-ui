import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { NavLink } from "react-router-dom"
import { LayoutDashboard, Activity, Settings, GitCommit, Database, Terminal } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    return (
        <div className={cn("pb-12 h-screen border-r bg-background", className)}>
            <div className="space-y-4 py-4">

                <div className="px-3 py-2">
                    <div className="mb-6 flex items-center px-4">
                        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Terminal className="h-5 w-5" />
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">
                            EngBoard
                        </h2>
                    </div>
                    <nav className="space-y-1">
                        <NavLink to="/" end>
                            {({ isActive }) => (
                                <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start">
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    Overview
                                </Button>
                            )}
                        </NavLink>
                        <NavLink to="/activity">
                            {({ isActive }) => (
                                <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start">
                                    <Activity className="mr-2 h-4 w-4" />
                                    Activity
                                </Button>
                            )}
                        </NavLink>
                        <Button variant="ghost" className="w-full justify-start">
                            <GitCommit className="mr-2 h-4 w-4" />
                            Deployments
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Database className="mr-2 h-4 w-4" />
                            Resources
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                        </Button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
