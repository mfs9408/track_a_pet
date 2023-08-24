import React from "react";
import { ScrollView, Text, View } from "react-native";
import { commonStyles } from "../../theme";
import { makeStyles } from "./styles";

interface IData {
  header: string;
  topList: {
    header: string;
    paragraphs: {
      paragraph: string;
    }[];
  }[];
}

const data: IData[] = [
  {
    header: "Recognizing Signs of Pet Abuse:",
    topList: [
      {
        header: "Physical Indicators:",
        paragraphs: [
          {
            paragraph: "Unexplained injuries such as cuts, bruises, or burns",
          },
          {
            paragraph: "Excessive weight loss or signs of malnutrition",
          },
          { paragraph: "Fur loss, matting, or signs of inadequate grooming" },
          { paragraph: "Limping or difficulty moving" },
        ],
      },
      {
        header: "Behavioral Clues:",
        paragraphs: [
          {
            paragraph: "Fear or aggression towards humans",
          },
          {
            paragraph: "Cowering, flinching, or avoiding interaction",
          },
          { paragraph: "Unusual trembling, shaking, or whimpering" },
          { paragraph: "Isolation or hiding behavior" },
        ],
      },
      {
        header: "Environmental Red Flags:",
        paragraphs: [
          {
            paragraph: "Unsanitary living conditions",
          },
          {
            paragraph: "Lack of access to clean water, food, or shelter",
          },
          { paragraph: "Confinement in a small, dirty space" },
        ],
      },
    ],
  },
  {
    header: "Taking Action When You Suspect Pet Abuse:",
    topList: [
      {
        header: "Document the Evidence:",
        paragraphs: [
          {
            paragraph:
              "Gather detailed notes, photographs, and videos of the animal's condition.",
          },
          {
            paragraph:
              "Note the date, time, and location of the suspected abuse.",
          },
        ],
      },
      {
        header: "Contact Local Authorities:",
        paragraphs: [
          {
            paragraph:
              "Reach out to your local animal control or law enforcement agency.",
          },
          { paragraph: "Provide them with the evidence you've collected." },
        ],
      },
      {
        header: "Involve Animal Welfare Organizations:",
        paragraphs: [
          {
            paragraph:
              "Connect with local animal shelters, rescue groups, or humane societies.",
          },
          {
            paragraph:
              "They can provide guidance and support in addressing the situation.",
          },
        ],
      },
    ],
  },
  {
    header: "Who to call:",
    topList: [
      {
        header: "Animal Control or Law Enforcement:",
        paragraphs: [
          {
            paragraph:
              "If you believe an animal is in immediate danger or facing severe abuse, contact your local animal control or law enforcement.",
          },
        ],
      },
      {
        header: "Local Animal Shelters and Humane Societies:",
        paragraphs: [
          {
            paragraph:
              "Reach out to these organizations to report suspected abuse and seek advice.",
          },
        ],
      },
      {
        header: "Hotlines and Nonprofit Organizations:",
        paragraphs: [
          {
            paragraph:
              "National organizations like the ASPCA (American Society for the Prevention of Cruelty to Animals) often have hotlines for reporting abuse.",
          },
        ],
      },
      {
        header: "Veterinarians",
        paragraphs: [
          {
            paragraph:
              "Veterinarians can provide expert opinions on the animal's condition, which can be valuable evidence.",
          },
        ],
      },
    ],
  },
  {
    header: "Supporting Change and Prevention:",
    topList: [
      {
        header: "Promote Education:",
        paragraphs: [
          {
            paragraph:
              "Share information about recognizing and reporting pet abuse on social media and within your community.",
          },
        ],
      },
      {
        header: "Advocate for Stronger Laws:",
        paragraphs: [
          {
            paragraph:
              "Support initiatives and campaigns aimed at strengthening animal protection laws.",
          },
        ],
      },
      {
        header: "Donate and Volunteer:",
        paragraphs: [
          {
            paragraph:
              "Contribute to local animal welfare organizations that work to prevent and address pet abuse.",
          },
        ],
      },
    ],
  },
];

const AbuseInformationPage = () => {
  const classes = makeStyles();

  return (
    <ScrollView
      style={[commonStyles.commonContainer, commonStyles.commonWrapper]}
    >
      <View style={{ paddingBottom: 70 }}>
        <View style={classes.header}>
          <Text style={commonStyles.h2}>
            Recognizing Pet Abuse: How to Take Action and Protect Animals
          </Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={commonStyles.p2}>
            What about pet abusing? There are signs of pet abusing.
          </Text>
        </View>
        {data.map((item) => (
          <View style={{ marginBottom: 20 }}>
            <Text style={[commonStyles.h4, classes.upperParagraph]}>
              {item.header}
            </Text>
            {item.topList.map((list) => (
              <View style={{ marginBottom: 5, marginLeft: 5 }}>
                <Text style={[commonStyles.p1]}>{list.header}</Text>
                {list.paragraphs.map((item) => (
                  <View style={{ marginLeft: 10, flexDirection: "row" }}>
                    <Text>&#8728; </Text>
                    <Text style={commonStyles.p3}>{item.paragraph}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AbuseInformationPage;
