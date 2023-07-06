import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { makeStyles } from "./styles";
import { getIcon } from "../helpers";
import { commonStyles } from "../../theme";

const ActivityCard = ({ description, name, time, icon }: any) => {
  const theme = useTheme();
  const classes = makeStyles(theme.colors);

  return (
    <View
      style={[
        commonStyles.boxShadow,
        {
          backgroundColor: "#F0EFF4",
          borderRadius: 10,
          paddingHorizontal: 30,
          paddingVertical: 10,
          marginBottom: 20,
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 8,
              alignItems: 'center'
          }}
        >
          {icon && (
            <View style={{ marginRight: 10 }}>
              <MaterialIcons name={getIcon(icon)} size={24} color="#6b58b4" />
            </View>
          )}
          <Text variant="bodyMedium" style={{ fontWeight: "600" }}>
            {name}
          </Text>
        </View>
        <Text style={{ color: "#B4AEAE" }}>{time}</Text>
      </View>
      <View>
        <Text style={{ color: "#5F5B5B" }} numberOfLines={5}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default ActivityCard;
