import React from 'react';
import { ScrollView, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Avatar, Text, TextInput, useTheme } from 'react-native-paper';
import { useSelector } from '../../store';
import { makeStyles } from './styles';

const EditPetInfoPage = ({ route }) => {
  const theme = useTheme();
  const classes = makeStyles();
  const { id } = route.params;
  const petValue = useSelector((store) =>
    store.pets.find((pet) => pet.id === id)
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      id: petValue.id,
      userId: petValue.userId,
      name: petValue.name,
      avatar: petValue.avatar,
      owning: petValue.owning,
      gender: petValue.gender,
      spayed: petValue.spayed,
      species: petValue.species,
      breed: petValue.breed,
      description: petValue.description,
      image: petValue.image,
      lost: petValue.lost,
      loseAddress: petValue.loseAddress,
      loseDate: petValue.loseDate,
      remindIDs: petValue.remindIDs,
      birthDay: petValue.birthDay,
    },
  });

  return (
    <ScrollView contentContainerStyle={classes.container}>
      <Avatar.Image size={100} source={{ uri: petValue.avatar as string }} />
      <Text>Empty page</Text>
    </ScrollView>
  );
};

export default EditPetInfoPage;
