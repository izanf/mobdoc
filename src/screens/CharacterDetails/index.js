import React from 'react';
import styled from 'styled-components/native';
import { Toolbar } from 'react-native-material-ui';

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

const CharacterDetails = ({ navigation }) => {
  const { name, birth_year, eye_color, gender, hair_color, height, mass, skin_color } = navigation.getParam('character');

  return (
    <Wrapper>
      <Toolbar
        leftElement="arrow-back"
        onLeftElementPress={() => navigation.goBack()}
        centerElement={`Personagem: ${name}`}
        style={{ backgroundColor: '#1D3062' }}
      />
      <Content>
        <Title>Detalhes</Title>
        <Group>
          <Item>Ano de nascimento: </Item><Value>{birth_year}</Value>
        </Group>
        <Group>
          <Item>Cor dos olhos: </Item><Value>{eye_color}</Value>
        </Group>
        <Group>
          <Item>Sexo: </Item><Value>{gender}</Value>
        </Group>
        <Group>
          <Item>Altura: </Item><Value>{height}</Value>
        </Group>
        <Group>
          <Item>Cor do cabelo: </Item><Value>{hair_color}</Value>
        </Group>
        <Group>
          <Item>Peso: </Item><Value>{`${mass}kg`}</Value>
        </Group>
        <Group>
          <Item>Cor: </Item><Value>{skin_color}</Value>
        </Group>
      </Content>
    </Wrapper>
  );
};

export default CharacterDetails;
