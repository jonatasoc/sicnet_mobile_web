import React, { useState } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import print1 from '../../assets/images/android_tutorial/print1b.png';
import print2 from '../../assets/images/android_tutorial/print2.png';
import print3 from '../../assets/images/android_tutorial/print3.png';
import print4 from '../../assets/images/android_tutorial/print4.png';
import print5 from '../../assets/images/android_tutorial/print5.png';
import print6 from '../../assets/images/android_tutorial/print6.png';
import print7 from '../../assets/images/android_tutorial/print7.png';
import print8 from '../../assets/images/android_tutorial/print8.png';
import print9 from '../../assets/images/android_tutorial/print9.png';
import print10 from '../../assets/images/android_tutorial/print10.png';
import print11 from '../../assets/images/android_tutorial/print11.png';
import print12 from '../../assets/images/android_tutorial/print12.png';
import { Container } from './styles';

export default function AndroidCarousel() {
  const [value, setValue] = useState(0);

  const onChange = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Carousel plugins={['arrows']}>
        <img
          src={print1}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print2}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print3}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print4}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print5}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print6}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print7}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print8}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print9}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print10}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print11}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
        <img
          src={print12}
          alt="Android Tutorial"
          style={{ width: '70%', height: 'auto' }}
        />
      </Carousel>
      <Dots value={value} onChange={onChange} />
    </>
  );
}
