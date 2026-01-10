"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react"

export default function LoginPage() {
    const { login, register, signInWithGoogle, user } = useAuth()
    const router = useRouter()

    // "login" or "register"
    const [mode, setMode] = useState<"login" | "register">("login")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    // Form data
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("") // Used as displayName
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (user) {
            router.push("/subscriber")
        }
    }, [user, router])

    if (user) {
        return null // Don't render anything while redirecting
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setSuccess(null)
        setLoading(true)

        try {
            if (mode === "login") {
                await login(email, password)
                router.push("/subscriber")
            } else {
                if (!username) throw new Error("Username is required")
                await register(email, password, username)
                setSuccess("Account created! Logging you in...")
                setTimeout(() => router.push("/subscriber"), 1500)
            }
        } catch (err: any) {
            console.error(err)
            let msg = "Something went wrong"
            if (err.code === "auth/invalid-credential") msg = "Invalid email or password"
            else if (err.code === "auth/email-already-in-use") msg = "Email already in use"
            else if (err.code === "auth/weak-password") msg = "Password should be at least 6 characters"
            else if (err.message) msg = err.message
            setError(msg)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950 p-4">
            <div className="bg-card w-full max-w-md rounded-2xl shadow-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
                <div className="bg-forest-green p-6 text-center">
                    <h1 className="text-2xl font-bold text-white">Member Access</h1>
                    <p className="text-green-100 text-sm mt-1">Unlock exclusive content</p>
                </div>

                <div className="flex border-b">
                    <button
                        onClick={() => { setMode("login"); setError(null); }}
                        className={`flex-1 p-4 font-medium text-sm transition-colors ${mode === "login" ? "text-forest-green border-b-2 border-forest-green" : "text-muted-foreground hover:bg-stone-50 dark:hover:bg-stone-900"}`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => { setMode("register"); setError(null); }}
                        className={`flex-1 p-4 font-medium text-sm transition-colors ${mode === "register" ? "text-forest-green border-b-2 border-forest-green" : "text-muted-foreground hover:bg-stone-50 dark:hover:bg-stone-900"}`}
                    >
                        Sign Up
                    </button>
                </div>

                <div className="p-6">
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center dark:bg-red-900/20 dark:text-red-300">
                            <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mb-4 p-3 bg-green-50 text-green-600 text-sm rounded-lg flex items-center dark:bg-green-900/20 dark:text-green-300">
                            <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0" />
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {mode === "register" && (
                            <div>
                                <label className="block text-sm font-medium mb-1">Username (Display Name)</label>
                                <input
                                    type="text"
                                    required={mode === "register"}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full p-2 rounded-lg border bg-background focus:ring-2 focus:ring-forest-green focus:outline-none"
                                    placeholder="e.g. NatureLover123"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 rounded-lg border bg-background focus:ring-2 focus:ring-forest-green focus:outline-none"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                required
                                minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 rounded-lg border bg-background focus:ring-2 focus:ring-forest-green focus:outline-none"
                                placeholder={mode === "register" ? "Min 6 chars" : "Your password"}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-forest-green hover:bg-forest-green/90 text-white font-bold py-3 rounded-lg transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : (mode === "login" ? "Sign In" : "Create Account")}
                        </button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground">Or</span></div>
                    </div>

                    <button
                        type="button"
                        onClick={() => signInWithGoogle()}
                        className="w-full border hover:bg-stone-50 dark:hover:bg-stone-900 font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                        Sign in with Google
                    </button>

                </div>
            </div>
        </div>
    )
}
