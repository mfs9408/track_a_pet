import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, View } from "react-native";
import Button from "../Button";
import { commonColors, commonStyles } from "../../theme";
import Slider from "@react-native-community/slider";
import ModalWindow from "../ModalWindow";

interface IModalSlideer {
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
}

const ModalSlider = ({ radius, setRadius }: IModalSlideer) => {
  const [modal, setIsModalOpen] = useState(false);

  return (
    <ModalWindow
      Component={
        <Button
          title={`Radius: ${radius} m`}
          onPress={() => setIsModalOpen(true)}
          styles={{
            marginHorizontal: 10,
            height: 40,
          }}
        />
      }
      isModalOpen={modal}
      setIsModalOpen={() => setIsModalOpen(!modal)}
    >
      <View style={commonStyles.marginBottom20}>
        <Text style={commonStyles.h2}>Radius: {radius} m</Text>
        <Slider
          value={radius}
          onValueChange={(value) => setRadius(value)}
          style={{ width: 200, height: 40 }}
          minimumValue={100}
          maximumValue={1500}
          minimumTrackTintColor={commonColors.primary.color}
          maximumTrackTintColor={commonColors.semiTransparentGrey.color}
          step={100}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={commonStyles.p1}>0</Text>
          <Text style={commonStyles.p1}>1500</Text>
        </View>
      </View>
      <Button title="Close" onPress={() => setIsModalOpen(false)} />
    </ModalWindow>
  );
};

export default ModalSlider;
