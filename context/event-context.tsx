"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./auth-context"
import { db } from "@/lib/firebase"
import {
    collection,
    doc,
    setDoc,
    deleteDoc,
    query,
    where,
    onSnapshot,
    serverTimestamp
} from "firebase/firestore"

interface EventContextType {
    registeredEventIds: string[]
    loading: boolean
    registerForEvent: (eventId: string) => Promise<void>
    unregisterFromEvent: (eventId: string) => Promise<void>
    isRegistered: (eventId: string) => boolean
}

const EventContext = createContext<EventContextType>({
    registeredEventIds: [],
    loading: true,
    registerForEvent: async () => { },
    unregisterFromEvent: async () => { },
    isRegistered: () => false,
})

export function EventProvider({ children }: { children: React.ReactNode }) {
    const { user } = useAuth()
    const [registeredEventIds, setRegisteredEventIds] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user || !db) {
            setRegisteredEventIds([])
            setLoading(false)
            return
        }

        const q = query(collection(db, "registrations"), where("userId", "==", user.uid))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const ids = snapshot.docs.map(doc => doc.data().eventId)
            setRegisteredEventIds(ids)
            setLoading(false)
        }, (error) => {
            console.error("Error fetching registrations:", error)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [user])

    const registerForEvent = async (eventId: string) => {
        if (!user || !db) throw new Error("Must be logged in to register")

        // Create a composite key or just use random ID. 
        // Composite key (userId_eventId) is easier to prevent duplicates and query.
        const docId = `${user.uid}_${eventId}`

        await setDoc(doc(db, "registrations", docId), {
            userId: user.uid,
            eventId: eventId,
            registeredAt: serverTimestamp()
        })
    }

    const unregisterFromEvent = async (eventId: string) => {
        if (!user || !db) return

        const docId = `${user.uid}_${eventId}`
        await deleteDoc(doc(db, "registrations", docId))
    }

    const isRegistered = (eventId: string) => registeredEventIds.includes(eventId)

    return (
        <EventContext.Provider value={{ registeredEventIds, loading, registerForEvent, unregisterFromEvent, isRegistered }}>
            {children}
        </EventContext.Provider>
    )
}

export const useEvent = () => useContext(EventContext)
