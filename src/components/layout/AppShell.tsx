import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Navbar } from "./Navbar"
import { cn } from "@/lib/utils"

interface AppShellProps {
    children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            {/* Desktop Sidebar */}
            <div className="hidden border-r bg-muted/40 lg:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <Sidebar />
                </div>
            </div>

            {/* Mobile Sidebar (Drawer-style overlay) */}
            <div
                className={cn(
                    "fixed inset-0 z-40 lg:hidden transition-transform transform bg-background border-r w-64",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <Sidebar />
            </div>

            {/* Overlay backdrop for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className="flex flex-col">
                <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
