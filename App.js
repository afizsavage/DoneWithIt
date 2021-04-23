import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions            ";

import Screen from "./app/components/Screen";
import AppButton from "./app/components/AppButton";
import { Image } from "react-native";

export default function App() {
  const [ImageUri, setImageUri] = useState(initialState);

  const requestPermision = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermision();
  }, []);

  const selectImage = async (params) => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image");
    }
  };

  return (
    <Screen>
      <AppButton title="Select Image" onPress={selectImage} />
      <Image source={{ uri: ImageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
