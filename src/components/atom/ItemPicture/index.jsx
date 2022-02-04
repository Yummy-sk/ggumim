import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { DiscountBadge } from 'components';
import * as S from './style';

export function ItemPicture({ list, onClick }) {
  const { imageUrl, outside, discountRate, productId, isClick } = list;
  const itemPicRef = useRef();
  console.log('ds');
  return (
    <S.Container
      active={isClick}
      onClick={e => onClick(productId, e)}
      ref={itemPicRef}
    >
      <S.Wrapper img={imageUrl} active={isClick}>
        {!outside ? <DiscountBadge discountRate={discountRate} /> : null}
      </S.Wrapper>
    </S.Container>
  );
}

ItemPicture.propTypes = {
  list: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
