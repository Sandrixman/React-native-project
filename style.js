import { StyleSheet } from "react-native";

export const styles = (keyboardAvoiding, formPadding) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 32,
      backgroundColor: "white",
      height: "100%",
      flex: 1,
    },
    keyboardAvoidingContainer: {
      flex: keyboardAvoiding,
    },
    form: {
      flex: 1,
      paddingTop: formPadding,
      paddingHorizontal: 16,
      backgroundColor: "white",
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },
    absoluteBox: {
      position: "absolute",
      left: 0,
      right: 0,
      marginHorizontal: "auto",
      top: -60,
    },
    avatar: {
      alignSelf: "center",
      width: 120,
      height: 120,
      borderRadius: 15,
      backgroundColor: "#F6F6F6",
    },
    comentsAvatar: {
      width: 70,
      height: 70,
      borderRadius: 15,
      backgroundColor: "#F6F6F6",
    },
    cameraBox: {
      width: "100%",
      height: 240,
      borderRadius: 15,
    },

    setImg: {
      fontSize: 24,
      position: "absolute",
      bottom: 15,
      right: 125,
    },
    title: {
      textAlign: "center",
      fontSize: 30,
      marginVertical: 20,
    },
    input: {
      height: 50,
      marginVertical: 8,
      padding: 10,
      borderColor: "#F6F6F6",
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "#F6F6F6",
    },
    postInput: {
      height: 50,
      marginVertical: 8,
      padding: 10,
      borderColor: "#F6F6F6",
      borderBottomWidth: 1,
    },
    button: {
      width: "100%",
      height: 50,
      borderRadius: 50,
      marginTop: 30,
      backgroundColor: "#FF6C00",
      justifyContent: "center",
    },
    disabledButton: {
      backgroundColor: "#F6F6F6",
    },
    btnText: {
      color: "white",
      textAlign: "center",
    },
    disabledText: {
      color: "grey",
    },
    addBtn: {
      width: 70,
      height: 40,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
    },

    profileTitle: {
      fontSize: 30,
      fontWeight: 500,
      paddingTop: 60,
      alignSelf: "center",
    },
  });
