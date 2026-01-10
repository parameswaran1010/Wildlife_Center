import Image from "next/image"

export default function HomePage() {
    return (
        <div className="space-y-8">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-forest-green">
                    Welcome to Jacob's Wildlife Centre
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Dedicated to the rescue, rehabilitation, and release of British wildlife.
                    Join us in preserving our natural heritage for future generations.
                </p>
            </header>

            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg card-transition group">
                    <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-transparent transition-colors z-10" />
                    <Image
                        src="/assets/images/Red_deer.jpg"
                        alt="Red Deer in Morning Mist"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div className="space-y-6">
                    <div className="bg-card p-6 rounded-lg border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2 text-earth-brown">Our Mission</h2>
                        <p className="text-muted-foreground">
                            Located in the heart of the British countryside, we provide expert care for
                            sick, injured, and orphaned native animals. From prickly hedgehogs to majestic
                            barn owls, every creature plays a vital role in our ecosystem.
                        </p>
                    </div>

                    <div className="bg-card p-6 rounded-lg border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2 text-earth-brown">Visit Us</h2>
                        <p className="text-muted-foreground">
                            Experience nature firsthand. Our educational trails and observation hides
                            offer a glimpse into the secret lives of badgers, foxes, and red squirrels.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
