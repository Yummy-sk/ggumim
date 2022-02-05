import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { DiscountBadge } from 'components';
import * as S from './style';

export function ItemPicture({ list, onClick }) {
  const { imageUrl, outside, discountRate, productId, isClick } = list;
  const itemPicRef = useRef();

  return (
    <S.Container active={isClick} ref={itemPicRef}>
      <S.Wrapper
        onClick={e => onClick(productId, e)}
        img={imageUrl}
        active={isClick}
      >
        {!outside ? <DiscountBadge discountRate={discountRate} /> : null}
      </S.Wrapper>
    </S.Container>
  );
}

ItemPicture.propTypes = {
  list: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
