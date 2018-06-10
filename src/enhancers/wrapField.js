import { mapProps } from 'recompose';

/**
 * Enhancer to wrap `Field` with the component provided.
 * @param {*} component
 * @return {*}
 */
const wrapField = component => mapProps(({ name, ...inputProps }) => ({
  component,
  inputProps,
  name,
}));

export default wrapField;
