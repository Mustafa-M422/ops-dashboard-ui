import { useState, useRef, useEffect } from "react"
import { useAuth } from "@/context/AuthContext"
import { Settings, LogOut, User } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/Button"

export function UserMenu() {
    const { user, logout } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    const toggleMenu = () => setIsOpen(!isOpen)

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSignOut = () => {
        logout()
        navigate("/login")
    }

    const handleSettings = () => {
        navigate("/settings")
        setIsOpen(false)
    }

    if (!user) return null

    return (
        <div className="relative" ref={menuRef}>
            <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full bg-primary/10 hover:bg-primary/20 p-0 overflow-hidden"
                onClick={toggleMenu}
            >
                <div className="flex h-full w-full items-center justify-center text-sm font-medium text-primary">
                    {user.username.slice(0, 2).toUpperCase()}
                </div>
            </Button>

            {isOpen && (
                <div className="absolute right-0 top-10 w-56 rounded-md border bg-popover p-1 shadow-md animate-in fade-in zoom-in-95 z-50">
                    <div className="flex items-center justify-start gap-2 p-2 border-b mb-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <User className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex flex-col space-y-0.5 leading-none">
                            <p className="font-medium text-sm text-popover-foreground">{user.username}</p>
                            <p className="text-xs text-muted-foreground">Admin/Engineer</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSettings}
                        className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </button>

                    <button
                        onClick={handleSignOut}
                        className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-destructive/10 hover:text-destructive transition-colors text-destructive"
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sign out</span>
                    </button>
                </div>
            )}
        </div>
    )
}
