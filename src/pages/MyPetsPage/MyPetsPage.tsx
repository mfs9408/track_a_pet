import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, useTheme, Avatar, Button, Props } from "react-native-paper";
import { useSelector } from "../../store";
import { makeStyles } from "./styles";
import PetCard from "../../components/PetCard";
import { commonStyles } from "../../theme";
import User from "../../components/User";
import { AntDesign } from "@expo/vector-icons";

const MyPetsPage = ({ navigation }) => {
  const { pets, reminders, user } = useSelector((store) => store);
  const { name, avatar, owning } = user.user;
  const theme = useTheme();
  const classes = makeStyles(theme.colors);

  return (
    <SafeAreaView style={commonStyles.commonContainer}>
      <ScrollView style={commonStyles.commonWrapper}>
        <User avatarUrl={avatar} name={name} owning={owning} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            variant="headlineSmall"
            style={[classes.text, { fontWeight: "600" }]}
          >
            Your pets
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Add pet")}>
            <AntDesign name="plus" size={24} color="#6b58b4" />
          </TouchableOpacity>
        </View>
        <View style={classes.cardContainer}>
          {pets.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPetsPage;
