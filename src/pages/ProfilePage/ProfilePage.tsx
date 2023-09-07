import React, { useState } from "react";
import { SafeAreaView, Switch, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import ProfileCard from "../../components/ProfileCard";
import { commonColors, commonStyles } from "../../theme";
import { EPage } from "../../enums";
import { useSelector } from "../../store";
import { useNavigation } from "@react-navigation/native";
import ModalWindow from "../../components/ModalWindow";
import Button from "../../components/Button";
import { userActions } from "../../store/user";
import { makeStyles } from "./styles";
import Avatar from "../../components/Avatar";

const ProfilePage = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const user = useSelector((store) => store.user.user);

  return (
    <SafeAreaView
      style={[commonStyles.commonContainer, { backgroundColor: "#f4f4f4" }]}
    >
      <View style={[commonStyles.commonWrapper]}>
        <View style={classes.imgContainer}>
          <Avatar name={user?.name || "N"} style={{ width: 55, height: 55 }} />
          <View style={{ marginLeft: 15 }}>
            <Text style={commonStyles.h3}>{user?.name}</Text>
            <Text style={[commonStyles.p2, classes.email]}>{user?.email}</Text>
          </View>
        </View>
        <View style={classes.menuContainer}>
          <ProfileCard
            title="Edit page"
            onPress={() => navigation.navigate(EPage.CHANGE_PROFILE_PAGE)}
            icon={
              <AntDesign
                name="edit"
                size={17}
                color={commonColors.primary.color}
              />
            }
          />
          <ProfileCard
            title="My appointments"
            onPress={() => navigation.navigate(EPage.APPOINTMENT_LIST)}
            icon={
              <AntDesign
                name="calendar"
                size={17}
                color={commonColors.primary.color}
              />
            }
          />
          <ProfileCard
            title="Payment method"
            disabled
            icon={
              <AntDesign
                name="creditcard"
                size={17}
                color={commonColors.primary.color}
              />
            }
          />
          <ProfileCard
            title="Notifications"
            icon={
              <AntDesign
                name="bells"
                size={17}
                color={commonColors.primary.color}
              />
            }
            rightElement={
              <Switch
                trackColor={{
                  false: "rgba(230, 230, 230, 1)",
                  true: "rgba(129, 110, 199, 1)",
                }}
                thumbColor="#fff"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{
                  height: 20,
                  marginTop: -8,
                  transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                }}
              />
            }
          />
          <ProfileCard
            title="Geolocation"
            lastElement
            icon={
              <AntDesign
                name="enviromento"
                size={17}
                color={commonColors.primary.color}
              />
            }
            rightElement={
              <Switch
                trackColor={{
                  false: "rgba(230, 230, 230, 1)",
                  true: "rgba(129, 110, 199, 1)",
                }}
                thumbColor="#fff"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{
                  height: 20,
                  marginTop: -8,
                  transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                }}
              />
            }
          />
        </View>
        <View style={classes.menuContainer}>
          <ProfileCard
            title="Setting & privacy"
            icon={
              <AntDesign
                name="setting"
                size={17}
                color={commonColors.primary.color}
              />
            }
          />
          <ProfileCard
            title="Abuse signs"
            onPress={() => navigation.navigate(EPage.ABUSE_INFORMATION)}
            icon={
              <AntDesign
                name="question"
                size={17}
                color={commonColors.primary.color}
              />
            }
          />
          <ModalWindow
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            Component={
              <ProfileCard
                onPress={() => setIsModalOpen(!isModalOpen)}
                title="Log out"
                lastElement
                icon={
                  <AntDesign
                    name="logout"
                    size={17}
                    color={commonColors.primary.color}
                  />
                }
              />
            }
          >
            <Text style={[commonStyles.p1, commonStyles.marginBottom20]}>
              Are you sure you want to leave?
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Button
                title="Cancel"
                onPress={() => setIsModalOpen(!isModalOpen)}
              />
              <Button
                title="Log out"
                styles={{
                  backgroundColor: commonColors.error.color,
                  borderColor: commonColors.error.color,
                }}
                onPress={() => {
                  dispatch(userActions.logOut());
                }}
              />
            </View>
          </ModalWindow>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
