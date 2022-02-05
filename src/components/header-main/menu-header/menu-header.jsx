import classes from './menu-header.module.scss';

const Menu_Header = () => {
  return (
    <div className={classes.wrapper_menu_header}>
      <div className={classes.banner}>
        <div className={classes.text_banner}>
          <h5>BANNER</h5>
          <h3>YOUR TITLE TEXT</h3>
          <div className={classes.slide_left}></div>
          <div className={classes.slide_right}></div>
        </div>
      </div>
      <div className={classes.range}>
        <div className={classes.sex}>
          <div className={classes.women}>
            <div className={classes.women_btn}>
              <p>
                WOMEN
              </p>
            </div>
          </div>
          <div className={classes.men}>
            <div className={classes.men__btn}>
              <p>
                MEN
              </p>
            </div>
          </div>
        </div>
        <div className={classes.accessories}>
          <p>
          accessories
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu_Header;