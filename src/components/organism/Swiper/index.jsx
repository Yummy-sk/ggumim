import React, { useState, useRef, useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import { ItemPicture } from 'components';
import * as S from './style';

export function Swiper({ lists, onClick }) {
  const [pressed, setPressed] = useState(false);
  const [startX, setStartX] = useState();
  const innerSlider = useRef();
  const outerSlider = useRef();

  const checkBoundary = () => {
    const outer = outerSlider.current.getBoundingClientRect();
    const inner = innerSlider.current.getBoundingClientRect();

    if (parseInt(innerSlider.current.style.left, 10) > 0) {
      innerSlider.current.style.left = '0px';
    } else if (inner.right < outer.right) {
      innerSlider.current.style.left = `-${inner.width - outer.width}px`;
    }
  };

  const onMouseDown = e => {
    setPressed(true);
    setStartX(e.nativeEvent.offsetX - innerSlider.current.offsetLeft);
  };

  const onMouseMove = e => {
    e.preventDefault();
    innerSlider.current.style.pointerEvents = 'none';
    if (!pressed) return;

    const {
      current: { style },
    } = innerSlider;

    style.left = `${e.nativeEvent.offsetX - startX}px`;
  };

  useEffect(() => {
    window.addEventListener('mouseup', () => {
      innerSlider.current.style.pointerEvents = 'auto';
      setPressed(false);
      checkBoundary();
    });
  }, []);

  return (
    <S.Container
      ref={outerSlider}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
    >
      <S.SliderBoundary ref={innerSlider}>
        {lists.map(list => (
          <ItemPicture key={list.productId} list={list} onClick={onClick} />
        ))}
      </S.SliderBoundary>
    </S.Container>
  );
}

Swiper.propTypes = {
  lists: PropTypes.arrayOf(object).isRequired,
  onClick: PropTypes.func.isRequired,
};
