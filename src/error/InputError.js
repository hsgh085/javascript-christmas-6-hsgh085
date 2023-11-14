import ERROR_MESSAGE from '../constants/ErrorMessage';

class InputError extends Error {
  constructor(message) {
    super(ERROR_MESSAGE.PREFIX + message + ERROR_MESSAGE.SUFFIX);
    this.name = 'InputError';
  }
}
export default InputError;
