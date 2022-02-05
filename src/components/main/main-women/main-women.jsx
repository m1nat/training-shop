import Women_item from './women-items/women-items';

import classes from './main-women.module.scss';

const Main_women = ({ womenItem }) => {


  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.logo}></div>
        <div className={classes.ref}>
          <a href="">
            NEW ARRIVALS
          </a>
          <a href="">
            SPECIALS
          </a>
          <a href="">
            BESTSELLERS
          </a>
          <a href="">
            MOST VIEWED
          </a>
          <a href="">
            FEATURED PRODUCTS
          </a>
        </div>
      </div>
      <div className={classes.women__items}>
        {womenItem.map(item => <Women_item key={item.id} womenItem={womenItem} img={item.img} discont={item.discont} title={item.title} price={item.price} previous_price={item.previous_price} />)}
      </div>
      <div className={classes.view_all}>
        <div className={classes.btn}></div>
      </div>
    </div>
  )
};

export default Main_women;

