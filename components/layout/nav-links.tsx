"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PawPrint, Calendar, Lightbulb, Ticket } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "Animals", href: "/animals", icon: PawPrint },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Tips", href: "/tips", icon: Lightbulb },
    { name: "Subscriber", href: "/subscriber", icon: Ticket },
]

export function NavLinks() {
    const pathname = usePathname()

    return (
        <div className="flex md:flex-col justify-around md:justify-start w-full gap-1 md:gap-2">
            {links.map((link) => {
                const LinkIcon = link.icon
                const isActive = pathname === link.href

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                            "flex flex-col md:flex-row items-center md:px-4 md:py-3 p-2 rounded-lg transition-colors duration-200",
                            "hover:bg-accent hover:text-accent-foreground",
                            isActive
                                ? "text-forest-green font-bold bg-green-50 dark:bg-green-900/20"
                                : "text-muted-foreground"
                        )}
                    >
                        <LinkIcon className="w-6 h-6 md:w-5 md:h-5 md:mr-3" />
                        <span className="text-xs md:text-sm md:font-medium">{link.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}
