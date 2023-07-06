import { configureFonts, MD3LightTheme } from "react-native-paper";
import { MD3Theme } from "react-native-paper/src/types";
import { StyleSheet } from "react-native";

export const theme: MD3Theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config }),
  colors: {
    ...MD3LightTheme.colors,
    primary: "#533bb3",
    secondary: "#6b58b4",
    tertiary: "#4392d1",
    onTertiary: "#ba00f4",
    surface: "#b2a6d9",
    surfaceVariant: "#c8bfe5",
    background: "#fff",
    onBackground: "#eeebf0",
    outline: "#F0EFF4",
  },
};

export const commonStyles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  commonWrapper: {
    paddingHorizontal: 28,
    paddingTop: 20,
  },
  commonContainer: {
    backgroundColor: theme.colors.background,
    height: "100%",
  },
  h1: {
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: 0.24,
    color: "#000",
  },
  h2: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.24,
    color: "#000",
  },
  h3: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0.24,
    color: "#000",
  },
  h4: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.24,
    color: "#000",
  },
  p1: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "#000",
  },
  p2: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#000",
  },
  p3: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 20,
    color: "#000",
  },
  p4: {
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 20,
    color: "#000",
  },
});

const config = {
  headlineLarge: {
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: "1%",
    lineHeight: 24,
  },
  headlineMedium: {
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 20,
  },
  headlineSmall: {
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 20,
  },
};
