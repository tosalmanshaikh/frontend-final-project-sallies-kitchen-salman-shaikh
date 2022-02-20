import React from 'react';
import './Banner.css';

function Banner({title, sub, children}) {
    return (
        <>
            <div className="Banner">
                <h2 className="Title">{title}</h2>
                <p className="Sub">{sub}</p>
                {children}
            </div>
        </>
    );
}

export default Banner;
