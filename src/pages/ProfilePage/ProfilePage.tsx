import React, { useState } from "react";
import { SafeAreaView, Switch, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";
import { useSelector } from "../../store";
import { getAvatar } from "../../helpers/getAvatar";
import { EGenderType } from "../../enums";

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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <Avatar.Image
            size={70}
            source={
              user.avatar
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
            <Text
              style={[
                commonStyles.p2,
                { color: "rgba(95, 91, 91, 1)", fontWeight: "400" },
              ]}
            >
              {user.email}
            </Text>
          </View>
        </View>
        <View style={classes.menuContainer}>
          <View style={classes.block}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="edit"
                size={17}
                color="rgba(129, 110, 199, 1)"
                style={{ marginRight: 10 }}
              />
              <Text style={[commonStyles.p2, { fontWeight: "400" }]}>
                Edit profile
              </Text>
            </View>
            <AntDesign name="right" size={17} color="rgba(196, 196, 196, 1)" />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#D9D9D9",
            }}
          ></View>
          <View style={classes.block}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="calendar"
                size={17}
                color="rgba(129, 110, 199, 1)"
                style={{ marginRight: 10 }}
              />
              <Text style={[commonStyles.p2, { fontWeight: "400" }]}>
                My appointments
              </Text>
            </View>
            <AntDesign name="right" size={17} color="rgba(196, 196, 196, 1)" />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#D9D9D9",
            }}
          ></View>
          <View style={classes.block}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="creditcard"
                size={17}
                color="rgba(129, 110, 199, 1)"
                style={{ marginRight: 10 }}
              />
              <Text style={[commonStyles.p2, { fontWeight: "400" }]}>
                Payment method
              </Text>
            </View>
            <AntDesign name="right" size={17} color="rgba(196, 196, 196, 1)" />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#D9D9D9",
            }}
          ></View>
          <View style={classes.block}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="bells"
                size={17}
                color="rgba(129, 110, 199, 1)"
                style={{ marginRight: 10 }}
              />
              <Text style={[commonStyles.p2, { fontWeight: "400" }]}>
                Notifications
              </Text>
            </View>
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
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#D9D9D9",
            }}
          ></View>
          <View style={classes.block}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="enviromento"
                size={17}
                color="rgba(129, 110, 199, 1)"
                style={{ marginRight: 10 }}
              />
              <Text style={[commonStyles.p2, { fontWeight: "400" }]}>
                Geolocation
              </Text>
            </View>
            <Switch
              trackColor={{
                false: "rgba(230, 230, 230, 1)",
                true: "rgba(129, 110, 199, 1)",
              }}
              thumbColor="#fff"
              // ios_backgroundColor="rgba(230, 230, 230, 1)"
              onValueChange={toggleSwitch}
              value={!isEnabled}
              style={{
                height: 20,
                marginTop: -8,
                transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
              }}
            />
          </View>
        </View>

        <View style={classes.menuContainer}>
          <View style={classes.block}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="setting"
                size={17}
                color="rgba(129, 110, 199, 1)"
                style={{ marginRight: 10 }}
              />
              <Text style={[commonStyles.p2, { fontWeight: "400" }]}>
                Setting & privacy
              </Text>
            </View>
            <AntDesign name="right" size={17} color="rgba(196, 196, 196, 1)" />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#D9D9D9",
            }}
          ></View>
          <View style={classes.block}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="question"
                size={17}
                color="rgba(129, 110, 199, 1)"
                style={{ marginRight: 10 }}
              />
              <Text style={[commonStyles.p2, { fontWeight: "400" }]}>
                Help & support
              </Text>
            </View>
            <AntDesign name="right" size={17} color="rgba(196, 196, 196, 1)" />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#D9D9D9",
            }}
          ></View>
          <View style={classes.block}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="logout"
                size={17}
                color="rgba(129, 110, 199, 1)"
                style={{ marginRight: 10 }}
              />
              <Text style={[commonStyles.p2, { fontWeight: "400" }]}>
                Log out
              </Text>
            </View>
            <AntDesign name="right" size={17} color="rgba(196, 196, 196, 1)" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
