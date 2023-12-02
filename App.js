// // App.js
// import React from "react";
// import {
//   StatusBar,
//   Dimensions,
//   StyleSheet,
//   View,
//   ScrollView,
// } from "react-native";
// import SpeedometerApp from "./Components/Speedometer";
// import TableComponent from "./Components/TableComponent";
// import RankCard from "./Components/RankCard";
// import { Card } from "react-native-paper";

// const { width, height } = Dimensions.get("window");

// export default function App() {
//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <SpeedometerApp style={styles.mainSpeedometer} title="Main Socket" />

//         <View style={styles.rowContainer}>
//           <SpeedometerApp style={styles.subSpeedometer} title="Socket A" />
//           <SpeedometerApp style={styles.subSpeedometer} title="Socket B" />
//         </View>

//         <Card style={styles.card}>
//           <Card.Content>
//             <TableComponent />
//           </Card.Content>
//         </Card>

//         <StatusBar style="auto" />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   container: {
//     backgroundColor: "#121212", // Dark background color
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   mainSpeedometer: {
//     marginTop: height * 0.1,
//     paddingBottom: height * 0.05,
//     width: width * 0.9,
//   },
//   rowContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: height * 0.05,
//     width: width * 0.9,
//   },
//   subSpeedometer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   card: {
//     marginBottom: height * 0.02,
//     width: width * 0.9,
//     backgroundColor: "#1E1E1E", // Dark card background color
//   },
// });
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Components/LoginScreen";
import Home from "./Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
