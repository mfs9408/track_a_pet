import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { commonStyles } from "../../theme";
import { TERMS } from "../../constList";

const TermsPage = () => {
  return (
    <SafeAreaView style={commonStyles.commonContainer}>
      <ScrollView style={commonStyles.commonWrapper}>
        <Text style={[commonStyles.h2, commonStyles.marginBottom20]}>Terms and conditions</Text>
        {TERMS.map(({ section, content }) => (
          <View>
            <Text style={[commonStyles.h4, commonStyles.marginBottom10]}>
              {section}
            </Text>
            <Text style={[commonStyles.p2, commonStyles.marginBottom20]}>
              {content}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsPage;
