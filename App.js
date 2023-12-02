import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import SpeedometerApp from "./Components/Speedometer";
import TableComponent from "./Components/TableComponent";
import RankCard from "./Components/RankCard";
import { Card, Text } from "react-native-paper";
export default function App() {
  return (
    <View style={styles.container}>
      <SpeedometerApp />
      {/* <TableComponent /> Include the TableComponent here */}
      <Card style={styles.card}>
        <Card.Content></Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <TableComponent />
        </Card.Content>
      </Card>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
