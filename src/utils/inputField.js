import React from 'react';

function doNothing() {}

function InputField(props) {
    const {
        id,
        type,
        error,
        display,
        changeHandler,
        blurHandler,
        ...rest
    } = props;
    const fieldId = id;
    const onChange = changeHandler || doNothing;
    const onBlur = blurHandler || doNothing;

    return (
        <>
            <input
                id={fieldId}
                type={type || 'text'}
                onChange={event => onChange(event)}
                onBlur={event => onBlur(event)}
                {...rest}
            />{' '}
            {error && <span className="error">{error}</span>}
        </>
    );
}

export default InputField;
