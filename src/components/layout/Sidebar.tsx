import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { NavLink } from "react-router-dom"
import { LayoutDashboard, Activity, Settings, GitCommit, Database } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    return (
        <div className={cn("pb-12 h-screen border-r bg-background", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Eng Dashboard
                    </h2>
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
