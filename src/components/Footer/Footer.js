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
                        <Simplelink name="Register"/>
                        <Simplelink name="Error Boundary"/>
                        <Simplelink name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                    </div>
                    <div>
                        <Simpleheading name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                    </div>
                
                </div>
                
                <div>
                    <div>
                        <Simpleheading name="Heading"/>
                        <Simplelink name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                    </div>
                    <div>
                        <Simpleheading name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsum"/>
                        <Simplelink name="Lorem Ipsumo"/>
                    </div>
                </div>

        </div>
    )
}

export default footer;