import React from 'react';
import PropTypes from 'prop-types';
import { DiscountBadge } from 'components';
import * as S from './style';

export function ItemPicture({ list, onClick }) {
  const { imageUrl, outside, discountRate, productId, isClick } = list;

  return (
    <S.Container
      className={isClick && 'active'}
      onClick={() => onClick(productId)}
    >
      <S.Wrapper img={imageUrl}>
        {!outside ? <DiscountBadge discountRate={discountRate} /> : null}
      </S.Wrapper>
    </S.Container>
  );
}

ItemPicture.propTypes = {
  list: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
