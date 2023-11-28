import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const Home = ({}) => {
  return (
    <SafeAreaView>
        <Text>Can you beat the odds?</Text>
      <View>
        <Text>Match History</Text>
        <Text>Play a round to see Results!</Text>
      </View>
      <Text>Welcome (Name)</Text>
    </SafeAreaView>
  );
};

export default Home;
