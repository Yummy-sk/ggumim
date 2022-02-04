import React from 'react';
import PropTypes from 'prop-types';
import { moveUrl, putCommaAtPrice } from 'utils';
import * as S from './style';

export function Modal({ list, location }) {
  const {
    outside,
    productName,
    priceOriginal,
    priceDiscount,
    discountRate,
    imageUrl,
    isClick,
  } = list;
  const { x, y } = location;

  return (
    <S.Container
      isClick={isClick}
      isBottom={x < 600}
      isOverflow={y > 900}
      isLeft={y > 500 && y < 900}
    >
      <S.Image imgUrl={imageUrl} />
      <S.Description>
        <S.FurnitureName>{productName}</S.FurnitureName>
        <S.FurniturePrice>
          <S.PriceDiscount>
            {!outside ? (
              <>
                <S.DiscountRate>{discountRate}%</S.DiscountRate>
                {putCommaAtPrice(priceDiscount)}
              </>
            ) : (
              <>
                <S.ExpectedPriceLabel>예상가</S.ExpectedPriceLabel>
                {putCommaAtPrice(priceOriginal)}
              </>
            )}
          </S.PriceDiscount>
        </S.FurniturePrice>
      </S.Description>
      <S.MoveIconWrapper>
        <S.MoveIcon src={moveUrl} alt="상품보기" />
      </S.MoveIconWrapper>
    </S.Container>
  );
}

Modal.propTypes = {
  list: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
