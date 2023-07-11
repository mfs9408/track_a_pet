import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gender from "../Gender";
import { commonColors, commonStyles } from "../../theme";
import { makeStyles } from "./styles";

const PetCard = ({ name, breed, avatar, id, gender }) => {
  const classes = makeStyles();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={commonStyles.boxShadow}
      onPress={() => navigation.navigate("Pet page", { petId: id, name })}
    >
      <View style={classes.viewContainer}>
        <Image style={classes.image} source={{ uri: avatar }} />
        <View style={[classes.content, commonColors.background]}>
          <View style={classes.nameWrapper}>
            <Text style={commonStyles.h4}>{name}</Text>
            <Gender gender={gender} />
          </View>
          <View style={classes.tagsContainer}>
            <Text
              style={[commonColors.semiTransparentGrey, { marginRight: 5 }]}
            >
              Adult
            </Text>
            <Text
              style={[commonColors.semiTransparentGrey, { marginRight: 5 }]}
            >
              |
            </Text>
            <Text style={commonColors.semiTransparentGrey}>{breed}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PetCard;
