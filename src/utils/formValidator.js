const generateValidator = fields => {
    return {
        getErrors: objectToBeValidated => {
            const errors = {};
            Object.entries(fields).forEach(([field, getFieldError]) => {
                errors[field] = getFieldError(objectToBeValidated[field]);
            });
            return errors;
        },
        isValid: objectToBeValidated =>
            Object.entries(fields).every(
                ([field, getFieldError]) => !getFieldError(objectToBeValidated[field])
            ),
        fields
    };
};

const getUsernameError = username => {
    if (!username || username.length === 0) {
        return 'username is required';
    }
    if (!/^[a-zA-Z]{6,10}$/.test(username)) {
        return 'Username must be 6~10 characters';
    }
}

const getPasswordError = password => {
    if (!password || password.length === 0) {
        return 'password is required';
    }
    if (!/^\d{6,10}$/.test(password)) {
        return 'Password must be 6~10 numbers';
    }
}
export {
    generateValidator,
    getUsernameError,
    getPasswordError
}