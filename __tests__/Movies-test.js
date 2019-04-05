import React from 'react';
import Movies from './../src/screens/Movies';

import renderer from 'react-test-renderer';

test('Movies renders correctly', () => {
  const tree = renderer.create(<Movies />).toJSON();
  expect(tree).toMatchSnapshot();
});