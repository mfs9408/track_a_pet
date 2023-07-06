import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

const ArticleCard = () => {
  const classes = makeStyles();

  return (
    <TouchableOpacity style={commonStyles.boxShadow}>
      <View style={classes.container}>
        <Image
          source={{ uri: "https://placekitten.com/g/200/300" }}
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
            Cat health
          </Text>
          <Text numberOfLines={4} style={commonStyles.p1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et eum
            ex incidunt ipsa quas quasi qui ratione temporibus voluptatum? Amet
            dolore illo ipsa quas quod rerum totam. Est, voluptatibus.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleCard;
