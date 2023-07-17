import React from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { makeStyles } from "./styles";
import { useSelector } from "../../store";
import { commonColors, commonStyles } from "../../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import InfoBox from "../../components/InfoBox";
import Gender from "../../components/Gender";
import { Carousel } from "react-native-basic-carousel";
import { IPetsTypes } from "../../types";

const PetPage = () => {
  const pets = useSelector((store) => store.pets);
  const route = useRoute();
  const navigation = useNavigation();
  const classes = makeStyles();

  const currentPet = pets.find((pet) => route.params.petId === pet.id);

  const {
    id,
    name,
    avatar,
    image,
    weight,
    loseDate,
    species,
    breed,
    gender,
    owning,
    lost,
    spayed,
    age,
    description,
    birthDay,
    remindIDs,
    userId,
    loseAddress,
    color,
    data,
  } = currentPet as IPetsTypes;

  return (
    <ScrollView style={classes.scrollView}>
      <Ionicons
        name="chevron-back"
        size={35}
        color={commonColors.primary.color}
        style={classes.backIcon}
        onPress={() => navigation.goBack()}
      />
      <Carousel
        data={image || []}
        renderItem={({ item }) => (
          <Image style={classes.image} source={{ uri: item as string }} />
        )}
        itemWidth={Dimensions.get("screen").width}
        paginationColor={commonColors.primary.color}
        pagination
      />
      <View style={[commonStyles.commonWrapper, classes.commonContainer]}>
        <View style={classes.headerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[commonStyles.h1, classes.header]}>{name}</Text>
            <Gender gender={gender} />
          </View>
          <TouchableOpacity>
            <Text style={[commonStyles.p1, commonColors.primary]}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={classes.infoContainer}>
          <InfoBox title={breed} description={"Breed"} />
          <InfoBox title={color} description={"Color"} />
          <InfoBox title={weight} description={"Weight"} />
          <InfoBox title={age} description={"Age"} />
        </View>
        <View style={classes.dataWrapper}>
          {data?.map((item, key) => (
            <View key={key} style={classes.dataContainer}>
              <View style={classes.iconContainer}>
                <MaterialIcons
                  name={item?.icon}
                  size={20}
                  color="black"
                  style={classes.icon}
                />
                <Text style={commonStyles.p1}>{item.title}</Text>
              </View>
              {item.value.map(({ key, value, additionalRecords }) => (
                <View style={classes.subDataContainer}>
                  <View style={classes.subHeaderContainer}>
                    <Text
                      style={[
                        commonStyles.p2,
                        {
                          color: additionalRecords
                            ? commonColors.blackColor.color
                            : commonColors.darkGrey.color,
                        },
                      ]}
                    >
                      &#8728; {key}: {value}
                    </Text>
                  </View>
                  {additionalRecords?.map(({ key, value }, arrayKey) => (
                    <View
                      key={arrayKey}
                      style={classes.additionalRecordsContainer}
                    >
                      <Text style={[commonStyles.p2, { color: "#5F5B5B" }]}>
                        &#8728; {key}: {value}
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PetPage;
