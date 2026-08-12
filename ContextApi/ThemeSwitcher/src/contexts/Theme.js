import { createContext, useContext } from "react";

// Create a Context for theme management with default values.
// The default object provides a themeMode string and two placeholder
// methods (darkTheme and lightTheme) so consumers can safely call them
// even if a provider is not present during testing or initial render.
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

// Export the Provider component for wrapping parts of the app that
// need access to theme state and update functions.
export const ThemeProvider = ThemeContext.Provider

// Custom hook to consume the ThemeContext more ergonomically.
// Usage: const { themeMode, darkTheme, lightTheme } = useTheme()
export default function useTheme(){
   return useContext(ThemeContext)
}