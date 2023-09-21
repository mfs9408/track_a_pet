import { StyleSheet } from "react-native";

export const fonts = {
  "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
  "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  "Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
  "Inter-ExtraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
  "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
  "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
  "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
  "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  "Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
};

export const commonColors = StyleSheet.create({
  primary: {
    color: "#6b58b4",
  },
  secondary: {
    color: "#4492d1",
  },
  lightPrimary: {
    color: "rgba(106, 82, 198, 0.20)",
  },
  cancel: {
    color: "#ba00e0",
  },
  lightGrey: {
    color: "#B4AEAE",
  },
  grey: {
    color: "#747474",
  },
  darkGrey: {
    color: "#5F5B5B",
  },
  background: {
    backgroundColor: "#fff",
  },
  semiTransparentGrey: {
    color: "#6C6C6C",
  },
  blackColor: {
    color: "#000",
  },
  whiteColor: {
    color: "#fff",
  },
  error: {
    color: "#d32f2f",
  },
});

export const commonStyles = StyleSheet.create({
  directionRow: {
    flexDirection: "row",
  },
  alignCenter: {
    alignItems: "center",
  },
  interRegular: {
    fontFamily: "Inter-Regular",
  },
  interSemiBold: {
    fontFamily: "Inter-SemiBold",
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: commonColors.primary.color,
    borderRadius: 40,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#fff",
  },
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
    backgroundColor: commonColors.background.backgroundColor,
    height: "100%",
  },
  h1: {
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: 0.24,
    color: "#000",
    fontFamily: "Inter-Bold",
  },
  h2: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.24,
    color: "#000",
    fontFamily: "Inter-Bold",
  },
  h3: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0.24,
    color: "#000",
    fontFamily: "Inter-Bold",
  },
  h4: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.24,
    color: "#000",
    fontFamily: "Inter-Bold",
  },
  p1: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "#000",
    fontFamily: "Inter-SemiBold",
  },
  p2: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  p3: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 20,
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  p4: {
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 20,
    color: "#000",
    fontFamily: "Inter-Regular",
  },
});
