import { StyleSheet, Text, View } from "react-native";

const Title = ({ title }: { title: string }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };
  
  export default Title;
  
  const styles = StyleSheet.create({
    title: {
      fontSize: 36,
      fontWeight: "600",
      fontFamily: "Montserrat_400Regular"
    },
    container: {
      paddingVertical: 16,
      justifyContent: "center",
      alignItems: "center",
    },
  });