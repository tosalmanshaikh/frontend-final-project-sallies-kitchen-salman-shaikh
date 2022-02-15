import React from 'react';
import classes from "./Banner.module.css";

function Banner({title, sub, children}) {
    return (
        <>
            <div className={classes.Banner}>
                <h2 className={classes.Title}>{title}</h2>
                <p className={classes.Sub}>{sub}</p>
                {children}
            </div>
        </>
    );
}

export default Banner;
