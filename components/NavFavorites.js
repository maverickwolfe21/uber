//Jesus
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

export default function NavFavorites() {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Code Street, London, UK",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "London Eye, London, UK",
    },
  ];

  return (
    <FlatList
      data={data}
      automaticallyAdjustContentInsets={false}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className={"bg-gray-200 h-0.5"} />}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className={"flex-row items-center p-5"}>
          <Icon
            className={"mr-4 rounded-full bg-gray-300 p-3"}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className={"font-semibold text-lg"}>{location}</Text>
            <Text className={"text-gray-500"}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({});
