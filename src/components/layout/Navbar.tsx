import { Menu } from "lucide-react"
import { Button } from "@/components/ui/Button"

interface NavbarProps {
    onMenuClick: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
            <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={onMenuClick}
            >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
            </Button>
            <div className="w-full flex-1">
                <h1 className="text-lg font-semibold">Overview</h1>
            </div>
            <div className="flex items-center gap-4">
                {/* User Profile or other top-right items could go here */}
                <div className="h-8 w-8 rounded-full bg-muted" />
            </div>
        </header>
    )
}
