import { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { chooseAvatar } from "../utils/imagePicker";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function MobCamera() {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [photoUri, setPhotoUri] = useState(null);

  const permission = Camera.useCameraPermissions();

  if (permission === null) {
    return <View />;
  }
  if (!permission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      {!photoUri ? (
        <Camera style={styles.photoView} type={type} ref={setCameraRef}>
          <TouchableOpacity
            style={styles.takePhotoWrapper}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
                setPhotoUri(uri);
              }
            }}
          >
            <Ionicons name="md-camera" style={styles.cameraIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.absolute}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <MaterialIcons name="flip-camera-android" size={30} color="blue" />
          </TouchableOpacity>
        </Camera>
      ) : (
        <View style={styles.photoView}>
          <Image style={styles.photo} source={{ uri: photoUri }} />
          <View style={styles.absolute}>
            <TouchableOpacity
              style={styles.backToCamera}
              onPress={() => setPhotoUri(null)}
            >
              <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {photoUri ? (
        <TouchableOpacity onPress={() => chooseAvatar({ setPhotoUri })}>
          <Text style={styles.editPhotoText}>Редагувати фото</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => chooseAvatar({ setPhotoUri })}>
          <Text style={styles.editPhotoText}>Завантажте фото</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  photoView: {
    height: 240,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },

  photo: {
    width: "100%",
    height: "100%",
  },

  takePhotoWrapper: {
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff4d",
  },

  backToCamera: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000006c",
  },

  cameraIcon: {
    fontSize: 28,
    color: "#BDBDBD",
  },

  editPhotoText: {
    color: "#BDBDBD",
    fontSize: 18,
    marginVertical: 10,
  },

  absolute: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
  },
});
