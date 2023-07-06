import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Avatar, Text, useTheme } from "react-native-paper";
import { useSelector } from "../../store";
import { makeStyles } from "./styles";
import ActivityCard from "../../components/ActivityCard";
import { FindIcon } from "../../icons";
import User from "../../components/User";

const MainPage = () => {
  const { user, reminders, articles } = useSelector((store) => store);
  const { name, avatar, owning } = user.user;
  const theme = useTheme();
  const classes = makeStyles(theme.colors);

  return (
    <SafeAreaView style={classes.container}>
      <ScrollView style={{ paddingHorizontal: 28, paddingTop: 20 }}>
        <User avatarUrl={avatar} name={name} owning={owning} />
        <View>
          <Text
            variant="headlineSmall"
            style={{ fontWeight: "600", marginBottom: 15 }}
          >
            Your today's activity
          </Text>
          <View>
            <ActivityCard
              name="Tefa"
              description="Shower your cat with love, attention, and affection. Cats thrive on companionship and appreciate a warm and caring environment."
              time="2:00pm"
              icon="pets"
            />
            <ActivityCard
              name="Tefa"
              description="Observe your cat's behavior for any changes or signs of illness."
              time="3:00pm"
              icon="medical"
            />
          </View>
        </View>
        <View>
          <Text
            variant="headlineSmall"
            style={{ fontWeight: "600", marginBottom: 15, marginTop: 10 }}
          >
            Your today's appoitments
          </Text>
          <View>
            <ActivityCard
              name="Chloe"
              time="11:00am"
              description={
                <>
                  You have appoitment with Chloe to Dr. Etkin at 5:00 pm.
                  {"\n"}
                  {"\n"}
                  Address: 2806 Avenue U, Brooklyn, NY 11229, United States
                </>
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;
