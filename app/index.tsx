import GoalList from "@/components/GoalList";
import FieldInput from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  FlatList,
  GestureResponderEvent,
  StyleSheet,
  View,
  Modal,
  Image,
  ImageBackground,
  Alert,
  SafeAreaView,
  Dimensions,
  useWindowDimensions,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

export default function Index() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");
  const [score, setScore] = useState<string>("");
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [courseGoal, setCourseGoal] = useState<
    Array<{ text: string; key: string }>
  >([]);
  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };
  const goalDeleteHandler = (key: string) => {
    if (courseGoal?.length) {
      setCourseGoal((prev) => prev.filter((goal) => goal.key !== key));
      Alert.alert("Goal Deleted", "", [{ style: "cancel" }]);
    }
  };
  const addGoalHandler = (e: GestureResponderEvent) => {
    setCourseGoal((prev) => {
      return [
        ...prev,
        { text: enteredGoalText, key: new Date().toISOString() },
      ];
    });
    setEnteredGoalText("");
    setModalIsVisible(!modalIsVisible);
  };

  // const { width, height } = useWindowDimensions();

  // console.log("width", width, height, "height");

  const [show, setShow] = useState<"SPLASH" | "WElCOME">("SPLASH");
  useEffect(() => {
    setTimeout(() => {
      setShow("WElCOME");
    }, 1000);
  }, []);

  return (
    <>
      {show === "SPLASH" && (
        <View style={[styles.splashScreenBackground]}>
          <Image source={require("@/assets/images/logo.png")} />
        </View>
      )}
      {show === "WElCOME" && (
        <LinearGradient
          colors={["#4e0329", "#ddb52f"]}
          style={styles.rootStyle}
        >
          <ImageBackground
            source={require("@/assets/images/flight.jpg")}
            resizeMode="cover"
            style={styles.appContainer}
            imageStyle={{ opacity: 0.15 }}
          >
            <ScrollView>
              <KeyboardAvoidingView
                style={styles.rootStyle}
                behavior="position"
              >
                <SafeAreaView style={styles.appContainer}>
                  <Button
                    color={"#8b59d1"}
                    onPress={() => {
                      setModalIsVisible(!modalIsVisible);
                    }}
                    title="Add New Goals"
                  />

                  <Modal visible={modalIsVisible} animationType="slide">
                    <View style={styles.inputContainer}>
                      <Image
                        style={styles.image}
                        source={require("@/assets/images/favicon.png")}
                      />
                      <FieldInput
                        onChangeText={goalInputHandler}
                        placeholder="Your course goals"
                        value={enteredGoalText}
                      />
                      <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                          <Button
                            onPress={() => {
                              setModalIsVisible(!modalIsVisible);
                            }}
                            title="Cancel"
                            color={"#f31282"}
                          />
                        </View>
                        <View style={styles.button}>
                          <Button
                            color={"#b180f0"}
                            onPress={addGoalHandler}
                            title="Add Goals"
                          />
                        </View>
                      </View>
                    </View>
                  </Modal>
                  {/* <View style={styles.goalsContainer}>
                <FlatList
                  data={courseGoal}
                  renderItem={(itemData) => {
                    return (
                      <GoalList
                        handleDelete={() => {
                          goalDeleteHandler(itemData?.item?.key);
                        }}
                        goal={itemData.item.text}
                      />
                    );
                  }}
                  keyExtractor={(item, index) => {
                    return item.key;
                  }}
                  alwaysBounceVertical={false}
                ></FlatList>
              </View> */}
                  <View style={styles.secondContainer}>
                    <FieldInput
                      onChangeText={(e) => setScore(e)}
                      placeholder="Enter Score "
                      value={score}
                      style={styles.textInput}
                      keyboardType="numeric"
                    />
                    <View style={styles.scoreButtonContainer}>
                      <View style={styles.buttonSecondContainer}>
                        <PrimaryButton style={{ backgroundColor: "red" }}>
                          click me <Ionicons name="remove" />
                        </PrimaryButton>
                      </View>
                      <View style={styles.buttonSecondContainer}>
                        <PrimaryButton>Click Me Too</PrimaryButton>
                      </View>
                    </View>
                  </View>
                </SafeAreaView>
              </KeyboardAvoidingView>
            </ScrollView>
          </ImageBackground>
        </LinearGradient>
      )}
    </>
  );
}
// Get dimension
const deviceWidth = Dimensions.get("window").width;

// console.log(getDimensions);

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  appContainer: {
    color: "black",
    gap: 10,
    flex: 1,
    paddingHorizontal: 15,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    flex: 1,
    backgroundColor: "#311b6b",
  },
  goalsContainer: {
    // flex: 3,
    height: 300,
    gap: 2,
    paddingVertical: deviceWidth < 380 ? 5 : 10,
    borderColor: "#cccccc",
    borderTopWidth: 1,
    marginTop: 10,
    overflow: "scroll",
  },
  goalItem: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5c0acc",
    color: "#FFFFFF",
    marginTop: 10,
  },
  goalText: {
    color: "#FFFFFF",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  buttonContainer: {
    display: "flex",
    gap: 4,
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  scoreButtonContainer: {
    flexDirection: "row",
  },
  textInput: {
    borderColor: "#cccccc",
    borderTopWidth: 1,
    width: "100%",

    // backgroundColor: Platform.select({ ios: "red", android: "" }),
    // height: 100,
  },
  secondContainer: {
    // backgroundColor: "green",
    flex: 2,
    // flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center",
  },
  buttonSecondContainer: {
    flex: 1,
  },
  splashScreenBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0057b7",
  },
});
