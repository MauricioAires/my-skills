import { StyleSheet, Text, TouchableOpacity } from "react-native";

export interface ButtonProps {
  onPress: () => void;
}

export function Button({ onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ae70f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
