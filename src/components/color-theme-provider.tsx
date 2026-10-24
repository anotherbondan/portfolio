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

  useEffect(() => {
    let savedTheme: string | null = null;
    try {
      savedTheme = localStorage.getItem("color-theme");
    } catch {}
    if (
      savedTheme &&
      ["amethyst", "sapphire", "emerald", "topaz", "ruby"].includes(savedTheme)
    ) {
      setColorThemeState(savedTheme as ColorTheme);
      document.documentElement.setAttribute("data-theme-color", savedTheme);
    }
  }, []);

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
    try {
      localStorage.setItem("color-theme", theme);
    } catch {}
    document.documentElement.setAttribute("data-theme-color", theme);
  };

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
