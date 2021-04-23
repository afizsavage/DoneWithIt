<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
>>>>>>> 57cac9d616e6be9e0109d24b050f29a6671dac53
}
