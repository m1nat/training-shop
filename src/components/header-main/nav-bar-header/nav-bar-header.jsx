import classes from './nav-bar-header.module.scss';

const Nav_bar_header = () => {
  return (
    <div className={classes.wrapper_nav}>
      <div className={classes.contacts}>
        <div className={classes.contact_item}>
          <div className={classes.phone}>
            <div className={classes.img}></div>
            <div className={classes.num}>+375 29 100 20 30</div>
          </div>
          <div className={classes.map}>
            <div className={classes.img_map}></div>
            <div className={classes.country}>Belarus, Gomel, Lange 17</div>
          </div>
          <div className={classes.operating_mode}>
            <div className={classes.operating_mode_img}></div>
            <div className={classes.operating_mode_text}>All week 24/7</div>
          </div>
        </div>
        <div className={classes.networks}>
          <div className={classes.facebook}></div>
          <div className={classes.twiter}></div>
          <div className={classes.instagram}></div>
          <div className={classes.something}></div>
        </div>
      </div>
      <div className={classes.nav}>
        <div className={classes.logo}></div>
        <div className={classes.referenses}>
          <a href="">About Us</a>
          <a href="">Women</a>
          <a href="">Men</a>
          <a href="">Beauty</a>
          <a href="">Accessories</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
        <div className={classes.buttons}>
          <div className={classes.zoom}></div>
          <div className={classes.earth}></div>
          <div className={classes.profile}>
            <div className={classes.head}></div>
            <div className={classes.body_profile}></div>
          </div>
          <div className={classes.cart}>
            <div className={classes.countity}><p>2</p></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Nav_bar_header;