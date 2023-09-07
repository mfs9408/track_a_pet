import React from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { commonColors, commonStyles } from "../../theme";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../../components/TextField/TextInput";
import Button from "../../components/Button";
import { EPage } from "../../enums";
import { makeStyles } from "../SignInPage/styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/asyncAction";

interface ISignUp {
  email: string;
  password: string;
  name: string;
}

const SignUpPage = () => {
  const classes = makeStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch<any>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    defaultValues: {
      email: "mfs9408@gmail.com",
      password: "123456",
      name: "Fedor Muratidi",
    },
  });

  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    dispatch(getUser(data));
  };

  return (
    <SafeAreaView style={[commonStyles.commonContainer]}>
      <ImageBackground
        style={[
          commonStyles.commonWrapper,
          { height: "100%", justifyContent: "space-between" },
        ]}
        source={{}}
      >
        <View>
          <Text style={[commonStyles.h2, classes.header]}>Sign Up</Text>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Email"
                value={value}
                onChange={onChange}
                styles={!errors.email ? commonStyles.marginBottom20 : {}}
                error={!!errors.email}
              />
            )}
          />
          {errors?.email && (
            <Text
              style={[
                commonStyles.p2,
                commonStyles.marginBottom20,
                classes.error,
              ]}
            >
              Incorrect email
            </Text>
          )}
          <Controller
            name="password"
            control={control}
            rules={{ required: true, minLength: 8 }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Password"
                value={value}
                onChange={onChange}
                styles={!errors.password ? commonStyles.marginBottom20 : {}}
                error={!!errors.password}
              />
            )}
          />
          {errors?.password && (
            <Text
              style={[
                commonStyles.p2,
                commonStyles.marginBottom20,
                classes.error,
              ]}
            >
              Incorrect password
            </Text>
          )}
          <Controller
            name="name"
            control={control}
            rules={{ required: true, minLength: 5 }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Your name"
                value={value}
                onChange={onChange}
                styles={!errors.name ? commonStyles.marginBottom20 : {}}
                error={!!errors.name}
              />
            )}
          />
          {errors?.name && (
            <Text
              style={[
                commonStyles.p2,
                commonStyles.marginBottom20,
                classes.error,
              ]}
            >
              Min length: 5
            </Text>
          )}
        </View>
        <View>
          <View style={classes.buttonContainer}>
            <Button
              title="Sign In"
              onPress={handleSubmit(onSubmit)}
              styles={classes.button}
            />
          </View>
          <View style={classes.accountTextWrapper}>
            <Text style={classes.accountText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate(EPage.SIGN_IN)}>
              <Text style={[commonColors.primary]}>Sign in!</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUpPage;
