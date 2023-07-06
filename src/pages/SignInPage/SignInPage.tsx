import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { commonStyles } from '../../commonStyles';

interface ISignIn {
  email: string;
  password: string;
}

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    console.log(data);
  };

  return (
    <View style={[styles.main, commonStyles.mainContainer]}>
      <View style={styles.container}>
        <View style={styles.controllerContainer}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                mode="outlined"
                error={errors?.email}
              />
            )}
          />
          {errors?.email && <Text style={styles.error}>foo</Text>}
        </View>
        <View style={styles.controllerContainer}>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                mode="outlined"
                error={errors?.password}
              />
            )}
          />
          {errors?.password && <Text style={styles.error}>foo</Text>}
        </View>
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          Sign In
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  container: {
    marginBottom: 100,
  },
  error: {
    marginTop: 5,
    color: 'red',
  },
  controllerContainer: {
    marginBottom: 20,
  },
});

export default SignInPage;
