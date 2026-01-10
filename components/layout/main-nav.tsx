"use client"

import { NavLinks } from "./nav-links"
import { ThemeToggle } from "../theme-toggle"

export function MainNav() {
    return (
        <>
            {/* Mobile/Portrait Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background p-2 z-50 print:hidden">
                <NavLinks />
            </nav>

            {/* Tablet/Landscape Sidebar */}
            <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 border-r bg-background p-6 z-50 print:hidden">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 rounded-full bg-forest-green flex items-center justify-center">
                        <span className="text-white font-bold">W</span>
                    </div>
                    <h1 className="text-xl font-bold text-forest-green">Wildlife Centre</h1>
                </div>

                <div className="flex-1">
                    <NavLinks />
                </div>

                <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Theme</span>
                        <ThemeToggle />
                    </div>
                </div>
            </aside>

            {/* Mobile Top Bar (for logo and theme toggle) */}
            <header className="md:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background px-4 flex items-center justify-between z-50 print:hidden">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-forest-green flex items-center justify-center">
                        <span className="text-white font-bold">W</span>
                    </div>
                    <span className="font-bold text-forest-green">Wildlife Centre</span>
                </div>
                <ThemeToggle />
            </header>
        </>
    )
}
