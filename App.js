import "react-native-gesture-handler";
import React from "react";
import { AppLoading } from "expo";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
// import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Movies from "./src/pages/movie";
import Trailers from "./src/pages/trailer";
import PlayMovie from "./src/pages/play-movie";
import GenreMovies from "./src/pages/movie-genre";
import MovieDetails from "./src/pages/movie-details";
import SettingsScreen from "./src/pages/SettingsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      {/* {/* <Tab.Screen name="Feed" component={Feed} /> */}
      <Tab.Screen name="Animes" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, backgroundColor: "black" }}
      source={require("./Logo.png")}
    />
  );
}
export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  loadFonts() {
    return Font.loadAsync({
      Roboto: require("./src/assets/fonts/Roboto-Regular.ttf"),
      "Roboto Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
      "Roboto Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    });
  }

  // componentDidMount(){
  // 	console.log(1);
  // }

  render() {
    if (!this.state.isReady)
      return (
        <AppLoading
          startAsync={this.loadFonts}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    else {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Movies"
              component={Movies}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
            <Stack.Screen
              name="Details"
              component={MovieDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="List"
              component={GenreMovies}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Trailer"
              component={Trailers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Movie"
              component={PlayMovie}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}
