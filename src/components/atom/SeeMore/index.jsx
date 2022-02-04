import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function SeeMore({ list, onClick }) {
  const { productId, isClick, pointX, pointY } = list;
  const adjustedX = pointX * 2;
  const adjustedY = pointY * 2.08;

  return (
    <S.Image
      isClick={isClick}
      onClick={() => onClick(productId)}
      x={adjustedX}
      y={adjustedY}
    />
  );
}

SeeMore.propTypes = {
  list: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
