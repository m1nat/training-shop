import classes from './services-header.module.scss';

const Services = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.shopping}>
        <div className={classes.shopping__img}></div>
        <div className={classes.shopping__discriptions}>
          <h5>FREE SHIPPING</h5>
          <p>On all UA order or order above $100</p>
        </div>
      </div>
      <div className={classes.return}>
        <div className={classes.return__img}></div>
        <div className={classes.return__discriptions}>
          <h5>30 DAYS RETURN</h5>
          <p>Simply return it within 30 days for an exchange</p>
        </div>
      </div>
      <div className={classes.support}>
        <div className={classes.support__img}></div>
        <div className={classes.support__discriptions}>
          <h5>SUPPORT 24/7</h5>
          <p>Contact us 24 hours a day, 7 days a week</p>
        </div>
      </div>
    </div>
  )
};

export default Services;
