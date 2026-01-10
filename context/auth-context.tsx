"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import {
    User,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut as firebaseSignOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth"
import { auth } from "@/lib/firebase"

interface AuthContextType {
    user: User | null
    loading: boolean
    signInWithGoogle: () => Promise<void>
    login: (email: string, pass: string) => Promise<void>
    register: (email: string, pass: string, name: string) => Promise<void>
    signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    signInWithGoogle: async () => { },
    login: async () => { },
    register: async () => { },
    signOut: async () => { },
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!auth) {
            console.warn("Auth not initialized (missing config). Authentication disabled.")
            setLoading(false)
            return
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const signInWithGoogle = async () => {
        if (!auth) {
            alert("Firebase configuration is missing. Authentication is disabled.")
            return
        }
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.error("Error signing in with Google", error)
            throw error
        }
    }

    const login = async (email: string, pass: string) => {
        if (!auth) throw new Error("Auth not initialized")
        await signInWithEmailAndPassword(auth, email, pass)
    }

    const register = async (email: string, pass: string, name: string) => {
        if (!auth) throw new Error("Auth not initialized")
        const result = await createUserWithEmailAndPassword(auth, email, pass)

        if (result.user) {
            try {
                await updateProfile(result.user, { displayName: name })
                // Force update local state to reflect display name immediately
                setUser({ ...result.user, displayName: name })
            } catch (err) {
                console.error("Error updating profile name", err)
            }
        }
    }

    const signOut = async () => {
        if (!auth) return
        try {
            await firebaseSignOut(auth)
        } catch (error) {
            console.error("Error signing out", error)
            throw error
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, signInWithGoogle, login, register, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
