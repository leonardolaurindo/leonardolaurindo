'use client';

import { ThemeProvider as NexThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NexThemeProvider {...props}>{children}</NexThemeProvider>
    )
}