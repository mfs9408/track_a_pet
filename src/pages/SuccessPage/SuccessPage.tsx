import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { commonStyles } from "../../theme";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { EPage } from "../../enums";

const SuccessPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[commonStyles.commonContainer]}>
      <View
        style={[
          commonStyles.commonWrapper,
          { flexDirection: "column", justifyContent: "flex-end" },
        ]}
      >
        <View>
          <Text style={[commonStyles.h1, { marginBottom: 20 }]}>Success!</Text>
          <Text style={[commonStyles.p1, { marginBottom: 20 }]}>
            A new reminder was created. You will be notified when time comes
          </Text>
        </View>
        <View>
          <Button
            title="Back to reminders"
            onPress={() => navigation.navigate(EPage.CURRENT_REMINDERS)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessPage;
