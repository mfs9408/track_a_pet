import React, { useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { commonColors, commonStyles } from "../../theme";
import { makeStyles } from "./styles";
import ArticleCard from "../../components/ArticleCard";
import { ARTICLES, FILTERS } from "../../constList";
import Chip from "../../components/Chip";

const LibraryPage = () => {
  const classes = makeStyles();
  const [state, setState] = useState("all");
  const renderArticles = ARTICLES.filter((article) => {
    if (state === "all") {
      return article;
    }

    return article.keyWord === state;
  });

  return (
    <View
      style={[
        commonStyles.commonContainer,
        { paddingTop: 50, paddingBottom: 90 },
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
          {FILTERS.map((item) => (
            <View key={item.id}>
              <Chip
                id={item.id}
                label={item.value}
                value={state}
                onChange={setState}
                icon={
                  item.icon && (
                    <FontAwesome5
                      name={item.icon}
                      size={20}
                      color={commonColors.primary.color}
                      style={{ marginRight: 10 }}
                    />
                  )
                }
              />
            </View>
          ))}
        </View>
        <FlatList
          style={{ minHeight: "85%" }}
          data={renderArticles}
          renderItem={(item) => <ArticleCard {...item.item} />}
        />
      </View>
    </View>
  );
};

export default LibraryPage;
