
import React from 'react';
import classes from './Slide.module.css';

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className={classes.slide} style={styles}></div>
}

export default Slide
