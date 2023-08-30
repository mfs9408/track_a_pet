import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface IArticleProps {
  articleLink: string;
  image: string;
  header: string;
  keyWord: string;
  shortDescription: string;
}

const ArticleCard = ({ shortDescription, header, image }: IArticleProps) => {
  const classes = makeStyles();

  return (
    <TouchableOpacity style={commonStyles.boxShadow}>
      <View style={classes.container}>
        <Image
          source={{ uri: image }}
          style={{
            height: "100%",
            width: "30%",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        />
        <View style={classes.textContainer}>
          <Text
            style={[commonStyles.p2, { marginBottom: 5, color: "#5F5B5B" }]}
          >
            {header}
          </Text>
          <Text numberOfLines={4} style={commonStyles.p1}>
            {shortDescription}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleCard;
