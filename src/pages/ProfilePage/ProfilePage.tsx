import React, { useState } from "react";
import { SafeAreaView, Switch, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import ProfileCard from "../../components/ProfileCard";
import { commonColors, commonStyles } from "../../theme";
import { getAvatar } from "../../helpers/getAvatar";
import { EGenderType, EPage } from "../../enums";
import { useSelector } from "../../store";
import { makeStyles } from "./styles";

const ProfilePage = () => {
  const classes = makeStyles();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const user = useSelector((store) => store.user.user);

  return (
    <SafeAreaView
      style={[commonStyles.commonContainer, { backgroundColor: "#f4f4f4" }]}
    >
      <View style={[commonStyles.commonWrapper]}>
        <View style={classes.imgContainer}>
          <Avatar.Image
            size={70}
            source={
              user?.avatar
                ? { uri: user.avatar }
                : ({ size }) =>
                    getAvatar(user?.gender as EGenderType, {
                      width: size,
                      height: size,
                    })
            }
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={commonStyles.h3}>{user?.name}</Text>
            <Text style={[commonStyles.p2, classes.email]}>{user?.email}</Text>
          </View>
        </View>
        <View style={classes.menuContainer}>
          <ProfileCard
            title="Edit page"
            pageNavigate={EPage.CHANGE_PROFILE_PAGE}
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
            pageNavigate={EPage.APPOINTMENT_LIST}
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
            pageNavigate={EPage.ABUSE_INFORMATION}
            icon={
              <AntDesign
                name="question"
                size={17}
                color={commonColors.primary.color}
              />
            }
          />
          <ProfileCard
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
