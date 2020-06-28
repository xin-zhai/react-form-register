export const ERRORS = {
  username: {
    message: 'Username must be 6~10 characters',
    regex: /^[a-zA-Z]{6,10}$/
  },
  password: {
    message: 'Password must be 6~10 numbers',
    regex: /^\d{6,10}$/
  }
};
