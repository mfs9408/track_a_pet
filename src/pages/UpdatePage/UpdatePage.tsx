import React, { useCallback } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
// @ts-ignore
import image from "../../../assets/splash.png";
import Button from "../../components/Button";
import { commonColors, commonStyles } from "../../theme";

const UpdatePage = (link: string) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(link);

    if (supported) {
      await Linking.openURL(link);
    } else {
      return null;
    }
  }, [link]);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <TouchableOpacity>
          <Button
            title="Update app"
            styles={commonColors.background}
            textStyles={[commonStyles.h4, commonColors.primary]}
            onPress={handlePress}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});

export default UpdatePage;
