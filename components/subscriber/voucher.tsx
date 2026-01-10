"use client"

import Image from "next/image"
import { useAuth } from "@/context/auth-context"
import { Printer, Ticket } from "lucide-react"

export function Voucher() {
    const { user } = useAuth()

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* 
        Print styles:
        Everything else is hidden via main-nav 'print:hidden'.
        The layout wrapper also needs care, but generally we rely on the component itself being visible.
        However, global styles might need a '@media print { body * { visibility: hidden; } .voucher-content * { visibility: visible; } }' approach 
        OR we rely on Tailwind's 'print:hidden' on the layout elements.
        
        Since I added 'print:hidden' to MainNav, the sidebar/bottom bar will vanish.
        The main content area will remain.
      */}

            <div className="bg-white text-black p-8 rounded-xl border-4 border-forest-green border-dashed relative overflow-hidden shadow-2xl print:shadow-none print:border-black">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <Ticket className="w-96 h-96" />
                </div>

                <div className="relative z-10 text-center space-y-6">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-forest-green flex items-center justify-center print:bg-black">
                            <span className="text-white font-bold text-xl">W</span>
                        </div>
                        <h1 className="text-3xl font-bold text-forest-green tracking-wider print:text-black">JACOB'S WILDLIFE CENTRE</h1>
                    </div>

                    <div className="border-t-2 border-b-2 border-forest-green/20 py-8 print:border-black">
                        <h2 className="text-4xl font-black mb-2 upppercase">20% OFF ADMISSION</h2>
                        <p className="text-xl italic">For One Adult or Family Ticket</p>
                    </div>

                    <div className="bg-stone-100 p-4 rounded-lg print:bg-transparent print:border print:border-black">
                        <p className="font-bold text-sm uppercase text-muted-foreground print:text-black">Issued To Member:</p>
                        <p className="text-xl font-mono mt-1">{user?.displayName || user?.email || "Valued Member"}</p>
                    </div>

                    <div className="flex justify-between items-end text-sm text-muted-foreground print:text-black pt-4">
                        <div className="text-left">
                            <p>Valid until: Dec 31, 2026</p>
                            <p>Code: JWC-SUB-2026</p>
                        </div>
                        <div className="text-right">
                            <p>Terms & Conditions Apply</p>
                            <p>Not valid on bank holidays</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center print:hidden">
                <button
                    onClick={handlePrint}
                    className="bg-forest-green text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-forest-green/90 hover:scale-105 transition-all flex items-center justify-center gap-2 mx-auto"
                >
                    <Printer className="w-5 h-5" /> Print Voucher
                </button>
                <p className="mt-4 text-sm text-muted-foreground">
                    Tip: This voucher will be formatted automatically for your printer.
                </p>
            </div>
        </div>
    )
}
