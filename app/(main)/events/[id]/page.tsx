"use client"

import { useAuth } from "@/context/auth-context"
import { useEvent } from "@/context/event-context"
import { EVENTS } from "@/data/events"
import { Loader2, Calendar, MapPin, Clock, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { notFound, useParams, useRouter } from "next/navigation"
import { use, useEffect } from "react"

export default function EventDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const { user, loading: authLoading } = useAuth()
    const { isRegistered, loading: eventLoading, registerForEvent, unregisterFromEvent } = useEvent()
    const router = useRouter()

    const event = EVENTS.find(e => e.id === id)

    if (!event) {
        notFound()
    }

    const registered = isRegistered(event.id)

    // Optional: Redirect if not registered? 
    // Usually "Open Page" implies detailed view is restricted, but good UX is to show basic info + "Register for full access"
    // For this requirement "add an open page to events when logined", we will make it accessible but show formatted content.

    if (authLoading || eventLoading) {
        return <div className="min-h-[50vh] flex items-center justify-center"><Loader2 className="animate-spin text-forest-green" /></div>
    }

    return (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <Link 
                href="/events" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-forest-green transition-colors mb-4"
            >
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Events
            </Link>

            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-10">
                    <div className="text-white">
                        {registered && (
                            <div className="inline-flex items-center gap-1.5 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 backdrop-blur-sm">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Registered
                            </div>
                        )}
                        <h1 className="text-3xl md:text-5xl font-bold mb-2">{event.title}</h1>
                        <div className="flex flex-wrap gap-4 text-white/90 text-sm md:text-base">
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {event.date}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {event.time}</span>
                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {event.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="md:col-span-2 space-y-6">
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-forest-green mb-4">About the Event</h2>
                        <p className="text-lg leading-relaxed">{event.fullDescription}</p>
                        
                        {registered ? (
                            <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">Participant Information</h3>
                                <p className="text-green-700 dark:text-green-300 text-sm mb-4">
                                    Thank you for registering! Please arrive 15 minutes before the start time at the {event.location}.
                                    Show this screen to the event coordinator upon arrival.
                                </p>
                                <button 
                                    onClick={async() => {
                                        if(confirm("Are you sure you want to cancel your registration?")) {
                                            await unregisterFromEvent(event.id)
                                            router.refresh()
                                        }
                                    }}
                                    className="text-sm text-red-500 hover:text-red-700 underline"
                                >
                                    Cancel Registration
                                </button>
                            </div>
                        ) : (
                             <div className="mt-8 p-6 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 text-center">
                                <h3 className="font-bold mb-2">Join this Event</h3>
                                <p className="text-muted-foreground text-sm mb-6">Register now to secure your spot.</p>
                                {user ? (
                                    <button 
                                        onClick={() => registerForEvent(event.id)}
                                        className="bg-forest-green hover:bg-forest-green/90 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
                                    >
                                        Register - Free
                                    </button>
                                ) : (
                                    <Link href="/login" className="text-forest-green font-bold hover:underline">Sign in to register</Link>
                                )}
                             </div>
                        )}
                    </div>
                </div>
                
                <div className="space-y-6">
                    <div className="bg-card p-6 rounded-xl border shadow-sm sticky top-24">
                        <h3 className="font-bold mb-4">Event Details</h3>
                        <div className="space-y-4 text-sm">
                            <div>
                                <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Date</span>
                                <span className="font-medium">{new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <div>
                                <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Time</span>
                                <span className="font-medium">{event.time}</span>
                            </div>
                            <div>
                                <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Location</span>
                                <span className="font-medium">{event.location}</span>
                            </div>
                            <hr className="border-stone-100 dark:border-stone-800 pt-2" />
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-forest-green mb-1">Free</span>
                                <span className="text-xs text-muted-foreground">For Members</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
