/*// === Text Field: used in the log in and log out  ===*/

import React from 'react';
import './TextField.css';

function TextField({id, title, type, errors, register, name, validationRules, value, onChange, placeholder}) {

    return (
        <>
            <label htmlFor={id}>{title}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                {...register(name, validationRules)}
                className={errors[name] && "error"}
                value={value}
                onChange={onChange}
            />
            {errors[name] && <p className="error-message">{errors[name].message} </p>}
        </>
    );
}

export default TextField;
