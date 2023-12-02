import React from "react";
import { View, Text } from "react-native";
import { RadialGradient } from "react-native-svg-charts";
import { Speedometer } from "react-native-svg-charts";

const SpeedometerCard = ({ speed }) => {
  return (
    <View>
      <Text>Speedometer Card</Text>
      <Speedometer
        value={speed}
        totalValue={100}
        internalColor="blue"
        externalColor="lightblue"
      />
    </View>
  );
};

export default SpeedometerCard;
