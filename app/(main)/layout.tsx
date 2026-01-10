import { MainNav } from "@/components/layout/main-nav"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-background">
            <MainNav />
            {/* 
        Adjust margins for navigation:
        - Mobile: mt-16 (top bar) mb-16 (bottom bar)
        - Desktop: ml-64 (sidebar)
      */}
            <main className="pt-20 pb-20 px-4 md:pt-8 md:pb-8 md:px-8 md:ml-64 transition-all duration-300">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
