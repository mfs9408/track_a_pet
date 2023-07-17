import React from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import PetCard from "../../components/PetCard";
import User from "../../components/User";
import { useSelector } from "../../store";
import { commonStyles } from "../../theme";
import { makeStyles } from "./styles";

const MyPetsPage = () => {
  const navigation = useNavigation();

  const pets = useSelector((store) => store.pets);
  const user = useSelector((store) => store.user);
  const { name, avatar, owning, gender } = user.user;

  const classes = makeStyles();

  return (
    <SafeAreaView style={commonStyles.commonContainer}>
      <ScrollView style={commonStyles.commonWrapper}>
        <User avatar={avatar} name={name} owning={owning} gender={gender} />
        <View style={classes.cardHeader}>
          <Text style={[classes.text, commonStyles.h3]}>Your pets</Text>
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
