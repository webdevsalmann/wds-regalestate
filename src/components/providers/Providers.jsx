"use client"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "../ui/tooltip"
import { DataProvider } from "./DataProvider"
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
const queryClient = new QueryClient()

export default function Providers({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <DataProvider>
                <TooltipProvider>
                    {children}
                    <Toaster />
                    <ReactQueryDevtools />
                </TooltipProvider>
            </DataProvider>
        </QueryClientProvider>
    )
}
