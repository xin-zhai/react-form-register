import { generateValidator, getPasswordError, getUsernameError } from "./utils/formValidator";

const fields = {
    username: getUsernameError,
    password: getPasswordError,
};

const loginValidator = generateValidator(fields);

export default loginValidator;