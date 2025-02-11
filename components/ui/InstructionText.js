import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.istructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  istructionText: { color: Colors.accent500, fontSize: 24 },
});
