import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Text, View, ViewStyle } from "react-native";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface IValueProps {
  id: string | null;
  value: string;
}

interface ISelectProps {
  placeholder?: IValueProps;
  label?: string;
  error?: boolean;
  styles?: ViewStyle | ViewStyle[];
}

const AutocompleteSelect = ({ error, styles, label }: ISelectProps) => {
  const classes = makeStyles(error);

  const fpp = "AIzaSyA0c71Y4QnFv9LsOhA6xtnjsVvwtmxVqs8";

  return (
    <>
      {label && <Text style={[commonStyles.p1, classes.label]}>{label}</Text>}
      <View style={[classes.container, styles]}>
        <GooglePlacesAutocomplete
          fetchDetails={true}
          placeholder="Search"
          query={{
            key: fpp,
            language: "en",
          }}
          onPress={(data) => console.log(data)}
          onFail={(error) => console.error(error)}
        />
      </View>
    </>
  );
};

export default AutocompleteSelect;
