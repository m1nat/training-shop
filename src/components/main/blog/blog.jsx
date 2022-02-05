import classes from './blog.module.scss';

const Blog = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.latest}></div>
        <div className={classes.see_all}></div>
      </div>
      <div className={classes.footer}>
        <div className={classes.first_blog}>
          <h5>The Easiest Way to Break</h5>
          <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
        </div>
        <div className={classes.second_blog}>
          <h5>WEDDING SEASON</h5>
          <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
        </div>
        <div className={classes.third_blog}>
          <h5>RECENT FAVORITES ON REPEAT</h5>
          <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor </p>
        </div>
      </div>
    </div>
  )
};

export default Blog;