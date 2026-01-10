const TIPS = [
    {
        title: "Create a Hedgehog Highway",
        description: "Cut a small CD-sized hole in your garden fence to allow hedgehogs to roam freely between gardens in search of food and mates.",
        category: "Hedgehog"
    },
    {
        title: "Leave a Wild Corner",
        description: "Let a patch of grass grow long to provide shelter for insects, amphibians, and small mammals.",
        category: "General"
    },
    {
        title: "Keep it Wild",
        description: "Never approach or feed wild foxes. They need to stay wild to survive and avoid conflict with humans.",
        category: "Red Fox"
    },
    {
        title: "Check Before Mowing",
        description: "Always check long grass carefully for hedgehogs and other wildlife before mowing or lighting bonfires.",
        category: "Hedgehog"
    },
    {
        title: "Watch the Road",
        description: "Drive carefully in rural areas, especially at night. Badgers and other nocturnal animals are vulnerable to road traffic.",
        category: "Badger"
    },
    {
        title: "Rat Poison Danger",
        description: "Avoid using rodenticides. Barn owls and other predators can be fatally poisoned by eating affected rodents.",
        category: "Barn Owl"
    },
    {
        title: "Plant Native",
        description: "Plant native trees and hazel that provide natural food sources for Red Squirrels.",
        category: "Red Squirrel"
    },
    {
        title: "Migration Help",
        description: "During spring evenings, help toads cross roads safely to reach their breeding ponds (with adult supervision!).",
        category: "Common Toad"
    }
]

export default function TipsPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold text-forest-green">Conservation Tips</h1>
                <p className="text-muted-foreground mt-2">Simple ways you can help British wildlife at home.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {TIPS.map((tip, index) => (
                    <div key={index} className="bg-card p-6 rounded-xl border shadow-sm card-transition hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-earth-brown">{tip.title}</h3>
                            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-forest-green/10 text-forest-green">
                                {tip.category}
                            </span>
                        </div>
                        <p className="text-muted-foreground">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
