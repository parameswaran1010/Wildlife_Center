"use client"

import { useAuth } from "@/context/auth-context"
import { useEvent } from "@/context/event-context"
import { EVENTS } from "@/data/events"
import { Loader2, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function EventsPage() {
    const { user } = useAuth()
    const { registerForEvent, isRegistered, loading } = useEvent()
    const router = useRouter()

    const handleRegister = async (eventId: string) => {
        if (!user) {
            router.push("/login")
            return
        }
        try {
            await registerForEvent(eventId)
        } catch (error) {
            console.error("Failed to register", error)
            alert("Failed to register. Please try again.")
        }
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold text-forest-green">Upcoming Events</h1>
                <p className="text-muted-foreground mt-2">Join us for guided walks, talks, and workshops.</p>
            </div>

            <div className="grid gap-6">
                {EVENTS.map((event) => {
                    const registered = isRegistered(event.id)
                    // Parse date for display
                    const dateObj = new Date(event.date)
                    const day = dateObj.getDate()
                    const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()

                    return (
                        <div key={event.id} className="bg-card p-6 rounded-xl border shadow-sm flex flex-col md:flex-row gap-6 card-transition group hover:shadow-md transition-all">

                            {/* Date Badge */}
                            <div className="bg-forest-green/10 w-full md:w-32 h-32 rounded-lg flex flex-col items-center justify-center text-forest-green font-bold shrink-0">
                                <span className="text-3xl">{day}</span>
                                <span className="text-sm tracking-wider">{month}</span>
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold group-hover:text-forest-green transition-colors">{event.title}</h3>
                                        {registered && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                                Registered
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4" />
                                            {event.time}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4" />
                                            {event.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mt-auto pt-2">
                                    <Link
                                        href={`/events/${event.id}`}
                                        className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                                    >
                                        View Details
                                    </Link>

                                    {!registered && (
                                        <button
                                            onClick={() => handleRegister(event.id)}
                                            disabled={loading}
                                            className="inline-flex items-center justify-center rounded-lg bg-forest-green px-4 py-2 text-sm font-medium text-white hover:bg-forest-green/90 transition-colors disabled:opacity-50"
                                        >
                                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Register Now"}
                                        </button>
                                    )}

                                    {!registered && !user && (
                                        <span className="text-xs text-muted-foreground hidden md:inline-block">
                                            Sign in to register
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
