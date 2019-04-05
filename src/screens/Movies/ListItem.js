import React from 'react';
import { ListItem as Wrapper } from 'react-native-material-ui';
import { withNavigation } from 'react-navigation';

const ListItem = ({ data: { item: movie }, navigation }) => {
  return (
    <Wrapper
      key={movie['episode_id']}
      divider
      centerElement={{
        primaryText: movie.title,
      }}
      onPress={() => navigation.navigate('MovieDetails', { movie })}
    />
  );
};

export default withNavigation(ListItem);
