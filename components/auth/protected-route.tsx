"use client"

import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login")
        }
    }, [user, loading, router])

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-green"></div>
                <p className="text-muted-foreground animate-pulse">Verifying membership...</p>
            </div>
        )
    }

    if (!user) {
        return null // Will redirect
    }

    return <>{children}</>
}
