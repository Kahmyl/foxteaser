import { Button } from "@rneui/themed";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Subtitle from "../components/Subtitle";
import { MaterialIcon } from "../shared/Icons/MaterialIcons";
import { addResultType, loadQuiz } from "../store/actions";
import { StackNavigationType } from "../types";

const options = ["optionA", "optionB", "optionC", "optionD"];

const Quiz = ({ route, navigation }: StackNavigationType) => {
  const { categories, difficulty } = route.params;
  const [selectedOption, setSelectedOption] = useState("");
  const [answer, setAnswer] = useState("");
  const [quizId, setQuizId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const getQuiz = useAppSelector((store) => store.quiz.questions);
  const getResult = useAppSelector((store) => store.quiz.result);

  const handleBack = () => {
    page === 1 ? navigation.goBack() : setPage(page - 1);
  };

  const handleSelect = (option: string, correctAnswer: string, id: string) => {
    setSelectedOption(option);
    setAnswer(correctAnswer);
    setQuizId(id);
  };

  const handleSelected = (option: string, id: string): string => {
    const existingIndex = getResult.findIndex(
      (item: any) => item.quizId === id
    );
    if (existingIndex >= 0) {
      const selectedOption = getResult.map((item: any) => {
        if (item.quizId === id) {
          return selectedOption;
        }
      });
      console.log(selectedOption);
      return selectedOption;
    }
    return "";
  };

  const handlePage = async () => {
    const grade = selectedOption === answer ? "correct" : "wrong";
    await dispatch(addResultType({ selectedOption, answer, grade, quizId }));
    page < 6 ? setPage(page + 1) : navigation.navigate("Home");
  };

  const handleQuiz = useCallback(async () => {
    setError("");
    try {
      await dispatch(loadQuiz(categories, difficulty));
    } catch (error) {
      setLoading(false);
      setError("An error occured");
      console.log(error);
    }
  }, [dispatch, setLoading, setError]);

  useEffect(() => {
    setLoading(true);
    handleQuiz().then(() => {
      setLoading(false);
    });
  }, [dispatch, handleQuiz]);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occured.</Text>
        <Button color="secondary" title="Try again" onPress={handleQuiz} />
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <>
      {getQuiz && (
        <View style={styles.container}>
          <Subtitle handleBack={handleBack} title="Quiz" />
          <View style={styles.paginate}>
            <Text style={styles.paginateText}>{page}/5</Text>
          </View>
          {getQuiz.map(
            (quiz: typeof getQuiz, index: number) =>
              page === index + 1 && (
                <View style={styles.wrapper} key={index}>
                  <View style={styles.top}>
                    <Text style={styles.question}>Q. {quiz.question}</Text>
                  </View>
                  <View style={styles.options}>
                    {quiz.incorrectAnswers.map(
                      (option: string, index: number) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() =>
                            handleSelect(option, quiz.correctAnswer, quiz.id)
                          }
                          style={
                            selectedOption === option ||
                            handleSelected(option, quiz.id) === option
                              ? styles.selectedOptionButton
                              : styles.optionButton
                          }
                        >
                          <Text style={styles.optionText}>{option}</Text>
                          {selectedOption === option && (
                            <MaterialIcon
                              color="#ffffff"
                              size={24}
                              name="check-circle-outline"
                            />
                          )}
                        </TouchableOpacity>
                      )
                    )}
                  </View>
                </View>
              )
          )}
          <TouchableOpacity style={styles.button} onPress={handlePage}>
            <Text style={styles.buttonText}>
              {page < 5 ? "Next" : "Submit Quiz"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  paginate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  paginateText: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Montserrat_400Regular",
  },
  wrapper: {
    flex: 1,
  },
  top: {
    marginVertical: 16,
  },
  question: {
    fontSize: 28,
    fontFamily: "Montserrat_400Regular",
  },
  options: {
    marginVertical: 16,
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 6,
    backgroundColor: "#5072A7",
    borderRadius: 12,
  },
  selectedOptionButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 6,
    backgroundColor: "#00308F",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionText: {
    fontSize: 18,
    color: "#ffffff",
    fontFamily: "Montserrat_400Regular",
    maxWidth: "90%",
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

  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: "100%",
  },
});
