import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { commonStyles } from "../../theme";
import TextField from "../../components/TextField";
import { makeStyles } from "./styles";
import Chip from "../../components/Chip";
import Button from "../../components/Button";
import Select from "../../components/Select";

const AddPet = () => {
  const classes = makeStyles();
  const [value, setValue] = useState("");
  const [chip, setChip] = useState(true);

  return (
    <SafeAreaView style={[commonStyles.commonContainer]}>
      <ScrollView style={[commonStyles.commonWrapper]}>
        <View style={classes.container}>
          <Text style={[commonStyles.p1, classes.text]}>Pet name</Text>
          <TextField
            value={value}
            setValue={setValue}
            placeholder="Pet's name"
          />
        </View>
        <View style={classes.container}>
          <Text style={[commonStyles.p1, classes.text]}>Gender</Text>
          <View style={{ flexDirection: "row" }}>
            <Chip value="Female" selected={chip} setSelected={setChip} />
            <Chip value="Male" selected={false} setSelected={setChip} />
            <Chip value="Unknown" selected={false} setSelected={setChip} />
          </View>
        </View>
        <View style={classes.container}>
          <Text style={[commonStyles.p1, classes.text]}>Breed</Text>
          <Select
            placeholder={{
              label: "Select breed",
              value: null,
            }}
            onValueChange={() => {}}
            items={[]}
          />
        </View>
        <View style={classes.container}>
          <Text style={[commonStyles.p1, classes.text]}>Color</Text>
          <TextField value={""} setValue={() => {}} placeholder="Pet's color" />
        </View>
        <View style={classes.container}>
          <Text style={[commonStyles.p1, classes.text]}>Weight</Text>
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Pet's weight"
          />
        </View>
        <View style={classes.container}>
          <Text style={[commonStyles.p1, classes.text]}>Age</Text>
          <TextField value={""} setValue={() => {}} placeholder="Pet's age" />
        </View>
        <View style={classes.container}>
          <Text style={[commonStyles.p1, classes.text]}>Microchip number</Text>
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Microchip number"
          />
        </View>
        <View style={classes.container}>
          <Text style={[commonStyles.p1, classes.text]}>Vaccine name</Text>
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Vaccine name"
            styles={{ marginBottom: 10 }}
          />
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Vaccine date"
            styles={{ marginBottom: 10 }}
          />
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Vaccine type"
            styles={{ marginBottom: 10 }}
          />
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Veterinarian"
            styles={{ marginBottom: 10 }}
          />
          <TouchableOpacity>
            <Text
              style={[
                commonStyles.p1,
                { flex: 1, textAlign: "right", color: "#6b58b4" },
              ]}
            >
              Add vaccine
            </Text>
          </TouchableOpacity>
        </View>
        <View style={classes.container}>
          <Text style={[commonStyles.p1, classes.text]}>Pet's diet</Text>
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Describe pet's diet"
          />
        </View>
        <View style={classes.container}>
          <Text style={[commonStyles.p1, classes.text]}>
            Veterinarian information
          </Text>
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Veterinarian"
            styles={{ marginBottom: 10 }}
          />
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Clinic"
            styles={{ marginBottom: 10 }}
          />
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Address"
            styles={{ marginBottom: 10 }}
          />
          <TextField
            value={""}
            setValue={() => {}}
            placeholder="Phone number"
            styles={{ marginBottom: 10 }}
          />
          <TouchableOpacity>
            <Text
              style={[
                commonStyles.p1,
                { flex: 1, textAlign: "right", color: "#6b58b4" },
              ]}
            >
              Add vet
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            classes.container,
            { flexDirection: "row", justifyContent: "space-around" },
          ]}
        >
          <Button
            title="Reset all"
            onPress={() => {}}
            styles={{ backgroundColor: "#fff" }}
            textStyles={{ color: "#715BC4" }}
          />
          <Button title="Add pet" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPet;
