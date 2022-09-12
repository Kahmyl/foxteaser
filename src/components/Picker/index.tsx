import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Categories } from "../../common/Constants/categories";
import { useState } from "react";


type pickerTypes = {
  data: typeof Categories;
  value: string;
  setValue: any;
  defaultValue: string;
};

const SelectPicker = ({ data, value, setValue, defaultValue }: pickerTypes) => {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker_style}
        itemStyle={styles.picker_style}
        selectedValue={value}
        dropdownIconColor="#002D62"
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
      >
        <Picker.Item
          style={styles.picker_style}
          label={defaultValue}
          value=""
          fontFamily="Montserrat_400Regular"
        />
        {data.map((option, index) => (
          <Picker.Item
            style={styles.picker_style}
            key={index}
            label={option.name}
            value={option.key}
            fontFamily="Montserrat_400Regular"
          />
        ))}
      </Picker>
    </View>
  );
};

export default SelectPicker;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    justifyContent: "center",
    borderColor: "#002D62",
    borderWidth: 2,
    borderRadius: 16,
  },
  picker_style: {
    color: "#002D62",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat_400Regular",
  },
});