import * as react from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PersonalInventory(props) {
  return (
    <View style={styles.container}>
      <Text>This is the Inventory page</Text>
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
