import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import Title from "../components/Title";
  import { useNavigation } from "@react-navigation/native";
  
  const staticImage = require("../../assets/pngwing.com.png");
  
  const Home = () => {
    const navigation = useNavigation()
  
    return (
      <View style={styles.container}>
        <Title title="Fox Teasers" />
        <View style={styles.banner}>
          <Image source={staticImage} style={{ height: 300, width: "100%" }} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Option")}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      height: "100%",
    },
    banner: {
      marginTop: 50,
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