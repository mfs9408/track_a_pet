import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gender from "../Gender";
import { commonColors, commonStyles } from "../../theme";
import { makeStyles } from "./styles";
import { EPage, EPetGenderType } from "../../enums";
import { IPetsTypes } from "../../types";

const DEFAULT_IMAGE_AVATAR = "https://placekitten.com/g/200/300";

const PetCard = ({ name, breed, id, gender, image }: IPetsTypes) => {
  const classes = makeStyles();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={commonStyles.boxShadow}
      onPress={() => navigation.navigate(EPage.PET, { petId: id })}
    >
      <View style={classes.viewContainer}>
        <Image
          style={classes.image}
          source={{ uri: (image && image[0]) || DEFAULT_IMAGE_AVATAR }}
        />
        <View style={[classes.content, commonColors.background]}>
          <View style={classes.nameWrapper}>
            <Text style={commonStyles.h4}>{name}</Text>
            <Gender gender={gender || EPetGenderType.UNKNOWN} />
          </View>
          <View style={classes.tagsContainer}>
            <Text
              style={[commonColors.semiTransparentGrey, { marginRight: 5 }]}
            >
              Adult
            </Text>
            {breed && (
              <>
                <Text
                  style={[commonColors.semiTransparentGrey, { marginRight: 5 }]}
                >
                  |
                </Text>
                <Text style={commonColors.semiTransparentGrey}>{breed}</Text>
              </>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PetCard;
