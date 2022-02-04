import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function DiscountBadge({ discountRate }) {
  return <S.Container>{discountRate}%</S.Container>;
}

DiscountBadge.propTypes = {
  discountRate: PropTypes.number.isRequired,
};
