import React, { useCallback } from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface IArticleProps {
  articleLink: string;
  image: string;
  header: string;
  keyWord: string;
  shortDescription: string;
}

const ArticleCard = ({
  shortDescription,
  header,
  image,
  articleLink,
}: IArticleProps) => {
  const classes = makeStyles();

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(articleLink);

    if (supported) {
      await Linking.openURL(articleLink);
    } else {
      return null;
    }
  }, [articleLink]);

  return (
    <TouchableOpacity style={commonStyles.boxShadow} onPress={handlePress}>
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
