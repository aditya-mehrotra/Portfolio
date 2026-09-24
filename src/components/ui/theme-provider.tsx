"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Generates a native v4 UUID string
    const newUuid = crypto.randomUUID();
    if (typeof window !== "undefined") {
      if (!localStorage?.getItem("userId")) {
        localStorage.setItem("userId", newUuid);
      }
    }
  }, []);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
