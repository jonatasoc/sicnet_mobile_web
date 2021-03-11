import React, { useCallback, useEffect, useState } from 'react';

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isEnd: boolean;
  isStart: boolean;
}

export default function AndroidCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    if (slideIndex === 0 && isStart !== true) {
      setIsStart(true);
    }

    if (slideIndex === 11 && isEnd !== true) {
      setIsEnd(true);
    }
  }, [slideIndex, isStart, isEnd]);

  const handleSlideIndexBack = useCallback(() => {
    if (slideIndex === 0) {
      return;
    }
    setIsEnd(false);
    setSlideIndex(slideIndex - 1);
  }, [slideIndex]);

  const handleSlideIndexForward = useCallback(() => {
    if (slideIndex === 11) {
      return;
    }
    setIsStart(false);
    setSlideIndex(slideIndex + 1);
  }, [slideIndex]);

  return (
    <Container isEnd={isEnd} isStart={isStart}>
      <MdNavigateBefore onClick={handleSlideIndexBack} />
      <img
        key={slideIndex}
        src={`/android_tutorial/print${slideIndex}.png`}
        alt="Android Tutorial"
        style={{ width: '70%', height: 'auto' }}
        className="animated fadeIn"
      />
      <MdNavigateNext onClick={handleSlideIndexForward} />
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
    font-size: 3rem;
    color: var(--blue);
    transition: color 0.2s;

    &:hover {
      color: rgb(0 77 107 / 80%);
    }
  }

  svg:first-child {
    margin-right: -1%;
    ${props =>
      props.isStart
        ? css`
            filter: opacity(50%);
          `
        : null}
  }
  svg:last-child {
    margin-left: -1%;
    ${props =>
      props.isEnd
        ? css`
            filter: opacity(50%);
          `
        : null}
  }
`;
