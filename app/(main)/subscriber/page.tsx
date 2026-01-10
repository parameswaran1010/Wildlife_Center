"use client"

import { ProtectedRoute } from "@/components/auth/protected-route"
import { Voucher } from "@/components/subscriber/voucher"
import { useAuth } from "@/context/auth-context"
import { useEvent } from "@/context/event-context"
import { EVENTS } from "@/data/events"
import { Calendar, Clock, MapPin, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"

export default function SubscriberPage() {
    const { user, signOut } = useAuth()
    const { registeredEventIds, loading } = useEvent()

    const myEvents = EVENTS.filter(e => registeredEventIds.includes(e.id))

    return (
        <ProtectedRoute>
            <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-forest-green">Subscriber Area</h1>
                        <p className="text-muted-foreground">Welcome back, {user?.displayName?.split(' ')[0] || 'Member'}!</p>
                    </div>
                    <button
                        onClick={() => signOut()}
                        className="text-sm text-red-500 hover:text-red-700 font-medium underline print:hidden self-start md:self-auto"
                    >
                        Sign Out
                    </button>
                </header>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-8">
                        <Voucher />

                        <div className="print:hidden">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-forest-green" />
                                My Registered Events
                            </h2>

                            {loading ? (
                                <div className="p-8 text-center border rounded-lg bg-card">
                                    <Loader2 className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
                                </div>
                            ) : myEvents.length > 0 ? (
                                <div className="space-y-4">
                                    {myEvents.map(event => (
                                        <div key={event.id} className="bg-card p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex gap-4">
                                                <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 bg-forest-green/10 rounded-md text-forest-green font-bold shrink-0">
                                                    <span className="text-xl">{new Date(event.date).getDate()}</span>
                                                    <span className="text-[10px] uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-bold truncate">{event.title}</h3>
                                                    <div className="text-sm text-muted-foreground flex items-center gap-3 mt-1">
                                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                                                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-3 border-t flex justify-end">
                                                <Link
                                                    href={`/events/${event.id}`}
                                                    className="text-sm font-medium text-forest-green hover:underline flex items-center"
                                                >
                                                    View Details <ArrowRight className="w-3 h-3 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-6 border border-dashed rounded-lg text-center bg-stone-50 dark:bg-stone-900/50">
                                    <p className="text-muted-foreground text-sm mb-3">You haven't registered for any events yet.</p>
                                    <Link href="/events" className="text-sm font-bold text-forest-green hover:underline">
                                        Browse Upcoming Events
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6 print:hidden">
                        <div className="bg-card p-6 rounded-lg border shadow-sm">
                            <h2 className="text-xl font-bold mb-4">Latest Member News</h2>
                            <ul className="space-y-4">
                                <li className="pb-4 border-b last:border-0">
                                    <span className="text-xs font-bold text-forest-green block mb-1">JUNE 15</span>
                                    <p className="font-medium">Red Squirrel kittens born!</p>
                                    <p className="text-sm text-muted-foreground">We are delighted to announce the arrival of three thriving kits.</p>
                                </li>
                                <li className="pb-4 border-b last:border-0">
                                    <span className="text-xs font-bold text-forest-green block mb-1">MAY 28</span>
                                    <p className="font-medium">New Nocturnal House opens</p>
                                    <p className="text-sm text-muted-foreground">Experience the secret world of our night-time residents.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Member Priority</h3>
                            <p className="text-sm text-blue-900 dark:text-blue-100">
                                Pre-booking for our Summer Wildlife Camps opens this Friday. As a subscriber, you get 48h early access!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    )
}
