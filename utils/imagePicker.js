import * as ImagePicker from "expo-image-picker";

export const chooseAvatar = async ({ setPhotoUri }) => {
  const permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (permissionResult.granted === false) {
    alert("Дозвіл на доступ до фото було відхилено.");
    return;
  }

  const pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (!pickerResult.canceled && pickerResult.assets.length > 0) {
    const selectedAsset = pickerResult.assets[0];
    setPhotoUri(selectedAsset.uri);
  }
};
