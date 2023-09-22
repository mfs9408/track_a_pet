import React, { useCallback, useMemo, useRef, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Slider from "@react-native-community/slider";
import Select from "../../components/Select";
import { commonColors, commonStyles } from "../../theme";
import { PET_STATUS_FOR_SEARCHING, PET_TYPE } from "../../constList";
import ModalWindow from "../../components/ModalWindow";
import Button from "../../components/Button";
import { EPetStatus } from "../../enums";

const Map = () => {
  const [state, setState] = useState(null);
  const [radius, setRadius] = useState(1500);
  const [modal, setIsModalOpen] = useState(false);
  const [petStatus, setPetStatus] = useState(PET_STATUS_FOR_SEARCHING[0]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        style={{
          backgroundColor: commonColors.background.backgroundColor,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <Select
          value={state}
          items={PET_TYPE}
          onValueChange={(item: React.SetStateAction<null>) => setState(item)}
          placeholder={{ id: null, value: "Species" }}
          icon={false}
          styles={{ width: 90, marginRight: 10 }}
          pickerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Select
          value={petStatus}
          items={PET_STATUS_FOR_SEARCHING}
          onValueChange={(
            item: React.SetStateAction<{ id: EPetStatus; value: string }>
          ) => setPetStatus(item)}
          icon={false}
          styles={{ width: 90 }}
          pickerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <ModalWindow
          Component={
            <Button
              title={`Radius: ${radius} m`}
              onPress={() => setIsModalOpen(true)}
              styles={{ marginHorizontal: 10 }}
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
      </ScrollView>
      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Map;
