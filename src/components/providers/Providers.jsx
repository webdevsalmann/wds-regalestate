"use client"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "../ui/tooltip"


export default function Providers({ children }) {
    return (
        <TooltipProvider>
            {children}
            <Toaster />
        </TooltipProvider>
    )
}
