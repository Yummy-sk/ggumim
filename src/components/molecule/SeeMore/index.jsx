import React from 'react';
import PropTypes from 'prop-types';
import { TagIcon, Modal } from 'components';
import * as S from './style';

export function SeeMore({ list, onClick }) {
  const { productId, isClick, pointX, pointY } = list;
  const adjustedX = pointX * 2;
  const adjustedY = pointY * 2.08;

  return (
    <S.Container x={adjustedX} y={adjustedY}>
      <TagIcon isClick={isClick} onClick={() => onClick(productId)} />
      <Modal list={list} location={{ x: adjustedX, y: adjustedY }} />
    </S.Container>
  );
}

SeeMore.propTypes = {
  list: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
