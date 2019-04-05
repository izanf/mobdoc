import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toolbar } from 'react-native-material-ui';
import styled from 'styled-components/native';

import { fetchMovies } from './../../reducers/movies';

import ListItem from './ListItem';
import Loading from './../../components/Loading';

const Wrapper = styled.View`
flex: 1;
`;

class Movies extends Component {
  componentDidMount () {
    const { fetchMovies } = this.props;

    fetchMovies();
  }

  render () {
    const { loading, movies } = this.props;

    return (
      <Wrapper>
        <Toolbar
          centerElement="Filmes Starwars"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
          style={{ backgroundColor: '#1D3062' }}
        />
        {loading ? <Loading /> : (
          <FlatList
            data={movies}
            renderItem={item => <ListItem data={item} />}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
      </Wrapper>
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
