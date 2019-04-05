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
  constructor (props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  componentDidMount () {
    const { fetchMovies } = this.props;

    fetchMovies();
  }

  filterMovies = () => {
    const { movies } = this.props;
    const { search } = this.state;
    const regex = new RegExp(`${search}`, 'gi');

    return movies.filter(movie => movie.title.match(regex));
  }

  render () {
    const { loading, movies } = this.props;
    const filteredMovies = this.filterMovies(movies);

    return (
      <Wrapper>
        <Toolbar
          centerElement="Filmes Starwars"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
            onChangeText: search => this.setState({ search }),
            onSearchClosed: () => this.setState({ search: '' })
          }}
        />
        {loading ? <Loading /> : (
          <FlatList
            data={filteredMovies}
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
