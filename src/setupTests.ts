import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// https://medium.com/@leonardobrunolima/react-tips-testing-react-component-with-jest-enzyme-basics-38a15d5dd72a
configure({ adapter: new Adapter() });
