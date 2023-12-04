import React, { useState } from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../../components/TextField/TextInput";
import Button from "../../components/Button";
import { EPage, EURL } from "../../enums";
import { makeStyles } from "../SignInPage/styles";
import { commonColors, commonStyles } from "../../theme";
import { post } from "../../Api";

interface ISignUp {
  email: string;
  password: string;
  name: string;
}

const SignUpPage = () => {
  const classes = makeStyles();
  const navigation = useNavigation();
  const [error, setError] = useState("");

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

  const onSubmit: SubmitHandler<ISignUp> = async (data) => {
    post(EURL.REGISTRATION, data)
      .then(() => navigation.navigate(EPage.SIGN_IN))
      .catch((e: Error) => {
        setError(e.message);
      });
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
          <View style={commonStyles.marginBottom20}>
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
                  error={!!errors.email}
                />
              )}
            />
            {errors?.email && (
              <Text style={[commonStyles.p2, classes.error]}>
                Incorrect email
              </Text>
            )}
          </View>
          <View style={commonStyles.marginBottom20}>
            <Controller
              name="password"
              control={control}
              rules={{ required: true, minLength: 8 }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Password"
                  value={value}
                  onChange={onChange}
                  error={!!errors.password}
                />
              )}
            />
            {errors?.password && (
              <Text style={[commonStyles.p2, classes.error]}>
                Incorrect password
              </Text>
            )}
          </View>
          <View style={commonStyles.marginBottom20}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, minLength: 5 }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Your name"
                  value={value}
                  onChange={onChange}
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
        </View>
        <View>
          <View style={classes.buttonContainer}>
            <Button
              title="Sign Up"
              onPress={handleSubmit(onSubmit)}
              styles={classes.button}
            />
          </View>
          <View
            style={[classes.accountTextWrapper, commonStyles.marginBottom20]}
          >
            <Text style={classes.accountText}>Already have an account?</Text>
            <Pressable>
              <Text style={[commonColors.primary]}>Sign in!</Text>
            </Pressable>
          </View>
          <Pressable onPress={() => navigation.navigate(EPage.TERMS_PAGE)}>
            <View style={classes.accountTextWrapper}>
              <Text style={commonColors.primary}>Terms and conditions</Text>
            </View>
          </Pressable>
        </View>
        {error && (
          <Text
            style={[
              commonStyles.p2,
              commonStyles.marginBottom20,
              classes.error,
            ]}
          >
            {error}
          </Text>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUpPage;
