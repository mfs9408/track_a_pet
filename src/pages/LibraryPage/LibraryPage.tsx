import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { commonStyles } from "../../theme";
import { makeStyles } from "./styles";
import ArticleCard from "../../components/ArticleCard";
import Chip from "../../components/Chip";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const foo = [1, 2, 3, 4, 5, 6];
const filters = [
  { id: 1, value: "Cat health" },
  { id: 2, value: "Dog health" },
];

const LibraryPage = () => {
  const classes = makeStyles();
  const [searchValue, setSearchValue] = useState("");

  return (
    <View
      style={[
        commonStyles.commonContainer,
        { paddingTop: 50, paddingBottom: 70 },
      ]}
    >
      <View style={commonStyles.commonWrapper}>
        <View style={classes.textBlock}>
          <View style={classes.icon}>
            <MaterialIcons
              name="search"
              size={24}
              color="rgba(196, 196, 196, 1)"
            />
          </View>
          <TextInput style={classes.search} placeholder="Search" />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 25 }}>
          {filters.map((item) => (
            <Chip
              value={item.value}
              selected={false}
              setSelected={() => {}}
              icon={
                item.id === 1 ? (
                  <Ionicons
                    name="logo-octocat"
                    size={24}
                    color="#816EC7"
                    style={{
                      marginRight: 5,
                      height: 30,
                      marginTop: 6,
                      transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
                    }}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="dog"
                    size={24}
                    color="#816EC7"
                    style={{
                      marginRight: 5,
                      marginTop: 6,
                      height: 30,
                      transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
                    }}
                  />
                )
              }
            />
          ))}
        </View>
        <FlatList data={foo} renderItem={() => <ArticleCard />} />
      </View>
    </View>
  );
};

export default LibraryPage;
