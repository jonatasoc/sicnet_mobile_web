import React, { useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import styled from 'styled-components';

export default function AndroidCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideIndexBack = () => {
    if (slideIndex === 0) {
      return;
    }
    setSlideIndex(slideIndex - 1);
  };

  const handleSlideIndexForward = () => {
    if (slideIndex === 11) {
      return;
    }
    setSlideIndex(slideIndex + 1);
  };

  return (
    <Container>
      {slideIndex > 0 && <FiArrowLeftCircle onClick={handleSlideIndexBack} />}
      <Carousel
        value={slideIndex}
        slides={[
          <img
            src={`/android_tutorial/print${slideIndex}.png`}
            alt="Android Tutorial"
            style={{ width: '70%', height: 'auto' }}
          />,
        ]}
      ></Carousel>
      {slideIndex !== 11 && (
        <FiArrowRightCircle onClick={handleSlideIndexForward} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg:first-child,
  svg:last-child {
    cursor: pointer;
  }
`;
