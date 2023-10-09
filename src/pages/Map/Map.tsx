import React, { useEffect, useState } from "react";
import { SafeAreaView, Image, ScrollView, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import ModalSlider from "../../components/ModalSlider";
import ModalWindow from "../../components/ModalWindow";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { useGetCurrentLocation } from "../../hooks";
import { commonColors, commonStyles } from "../../theme";
import { PET_STATUS_FOR_SEARCHING, PET_TYPE } from "../../constList";
import { EPetStatus } from "../../enums";

export interface ILostInfo {
  petId: string;
  address: string;
  image: string[];
  userName: string;
  userId: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  phoneNumber: number;
}

const foo: ILostInfo[] = [
  {
    petId: "foooo",
    address: "fppbar",
    image: ["https://placekitten.com/g/200/300"],
    userId: "foo",
    userName: "Fedor Muratidi",
    coordinates: {
      latitude: 40.58960851426045,
      longitude: -73.94589078045342,
    },
    phoneNumber: 2,
  },
];

const Map = () => {
  const [state, setState] = useState(null);
  const [radius, setRadius] = useState(1500);
  const [modal, setIsModalOpen] = useState(false);
  const [petStatus, setPetStatus] = useState(PET_STATUS_FOR_SEARCHING[0]);
  const [selectedPet, setSelectedPet] = useState<ILostInfo | null>(null);

  const [mapRegion, setMapRegion] = useState<any>({
    latitude: 40.58960851426045,
    longitude: -73.94589078045342,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const { location } = useGetCurrentLocation();

  useEffect(() => {
    if (!location) {
      return;
    }

    // setMapRegion(location.coords);
  }, [location]);

  return (
    <>
      <SafeAreaView style={{ height: "100%" }}>
        <ScrollView
          horizontal
          style={{
            backgroundColor: commonColors.background.backgroundColor,
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            flex: 1,
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
          <ModalSlider radius={radius} setRadius={setRadius} />
        </ScrollView>
        <View style={{ flex: 15 }}>
          <MapView style={{ height: "100%" }} region={mapRegion}>
            {foo.map((item) => (
              <Marker
                onPress={() => {
                  setIsModalOpen(!modal);
                  setSelectedPet(item as any);
                }}
                coordinate={{
                  latitude: 40.58960851426045,
                  longitude: -73.94589078045342,
                }}
              >
                <Image
                  source={{ uri: "https://placekitten.com/g/200/300" }}
                  style={{ height: 50, width: 50, borderRadius: 50 }}
                />
              </Marker>
            ))}
          </MapView>
        </View>
      </SafeAreaView>
      {selectedPet && (
        <ModalWindow isModalOpen={modal} setIsModalOpen={setIsModalOpen}>
          <View>
            <Image
              source={{ uri: selectedPet.image[0] }}
              style={{
                height: 150,
                width: 250,
                borderRadius: 5,
                marginBottom: 20,
              }}
            />
            <Text style={[commonStyles.p1, commonStyles.marginBottom10]}>
              Person: {selectedPet.userName}
            </Text>
            <Text style={[commonStyles.p2, commonStyles.marginBottom10]}>
              Address: {selectedPet.address}
            </Text>
            <Text style={[commonStyles.p2, commonStyles.marginBottom20]}>
              Phone number: {selectedPet.phoneNumber}
            </Text>
            <Button title={"Close"} onPress={() => setIsModalOpen(false)} />
          </View>
        </ModalWindow>
      )}
    </>
  );
};

export default Map;
