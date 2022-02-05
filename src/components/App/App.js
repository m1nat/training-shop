import { useState } from 'react';

import Footer from '../footer/footer';
import Header_main from '../header-main/header-main';
import Main from '../main/main';

import './style.scss';

function App() {

  const [womenItem, setWomenItem] = useState([
    { id: 1, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: '' },
    { id: 2, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: '', discont: '50%', previous_price: '$60' },
    { id: 3, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: '' },
    { id: 4, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/womenitem_4.jpg?alt=media&token=88f2981d-e8aa-40e2-b25e-020438973a6e' },
    { id: 5, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/womenitem_5.jpg?alt=media&token=19f18318-3ddd-421c-9fe9-211bc321ace8' },
    { id: 6, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/womenitem_6.jpg?alt=media&token=b9db29a5-b165-46c7-8112-e62171caa458' },
    { id: 7, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/womenitem_7.jpg?alt=media&token=f6351c67-3490-4cc8-9548-ed578a49f3b4' },
    { id: 8, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: '' },
  ]);

  const [menItem, setMenItem] = useState([
    { id: 1, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/men_item%2Fmen1.jpg?alt=media&token=e270c5e6-9970-43ff-9031-e6c330d9577d' },
    { id: 2, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/men_item%2Fmen2.jpg?alt=media&token=ccc4fa8d-984f-4f38-b38c-4d38d4691bb1' },
    { id: 3, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: '' },
    { id: 4, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: '' },
    { id: 5, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/men_item%2Fmen5.jpg?alt=media&token=c7862841-9e08-4c14-b1ed-7578c88db3ff' },
    { id: 6, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/men_item%2Fmen6.jpg?alt=media&token=9ce24b8e-a7d8-4942-a2e3-7551fd33c96e' },
    { id: 7, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: 'https://firebasestorage.googleapis.com/v0/b/minilab-badae.appspot.com/o/men_item%2Fmen7.jpg?alt=media&token=c2824f73-2a49-4c4b-966b-f8aec72fab38' },
    { id: 8, title: 'Women\'s tracksuit Q109', price: '$30', reits: 4, img: '' },
  ])

  return (
    <div className="App">
      <Header_main />
      <Main womenItem={womenItem} menItem={menItem} />
      <Footer />
    </div>
  );
}

export default App;
