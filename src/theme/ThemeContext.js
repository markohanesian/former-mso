import React, { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children, customTheme }) => {
  const defaultTheme = {
    colors: {
      primary: "#333", // main app theme dark color
      primaryLight: "rgba(0, 0, 0, 0.1)",
      secondary: "#fff", // main app theme light color
      tertiary: "#FF5733", // app secondary color
      error: "#D32F2F", // for elements that the user should be made aware of
      warning: "#ED6C02", // for potentially dangerous actions or important messages
      info: "#0288D1", // for highlighting neutral information
      success: "#2E7D32", // for indicating the successful completion of an action that the user triggered
      // component related colors
      buttonPrimary: "#333", // dark main color
      buttonSecondary: "#fff", //light main color
      link: "#0969da",
      // text colors
      textPrimary: "#fff",
      textSecondary: "#333",
    },
  };

  const theme = { ...defaultTheme, ...customTheme };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
