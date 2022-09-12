import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Categories } from "../common/Constants/categories";
import Picker from "../components/Picker";
// import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import Subtitle from "../components/Subtitle";
import { Difficulty } from "../common/Constants/difficulty";
import { StackNavigationType } from "../types";

const Option = ({ navigation }: StackNavigationType) => {
  const [categoryValue, setCategoryValue] = useState("");
  const [difficultyValue, setDifficultyValue] = useState("");

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Subtitle handleBack={handleBack} title="Quiz Options" />
      <View style={styles.pickerWrap}>
        <Picker
          data={Categories}
          value={categoryValue}
          setValue={setCategoryValue}
          defaultValue={"Select a Category"}
        />
        <Picker
          data={Difficulty}
          value={difficultyValue}
          setValue={setDifficultyValue}
          defaultValue={"Select a Difficulty"}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Quiz", {
            categories: categoryValue,
            difficulty: difficultyValue,
          })
        }
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: "100%",
  },
  pickerWrap: {
    flex: 1,
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    // width: "100%",
    backgroundColor: "#002D62",
    padding: 20,
    borderRadius: 16,
    marginBottom: 40,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
  },
});