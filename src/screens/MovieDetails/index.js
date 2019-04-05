import React, { Component } from 'React';
import { Toolbar } from 'react-native-material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { fetchCharacters, resetCharacters } from './../../reducers/characters';

import Loading from './../../components/Loading';
import ListItem from './ListItem';

const Wrapper = styled.View`
flex: 1;
`;

const Content = styled.ScrollView`
flex: 1;
`;

const Details = styled.View`
padding: 0 15px;
`;

const Group = styled.View`
flex-direction: row;
`;

const Item = styled.Text`
font-family: 'Roboto-Bold';
`;

const Value = styled(Item)`
font-family: 'Roboto-Regular';
`;

const Title = styled(Item)`
font-size: 18px;
text-align: center;
padding: 20px 0 10px;
`;

const FlatList = styled.FlatList``;

class MovieDetails extends Component {
  componentDidMount () {
    const { navigation, fetchCharacters } = this.props;
    const { characters } = navigation.getParam('movie');

    fetchCharacters(characters);
  }

  goBack = () => {
    const { navigation, resetCharacters } = this.props;

    resetCharacters();
    navigation.goBack();
  }

  formatDate = date =>
    Intl.DateTimeFormat('pt-BR').format(new Date(date))

  render () {
    const { loading, navigation, characters } = this.props;
    const { title, episode_id, director, producer, release_date, opening_crawl } = navigation.getParam('movie');

    return (
      <Wrapper>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.goBack()}
          centerElement={`Filme: ${title}`}
        />
        <Content>
          <Details>
            <Title>Detalhes</Title>
            <Group>
              <Item>Episodio número: </Item><Value>{episode_id}</Value>
            </Group>
            <Group>
              <Item>Diretor: </Item><Value>{director}</Value>
            </Group>
            <Group>
              <Item>Produtores: </Item><Value>{producer}</Value>
            </Group>
            <Group>
              <Item>Data de lançamento: </Item><Value>{this.formatDate(release_date)}</Value>
            </Group>
            <Group>
              <Item>Descrição: </Item><Value>{opening_crawl}</Value>
            </Group>
          </Details>
          <Title>Personagens</Title>
          {loading ? <Loading /> : (
            <FlatList
              data={characters}
              renderItem={item => <ListItem data={item} />}
              keyExtractor={(_, index) => index.toString()}
            />
          )}
        </Content>
      </Wrapper>
    );
  }
}



export default connect(state => ({
  loading: state.characters.loading,
  characters: state.characters.data
}),
dispatch => bindActionCreators({
  fetchCharacters, resetCharacters
}, dispatch))(MovieDetails);
