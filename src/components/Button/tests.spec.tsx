import { Button } from '.';
import renderer from 'react-test-renderer';

describe('button tests', () => {
  it('should render a button with text', () => {
    const component = renderer.create(<Button>Button example</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
