import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Text, View, ViewStyle } from "react-native";
import { makeStyles } from "./styles";
import { commonColors, commonStyles } from "../../theme";

interface IValueProps {
  id: string | null;
  value: string;
}

interface ISelectProps {
  onChange: (value: string) => void;
  placeholder?: IValueProps;
  label?: string;
  error?: boolean;
  styles?: ViewStyle | ViewStyle[];
}

const AutocompleteSelect = ({
  onChange,
  error,
  styles,
  label,
}: ISelectProps) => {
  const classes = makeStyles(error);

  const fpp = "AIzaSyA0c71Y4QnFv9LsOhA6xtnjsVvwtmxVqs8";

  return (
    <>
      {label && <Text style={[commonStyles.p1, classes.label]}>{label}</Text>}
      <View style={[styles, { height: "100%" }]}>
        <GooglePlacesAutocomplete
          keyboardShouldPersistTaps={"handled"}
          styles={{
            container: {
              zIndex: 10,
              overflow: "visible",
              height: 50,
              flexShrink: 0,
              borderColor: error
                ? commonColors.error.color
                : commonColors.lightPrimary.color,
            },
            description: {},
            textInputContainer: {},
            loader: {
              backgroundColor: "blue",
            },
            listView: {
              height: "auto",
            },
            textInput: classes.container,
            poweredContainer: {
              display: "none",
            },
            separator: {},
            row: {},
          }}
          placeholder="Search"
          query={{
            key: fpp,
            language: "en",
            type: "address",
          }}
          onPress={(data, detail = null) => {
            onChange(data.description);
          }}
          fetchDetails
          onFail={(error) => console.error(error)}
          debounce={200}
        />
      </View>
    </>
  );
};

export default AutocompleteSelect;
