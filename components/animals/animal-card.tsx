"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FavoriteButton } from "@/components/animals/favorite-button"
import { Animal } from "@/data/animals"

interface AnimalCardProps {
    animal: Animal
}

export function AnimalCard({ animal }: AnimalCardProps) {
    return (
        <Link href={`/animals/${animal.id}`} className="group block">
            <div className="bg-card rounded-xl overflow-hidden border shadow-sm card-transition h-full flex flex-col relative">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={animal.imageUrl}
                        alt={`Photo of a ${animal.name}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                    <div className="absolute top-2 right-2 z-10">
                        <FavoriteButton animalId={animal.id} />
                    </div>

                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{animal.name}</h3>
                        <p className="text-sm italic opacity-90">{animal.scientificName}</p>
                    </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <p className="text-muted-foreground line-clamp-3 mb-4 text-sm flex-grow">
                        {animal.shortDescription}
                    </p>
                    <div className="flex items-center text-forest-green font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
