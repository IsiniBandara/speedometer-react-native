// SpeedometerApp.js
import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { Card, Text } from "react-native-paper";
import RNSpeedometer from "react-native-speedometer-new";

const { width } = Dimensions.get("window");

class SpeedometerApp extends Component {
  state = {
    value: 0,
  };

  onChange = (value) => this.setState({ value: parseInt(value) });

  render() {
    const { title } = this.props;

    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
              placeholder="Speedometer Value"
              style={styles.textInput}
              onChangeText={this.onChange}
              placeholderTextColor="#999"
              keyboardType="numeric" // Ensure numeric keyboard for better input experience
            />
            <View style={styles.row}>
              <Text style={styles.cell}>Speed:</Text>
              <Text style={styles.cell}>{this.state.value}</Text>
            </View>
            <RNSpeedometer
              value={this.state.value}
              size={width * 0.4}
              style={styles.value} // Add your desired primary color
            />
          </Card.Content>
        </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#121212", // Dark background color
  },
  card: {
    width: "100%",
    marginBottom: 50,
    backgroundColor: "#1E1E1E", // Dark card background color
  },
  cardContent: {
    backgroundColor: "#1E1E1E", // Dark card content background color
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#FFF", // White text color
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: "#999", // Darker border color
    height: 25,
    fontSize: 16,
    marginBottom: 26,
    color: "#FFF", // White text color
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  cell: {
    fontSize: 16,
    color: "#FFF", // White text color
  },
  value: {
    color: "#ffffff",
  },
});

export default SpeedometerApp;
