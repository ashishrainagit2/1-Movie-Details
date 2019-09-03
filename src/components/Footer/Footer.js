import React from 'react';
import classes from './Footer.module.css';
import Simpleheading from '../Simpleheading/Simpleheading';
import Simplelink from '../Simplelink/Simplelink';


const footer = (props) => {
    return (
        <div className={classes.Footer}>

                <div>

                </div>
                <div>
                    <div>
                        <Simpleheading name="MORE PAGES"/>
                        <Simplelink name="contact-us"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                    </div>
                    <div>
                        <Simpleheading name="Heading"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                    </div>
                
                </div>
                
                <div>
                    <div>
                        <Simpleheading name="Heading"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                    </div>
                    <div>
                        <Simpleheading name="Heading"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                        <Simplelink name="hello"/>
                    </div>
                </div>

        </div>
    )
}

export default footer;