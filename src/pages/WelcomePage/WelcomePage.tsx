import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import MainPicture from "../../../assets/images/petOwners.svg";
import { commonColors, commonStyles } from "../../theme";
import Button from "../../components/Button";
import { makeStyles } from "./styles";
import { EPage } from "../../enums";

const WelcomePage = () => {
  const classes = makeStyles();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[classes.scrollView, commonColors.background]}>
      <View style={classes.mainContainer}>
        <MainPicture style={classes.image} />
        <Text style={[commonStyles.h1, classes.header]}>Welcome to</Text>
        <Text style={[commonStyles.h1, classes.header, classes.secondHeader]}>
          Track A Pet
        </Text>
        <Text style={[commonStyles.p2, commonColors.grey]}>
          Take care of your pet
        </Text>
        <Text
          style={[commonStyles.p2, commonColors.grey, classes.additionalHeader]}
        >
          easier than ever
        </Text>
        <Button
          title="Get started"
          styles={classes.button}
          textStyles={[commonStyles.p1, commonColors.whiteColor]}
          onPress={() => navigation.navigate(EPage.SIGN_IN)}
        />
        <View style={classes.accountTextWrapper}>
          <Text style={classes.accountText}>Dont have an account?</Text>
          <Pressable onPress={() => navigation.navigate(EPage.SIGN_UP)}>
            <Text style={[commonColors.primary]}>Sign up!</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
