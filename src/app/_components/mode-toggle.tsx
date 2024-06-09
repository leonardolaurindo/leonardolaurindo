
'use client';

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            className="rounded-full w-8 h-8 bg-background fixed md:top-12 top-8 md:right-12 right-4 z-50 px-0 "
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
            <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
            <span className="sr-only">Switch Theme</span>
        </Button>
    )
}