import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Heart, Shield, Lightbulb } from "lucide-react"
import { FavoriteButton } from "@/components/animals/favorite-button"
import { animalData } from "@/data/animals"

// Properly type the params for Next.js 15+
// Since params is a Promise in newer Next.js versions effectively, but for static generation it's passed as props.
// However, the standard signature for App Router pages is slightly shifting.
// We'll stick to the standard: { params: { id: string } }
interface AnimalDetailPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function AnimalDetailPage({ params }: AnimalDetailPageProps) {
    const { id } = await params
    const animal = animalData.find((a) => a.id === id)

    if (!animal) {
        notFound()
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <Link
                    href="/animals"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-forest-green transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Animals
                </Link>
                <FavoriteButton animalId={animal.id} className="bg-card border shadow-sm" />
            </div>

            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                    src={animal.imageUrl}
                    alt={animal.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">{animal.name}</h1>
                    <p className="text-lg md:text-xl italic opacity-90">{animal.scientificName}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <section className="bg-card p-8 rounded-xl border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-forest-green flex items-center gap-2">
                            <Shield className="w-6 h-6" /> About the Species
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {animal.fullDescription}
                        </p>

                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                            <div className="bg-stone-50 dark:bg-stone-900 p-4 rounded-lg">
                                <h4 className="font-semibold text-earth-brown mb-1">Habitat</h4>
                                <p className="text-sm">{animal.habitat}</p>
                            </div>
                            <div className="bg-stone-50 dark:bg-stone-900 p-4 rounded-lg">
                                <h4 className="font-semibold text-earth-brown mb-1">Diet</h4>
                                <p className="text-sm">{animal.diet}</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl border border-green-100 dark:border-green-800">
                        <h2 className="text-2xl font-bold mb-4 text-forest-green flex items-center gap-2">
                            <Lightbulb className="w-6 h-6" /> Tips for Children
                        </h2>
                        <ul className="space-y-3">
                            {animal.tipsForChildren.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-lg text-foreground/80">
                                    <span className="text-forest-green font-bold">•</span>
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="space-y-6">
                    <div className="bg-card p-6 rounded-xl border shadow-sm">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Conservation Status</h3>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
                            <p className="font-medium">{animal.conservationStatus}</p>
                        </div>

                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 mt-6">Centre Status</h3>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-forest-green mt-2" />
                            <p className="font-medium italic">{animal.rehabilitationStatus}</p>
                        </div>
                    </div>

                    <div className="bg-amber-100 dark:bg-amber-900/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                        <h3 className="text-lg font-bold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2">
                            <Heart className="w-5 h-5" /> Fun Facts
                        </h3>
                        <ul className="space-y-4">
                            {animal.funFacts.map((fact, idx) => (
                                <li key={idx} className="text-amber-900 dark:text-amber-100 italic relative pl-4">
                                    <span className="absolute left-0 top-0 text-amber-500 font-serif text-xl">"</span>
                                    {fact}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
