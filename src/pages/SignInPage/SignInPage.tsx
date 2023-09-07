import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { commonColors, commonStyles } from "../../theme";
import { EPage } from "../../enums";
import Button from "../../components/Button";
import TextInput from "../../components/TextField";
import { makeStyles } from "./styles";
import { getUser } from "../../store/asyncAction";

interface ISignIn {
  email: string;
  password: string;
}

const SignInPage = () => {
  const classes = makeStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch<any>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    defaultValues: {
      email: "mfs9408@gmail.com",
      password: "123456",
    },
  });

  const onSubmit: SubmitHandler<ISignIn> = (data) => {
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
          <Text style={[commonStyles.h2, classes.header]}>Sign In</Text>
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
              rules={{ required: true }}
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
          <View style={classes.passwordContainer}>
            <Pressable>
              <Text style={[commonStyles.p3, commonColors.grey]}>
                Forgot password?
              </Text>
            </Pressable>
          </View>
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
            <Text style={classes.accountText}>Dont have an account?</Text>
            <Pressable onPress={() => navigation.navigate(EPage.SIGN_UP)}>
              <Text style={[commonColors.primary]}>Sign up!</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignInPage;
