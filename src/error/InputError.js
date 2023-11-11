import ERROR_MESSAGE from '../constants/ErrorMessage';

class InputError extends Error {
  constructor(message) {
    super(ERROR_MESSAGE.PREFIX + message);
    this.name = 'InputError';
  }
}
export default InputError;
