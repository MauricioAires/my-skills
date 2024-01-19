import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    color: "#FFF",
    backgroundColor: "#1f1e25",
    padding: 15,
    fontSize: 22,
    fontWeight: "bold",
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
