import classes from './subscribe.module.scss';

const Subscribe = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.window}>
        <div className={classes.special_ofer}></div>
        <div className={classes.get10}></div>
        <input type="email" name="" className={classes.inp_subscribe} placeholder='Enter your email'/>
        <button className={classes.btn_subscibe}>Subscribe</button>
      </div>
    </div>
  )
}

export default Subscribe;