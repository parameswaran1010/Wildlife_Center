import { AnimalCard } from "@/components/animals/animal-card"
import { animalData } from "@/data/animals"

export default function AnimalsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-forest-green mb-2">Our Animals</h1>
                <p className="text-muted-foreground">
                    Meet the residents of Jacob's Wildlife Centre. Click on any animal to learn more about their care and rehabilitation.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {animalData.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </div>
    )
}
