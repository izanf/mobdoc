import React from 'react';
import { ListItem as Item } from 'react-native-material-ui';
import { withNavigation } from 'react-navigation';

const ListItem = ({ data: { item: character }, navigation }) => {
  return (
    <Item
      divider
      centerElement={{
        primaryText: character.name,
      }}
      onPress={() => navigation.navigate('CharacterDetails', { character })}
    />
  );
};

export default withNavigation(ListItem);
