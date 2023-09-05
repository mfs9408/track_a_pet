import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { commonColors, commonStyles } from "../../theme";
import { EGenderType, EPage } from "../../enums";
import Button from "../../components/Button";
import TextInput from "../../components/TextField";
import { IUserResponseInterface } from "../../types";
import { userActions } from "../../store/user";
import { makeStyles } from "./styles";
import { fetchUser } from "../../store/user/asyncAction";
import * as Network from "expo-network";
import axios from "axios";

const initialData: IUserResponseInterface = {
  tokens: {
    accessToken: "86b86e48-0365-4151-98ca-2258b31a53af",
    refreshToken: "86b86e48-0365-4151-98ca-2258b31a53af",
  },
  user: {
    id: "1",
    email: "mfs9408ny@gmail.com",
    role: ["user"],
    name: "Fedor Muratidi",
    pets: [234],
    isActivated: true,
    owning: "owner",
    gender: EGenderType.MALE,
  },
};

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
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    axios
      .post("http://localhost:3000/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => console.log("response", response.data))
      .catch((e) => console.log("error", e));
  };

  return (
    <SafeAreaView style={[commonStyles.commonContainer]}>
      <View style={[commonStyles.commonWrapper]}>
        <Text style={[commonStyles.h2, classes.header]}>Sign In</Text>
        <View style={classes.controllerContainer}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <>
                <Text
                  style={[
                    commonStyles.h4,
                    commonStyles.interRegular,
                    classes.inputHeader,
                  ]}
                >
                  Email
                </Text>
                <TextInput value={value} onChange={onChange} />
              </>
            )}
          />
          {errors?.email && (
            <Text style={[commonStyles.p4, classes.error]}>
              Incorrect email
            </Text>
          )}
        </View>
        <View style={classes.controllerContainer}>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <>
                <Text
                  style={[
                    commonStyles.h4,
                    commonStyles.interRegular,
                    classes.inputHeader,
                  ]}
                >
                  Password
                </Text>
                <TextInput value={value} onChange={onChange} />
              </>
            )}
          />
          {errors?.password && (
            <Text style={[commonStyles.p4, classes.error]}>
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
    </SafeAreaView>
  );
};

export default SignInPage;
