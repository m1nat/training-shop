import Main_footer from './main-header/main-header';
import Main_men from './main-men/main-men';
import Main_women from './main-women/main-women';
import Subscribe from './subscribe/subscribe';
import Blog from './blog/blog';

import classes from './main.module.scss';

const Main = ({womenItem, menItem}) => {
  return (
    <div className={classes.wrapper}>
      <Main_women womenItem={womenItem} />
      <Main_men menItem={menItem} />
      <Main_footer />
      <Subscribe />
      <Blog />
    </div>
  )
}

export default Main;