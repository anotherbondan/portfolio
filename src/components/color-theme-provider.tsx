"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ColorTheme = "amethyst" | "sapphire" | "emerald" | "topaz" | "ruby";

interface ColorThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(
  undefined,
);

export function ColorThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>("amethyst");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("color-theme") as ColorTheme;
    if (savedTheme) {
      setColorThemeState(savedTheme);
      document.documentElement.setAttribute("data-theme-color", savedTheme);
    }
  }, []);

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
    localStorage.setItem("color-theme", theme);
    document.documentElement.setAttribute("data-theme-color", theme);
  };

  // Prevent hydration mismatch by rendering a generic wrapper until mounted
  // Actually, we don't strictly need to block children rendering for just a context
  // but it's safer for UI components reading the context
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
}
