import { createStackNavigator, createAppContainer } from "react-navigation";

import Movies from './screens/Movies';
import MovieDetails from './screens/MovieDetails';
import CharacterDetails from './screens/CharacterDetails';

const AppNavigator = createStackNavigator({
  Movies: {
    screen: Movies,
    navigationOptions: {
      header: null
    }
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: {
      header: null
    }
  },
  CharacterDetails: {
    screen: CharacterDetails,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);
