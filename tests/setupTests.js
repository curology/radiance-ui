import { configure } from 'enzyme';
import * as emotion from 'emotion';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'jest-emotion'

configure({ adapter: new Adapter() });
/* eslint-disable no-undef */
expect.addSnapshotSerializer(createSerializer(emotion))
/* eslint-enable no-undef */

