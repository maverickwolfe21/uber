import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import NavOptions from "../components/NavOptions";
import NavFavorites from "../components/NavFavorites";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const key = process.env.GOOGLE_MAPS_APIKEY;

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View className="bg-white h-full">
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key,
            language: "en",
          }}
          placeholder="Where from?"
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
