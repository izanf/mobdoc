import React, { Component } from 'React';
import { Toolbar } from 'react-native-material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { fetchCharacter } from './../../reducers/characters';

const Wrapper = styled.View`
flex: 1;
`;

const Content = styled.ScrollView`
padding: 0 15px;
flex: 1;
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

const Characters = styled.View`
margin-bottom: 15px;
`;

const TouchCharacter = styled.TouchableHighlight``;

const Character = styled(Value)``;

class MovieDetails extends Component {
  componentDidMount () {
    const { navigation, fetchCharacter } = this.props;
    const { characters } = navigation.getParam('movie');

    characters.map(item => fetchCharacter(item));
  }

  render () {
    const { navigation, characters } = this.props;
    const { title, episode_id, director, producer, release_date, opening_crawl } = navigation.getParam('movie');

    return (
      <Wrapper>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => navigation.goBack()}
          centerElement={`Filme: ${title}`}
          style={{ backgroundColor: '#1D3062' }}
        />
        <Content>
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
            <Item>Data de lançamento: </Item><Value>{release_date}</Value>
          </Group>
          <Group>
            <Item>Descrição: </Item><Value>{opening_crawl}</Value>
          </Group>
          <Title>Personagens</Title>
          <Characters>
            {characters.map((character) => (
              <TouchCharacter
                onPress={() => navigation.navigate('CharacterDetails', { character })}
              >
                <Character>{character.name}</Character>
              </TouchCharacter>
            ))}
          </Characters>
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
  fetchCharacter
}, dispatch))(MovieDetails);
