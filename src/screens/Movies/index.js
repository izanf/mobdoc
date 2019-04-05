import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toolbar } from 'react-native-material-ui';

import { fetchMovies } from './../../reducers/movies';

import ListItem from './ListItem';

class Movies extends Component {
  componentDidMount () {
    const { fetchMovies } = this.props;

    fetchMovies();
  }

  render () {
    const { movies } = this.props;

    return (
      <View>
        <Toolbar
          centerElement="Filmes Starwars"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
          style={{ backgroundColor: '#1D3062' }}
        />
        <FlatList
          data={movies}
          renderItem={item => <ListItem data={item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  }
}

export default connect(state => ({
  loading: state.movies.loading,
  movies: state.movies.data
}),
dispatch => bindActionCreators({
  fetchMovies
}, dispatch))(Movies);
