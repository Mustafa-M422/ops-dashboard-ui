import { useAuth } from "@/context/AuthContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { LogOut, Monitor, Moon, Sun, User } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function SettingsPage() {
    const { user, logout } = useAuth()
    const { setTheme } = useTheme()

    if (!user) return null

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">
                    Manage your preferences and account settings.
                </p>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Appearance</CardTitle>
                        <CardDescription>
                            Customize how the dashboard looks on your device.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="font-medium">Theme</p>
                                <p className="text-sm text-muted-foreground">Select your preferred color theme.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" onClick={() => setTheme("light")}>
                                    <Sun className="mr-2 h-4 w-4" />
                                    Light
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => setTheme("dark")}>
                                    <Moon className="mr-2 h-4 w-4" />
                                    Dark
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => setTheme("system")}>
                                    <Monitor className="mr-2 h-4 w-4" />
                                    System
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                            Review your account details or sign out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4 rounded-md border p-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                <User className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">{user.username}</p>
                                <p className="text-sm text-muted-foreground">Engineering Admin</p>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button variant="destructive" onClick={logout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                Sign out
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
