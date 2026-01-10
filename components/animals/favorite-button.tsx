"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface FavoriteButtonProps {
    animalId: string
    className?: string
    iconSize?: number
}

export function FavoriteButton({ animalId, className, iconSize = 24 }: FavoriteButtonProps) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const favorites = JSON.parse(localStorage.getItem("wildlife_favorites") || "[]")
        setIsFavorite(favorites.includes(animalId))
    }, [animalId])

    const toggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault() // Prevent link click if inside a card
        e.stopPropagation()

        const favorites = JSON.parse(localStorage.getItem("wildlife_favorites") || "[]")
        let newFavorites

        if (favorites.includes(animalId)) {
            newFavorites = favorites.filter((id: string) => id !== animalId)
            setIsFavorite(false)
        } else {
            newFavorites = [...favorites, animalId]
            setIsFavorite(true)
        }

        localStorage.setItem("wildlife_favorites", JSON.stringify(newFavorites))
    }

    if (!mounted) return null

    return (
        <button
            onClick={toggleFavorite}
            className={cn(
                "p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-forest-green",
                isFavorite
                    ? "text-red-500 bg-red-50 dark:bg-red-900/20"
                    : "text-muted-foreground bg-black/5 dark:bg-white/10 hover:text-red-500",
                className
            )}
            aria-label={isFavorite ? "Remove from favorites" : "Save to favorites"}
            title={isFavorite ? "Remove from favorites" : "Save to favorites"}
        >
            <Heart
                size={iconSize}
                className={cn("transition-colors", isFavorite && "fill-current")}
            />
        </button>
    )
}
