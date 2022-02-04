import React from 'react'
import classes from './ContactForm.module.css'

function ContactForm({children}) {
    return (
        <div className={classes.Container}>
            <form className={classes.FormArea} action="">
                {children}
            </form>
        </div>
    );
}

export default ContactForm;
