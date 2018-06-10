import { Field } from 'redux-form';

import wrapField from '../../enhancers/wrapField';
import TextInput from './TextInput';

export default wrapField(TextInput)(Field);
