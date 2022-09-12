import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcon } from "../../shared/Icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Subtitle = ({
  title,
  handleBack,
}: {
  title: string;
  handleBack: any;
}) => {
  return (
    <View style={styles.titleWrap}>
      <TouchableOpacity onPress={handleBack}>
        <MaterialIcon color="#28282B" name="keyboard-arrow-left" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Montserrat_400Regular",
    color: "#28282B",
    marginLeft: 40,
  },
  titleWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  container: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});