import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import { Flex } from '.';

describe('flex tests', () => {
  it('should render a column based flex container', () => {
    const component = renderer.create(
      <Flex>
        <Text>First line</Text>
        <Text>Second line</Text>
      </Flex>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a row based flex container', () => {
    const component = renderer.create(
      <Flex style={{ flexDirection: 'row' }}>
        <Text>First column</Text>
        <Text>Second column</Text>
      </Flex>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
