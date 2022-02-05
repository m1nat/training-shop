import classes from './footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.title}></div>
        <div className={classes.control}>
          <input type="email" name="" id="" className={classes.footer_inp} placeholder='Enter your email' />
          <button>JOIN US</button>
        </div>
        <div className={classes.networks}>
          <div className={classes.facebook}></div>
          <div className={classes.twiter}></div>
          <div className={classes.instagram}></div>
          <div className={classes.something}></div>
        </div>
      </div>
      <div className={classes.body}>
        <div className={classes.categories}>
          <ul>
            <li><strong>CATEGORIES</strong></li>
            <li>Men</li>
            <li>Women</li>
            <li>Accessories</li>
            <li>Beauty</li>
          </ul>
        </div>
        <div className={classes.information}>
          <ul>
            <li><strong>INFORMATION</strong></li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className={classes.links}>
          <ul>
            <li><strong>USEFUL LINKS</strong></li>
            <li>Terms & Conditions   </li>
            <li>Returns & Exchanges</li>
            <li>Shipping & Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={classes.contact}>
          <ul>
            <li><strong>CONTACT US</strong></li>
            <li className={classes.country}>
              <div className={classes.nav}></div>
              <div className={classes.name}>Belarus, Gomel, Lange 17</div>
            </li>
            <li className={classes.phone}>
              <div className={classes.img}></div>
              <div className={classes.num}>+375 29 100 20 30</div>
            </li>
            <li className={classes.mode}>
              <div className={classes.img}></div>
              <div className={classes.text}> All week 24/7 </div>
            </li>
            <li className={classes.mail}>
              <div className={classes.img}></div>
              <div className={classes.text}>info@clevertec.ru</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.left_block}>Copyright © 2022 Educational project</div>
        <div className={classes.right_block}>Clevertec.ru/training</div>
      </div>
    </div>
  )
};

export default Footer;