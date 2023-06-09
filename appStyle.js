import { StyleSheet } from "react-native";

export const styles = (formPadding) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "white",
    },

    form: {
      flex: 1,
      paddingTop: formPadding,
      paddingHorizontal: 16,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      backgroundColor: "white",
    },

    absoluteBox: {
      position: "absolute",
      left: 0,
      right: 0,
      top: -60,
      marginHorizontal: "auto",
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

    postImg: {
      width: "100%",
      height: 240,
      borderRadius: 15,
      marginBottom: 8,
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

    iconContainer: {
      position: "absolute",
      right: 20,
      top: 10,
    },

    locationIcon: {
      position: "absolute",
      top: 20,
      left: 0,
    },

    input: {
      height: 45,
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
    locationInput: {
      height: 50,
      marginVertical: 8,
      padding: 10,
      paddingLeft: 40,
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

    deleteBtn: {
      width: 70,
      height: 40,
      marginTop: 150,
      alignSelf: "center",
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F6F6F6",
    },

    profileTitle: {
      fontSize: 30,
      fontWeight: 500,
      paddingTop: 60,
      alignSelf: "center",
    },

    error: {
      color: "red",
    },

    fontMiddle: {
      fontWeight: 500,
      fontSize: 17,
    },
    fontSmall: {
      fontWeight: 400,
      fontSize: 16,
      textDecorationLine: "underline",
    },

    profileInfo: {
      flexDirection: "row",
      alignItems: "center",
      paddingBottom: 16,
    },

    postsWrapper: {
      marginBottom: 60,
    },

    postConteiner: {
      marginBottom: 20,
    },

    postInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 12,
    },

    row: {
      flexDirection: "row",
    },
  });
