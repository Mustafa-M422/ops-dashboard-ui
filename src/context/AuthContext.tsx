import { createContext, useContext, useState, useEffect } from "react"

interface User {
    username: string
}

interface AuthContextType {
    user: User | null
    login: (username: string) => void
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const login = (username: string) => {
        const newUser = { username }
        setUser(newUser)
        localStorage.setItem("user", JSON.stringify(newUser))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
