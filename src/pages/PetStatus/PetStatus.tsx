import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SafeAreaView, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { petsActions } from "../../store/petsStore/slice";
import AutocompleteSelect from "../../components/AutocompleteSelect";
import TextField from "../../components/TextField";
import { RoutePropsProps } from "../../types";
import { EPage, EPetStatus } from "../../enums";
import { PET_STATUS } from "../../constList";
import { useSelector } from "../../store";
import { commonStyles } from "../../theme";
import Select from "../../components/Select";
import Button from "../../components/Button";

export interface IPetStatus {
  loseAddress: {
    street: string;
  };
  petStatus: {
    id: EPetStatus;
    value: string;
  };
  petId: string;
}

const PetStatus = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute<RoutePropsProps<EPage.PET_STATUS>>();

  const petId = route.params.petId;
  const petsData = useSelector((state) =>
    state.pets.find((pet) => pet.id === petId)
  );

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IPetStatus>({
    defaultValues: {
      petStatus: petsData?.petStatus.id
        ? petsData?.petStatus
        : {
            id: EPetStatus.OWNER,
            value: "Owner",
          },
      loseAddress: {
        street: petsData?.loseAddress?.street || "",
      },
    },
  });

  const onSubmit: SubmitHandler<IPetStatus> = (data) => {
    dispatch(petsActions.changePetStatus({ ...data, petId }));
    navigation.goBack();
  };

  const petStatus = watch("petStatus")?.id;
  const isPetLostOrFound = petStatus !== EPetStatus.OWNER;

  useEffect(() => {
    if (!isPetLostOrFound) {
      setValue("loseAddress", { street: "" });
    }
  }, [isPetLostOrFound]);

  return (
    <SafeAreaView style={[commonStyles.commonContainer]}>
      <View style={[commonStyles.commonWrapper, { flex: 1 }]}>
        <Controller
          name="petStatus"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Select
              label="Pet status"
              placeholder={{ id: null, value: "Select pet status" }}
              items={PET_STATUS}
              value={value}
              onValueChange={onChange}
              error={!!errors.petStatus}
              styles={commonStyles.marginBottom20}
            />
          )}
        />
        {isPetLostOrFound && (
          <>
            {petsData?.loseAddress?.street && (
              <TextField
                label="Current address"
                value={petsData.loseAddress?.street}
                editable={false}
                styles={[commonStyles.marginBottom20]}
              />
            )}
            <Controller
              name="loseAddress.street"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <AutocompleteSelect label="New address" onChange={onChange} />
              )}
            />
          </>
        )}
      </View>
      <View style={{ marginHorizontal: 20, marginBottom: 30 }}>
        <Button title="Change pet status" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};

export default PetStatus;
