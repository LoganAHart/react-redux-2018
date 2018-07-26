import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Jest automagically looks for setupTests.js in the src dir and runs it
Enzyme.configure({ adapter: new Adapter() });
