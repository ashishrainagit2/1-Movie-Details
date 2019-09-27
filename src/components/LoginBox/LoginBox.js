import React from 'react';
import classes from './LoginBox.module.css';

const loginbox = () => {
    return (
        <div className={classes.Loginbox}>
            Please login below!

            <p>Facebook Login</p>
            <p>Google Login</p>
            <p>Username and Password Login</p>
        </div>
    )
}

export default loginbox;