// import React from "react";
// import { View, Text } from "react-native";

// const RankCard = ({ rank, name, runs, matches, average, strikeRate }) => {
//   return (
//     <View>
//       <Text>Rank Card</Text>
//       {/* Render rank card components */}
//     </View>
//   );
// };

// export default RankCard;
import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";

export default class RankCard extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
          ]}
          renderItem={({ item }) => (
            <Card containerStyle={styles.card}>
              <TouchableOpacity>
                <Text>{item.key}</Text>
              </TouchableOpacity>
            </Card>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingBottom: 22,
    width: 300,
  },
  card: {
    backgroundColor: "#2089dc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
});
