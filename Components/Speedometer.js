import React, { Component } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Card, Text } from "react-native-paper";
import RNSpeedometer from "react-native-speedometer-new";

class SpeedometerApp extends Component {
  state = {
    mainSpeedometerValue: 0,
    subSpeedometer1Value: 0,
    subSpeedometer2Value: 0,
  };

  onChangeMainSpeedometer = (value) =>
    this.setState({ mainSpeedometerValue: parseInt(value) });
  onChangeSubSpeedometer1 = (value) =>
    this.setState({ subSpeedometer1Value: parseInt(value) });
  onChangeSubSpeedometer2 = (value) =>
    this.setState({ subSpeedometer2Value: parseInt(value) });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <TextInput
              placeholder="Current Value"
              style={styles.textInput}
              onChangeText={this.onChangeMainSpeedometer}
            />
            <View style={styles.row}>
              <Text style={styles.cell}>Current:</Text>
              <Text style={styles.cell}>{this.state.mainSpeedometerValue}</Text>
            </View>
            <RNSpeedometer value={this.state.mainSpeedometerValue} size={200} />
          </Card.Content>
        </Card>

        <View style={styles.subSpeedometersContainer}>
          <Card style={styles.subSpeedometerCard}>
            <Card.Content>
              <TextInput
                placeholder="Current Value"
                style={styles.textInput}
                onChangeText={this.onChangeSubSpeedometer1}
              />
              <View style={styles.row}>
                <Text style={styles.cell}>Current:</Text>
                <Text style={styles.cell}>
                  {this.state.subSpeedometer1Value}
                </Text>
              </View>
              <RNSpeedometer
                value={this.state.subSpeedometer1Value}
                size={100}
              />
            </Card.Content>
          </Card>

          <Card style={styles.subSpeedometerCard}>
            <Card.Content>
              <TextInput
                placeholder="Current Value"
                style={styles.textInput}
                onChangeText={this.onChangeSubSpeedometer2}
              />
              <View style={styles.row}>
                <Text style={styles.cell}>Current:</Text>
                <Text style={styles.cell}>
                  {this.state.subSpeedometer2Value}
                </Text>
              </View>
              <RNSpeedometer
                value={this.state.subSpeedometer2Value}
                size={100}
              />
            </Card.Content>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: 300,
    marginTop: 20,
  },
  card: {
    marginBottom: 36,
    width: "100%",
  },
  subSpeedometersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subSpeedometerCard: {
    flex: 1,
    marginRight: 10,
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: "black",
    height: 25,
    fontSize: 16,
    marginBottom: 26,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  cell: {
    fontSize: 16,
  },
});

export default SpeedometerApp;
