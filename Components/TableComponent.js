import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const TableComponent = () => {
  // Sample data for the table
  const tableData = [
    ["Main Socket", "25"],
    ["Socket A", "65"],
    ["Socket B", "85"],
  ];

  return (
    <ScrollView style={styles.container}>
      <Table borderStyle={styles.border}>
        <Row
          data={["Name", "Current"]}
          style={styles.header}
          textStyle={styles.headerText}
        />
        <Rows data={tableData} textStyle={styles.rowText} />
      </Table>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#121212",
  },
  border: { borderWidth: 2, borderColor: "#20232a" },
  header: { height: 40, backgroundColor: "#282c34" },
  headerText: {
    margin: 6,
    color: "#61dafb",
    textAlign: "center",
    fontWeight: "bold",
  },
  rowText: { margin: 6, color: "white", textAlign: "center" },
});

export default TableComponent;
