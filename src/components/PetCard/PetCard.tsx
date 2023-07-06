import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { makeStyles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IPetsTypes } from "../../types";
import Gender from "../Gender";
import { commonStyles } from "../../theme";

const PetCard = ({ name, breed, avatar, id, gender }) => {
  const theme = useTheme();
  const classes = makeStyles(theme.colors);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={commonStyles.boxShadow}
      onPress={() => navigation.navigate("Pet page", { petId: id, name })}
    >
      <View style={classes.viewContainer}>
        <Image style={classes.image} source={{ uri: avatar }} />
        <View style={classes.content}>
          <View style={classes.nameWrapper}>
            <Text variant="bodyLarge" style={{ fontWeight: "600" }}>
              {name}
            </Text>
            <Gender gender={gender} />
          </View>
          <View style={classes.tagsContainer}>
            <Text
              variant="bodyMedium"
              style={{ color: "#6C6C6C", marginRight: 5 }}
            >
              Adult
            </Text>
            <Text
              variant="bodyMedium"
              style={{ color: "#6C6C6C", marginRight: 5 }}
            >
              |
            </Text>
            <Text variant="bodyMedium" style={{ color: "#6C6C6C" }}>
              {breed}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PetCard;
