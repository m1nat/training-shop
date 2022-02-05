import classes from './men-item.module.scss';

const Men_item = ({ img, discont, title, price, previous_price }) => {

  const styleDiscont = {
    width: '53px',
    height: '31px',
    position: 'absolute',
    top: '0px',
    left: '0px',
    backgroundColor: '#E91E63',
    fontFamily: 'Spartan',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '13px',
    textAlign: 'center',
    color: '#FFFFFF',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    paddingTop: '9px'
  }

  let stylePreviousPrice = {
    width: '54px',
    height: '13px',
    position: 'absolute',
    textDecoration: 'line-through',
    fontFamily: 'Spartan',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '13px',
    color: '#121212',
    opacity: '0.4',
    left: '18%',
    top: '4px'
  }

  return (
    <div className={classes.item} >
    <div
      className={classes.item__img}
      style={{
        backgroundImage: `url('${img}')`
      }}>
      <div className={classes.disconts} style={(discont) ? styleDiscont : {}}>{discont}</div>
    </div>
    <div className={classes.item__title}>{title}</div>
    <div className={classes.price__raiting}>
      <div className={classes.price}>{price}</div>
      <div className={classes.rating}>
        <div className={classes.raiting__body}>
          <div className={classes.raiting__active}></div>
          <div className={classes.raiting__items}>
            <input type="radio" value={1} className={classes.raiting__item} name="raiting" id='raiting__item5' />
            <input type="radio" value={2} className={classes.raiting__item} name="raiting" id='raiting__item4' />
            <input type="radio" value={3} className={classes.raiting__item} name="raiting" id='raiting__item3' />
            <input type="radio" value={4} className={classes.raiting__item} name="raiting" id='raiting__item2' />
            <input type="radio" value={5} className={classes.raiting__item} name="raiting" id='raiting__item1' />
          </div>
        </div>
      </div>
      <div style={(previous_price) ? stylePreviousPrice : { display: 'none' }}>{previous_price}</div>
    </div>
  </div>
  )
};

export default Men_item;