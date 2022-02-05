import classes from './main-header.module.scss';

const Main_footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.season}>
        <div className={classes.up_text}></div>
        <div className={classes.down_text}></div>
      </div>
      <div className={classes.sale}>
        <div className={classes.sale_up_text}></div>
        <div className={classes.get50}></div>
      </div>
    </div>
  )
};

export default Main_footer;