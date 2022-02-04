import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function TagIcon({ isClick, onClick }) {
  return <S.Icon isClick={isClick} onClick={onClick} />;
}

TagIcon.propTypes = {
  isClick: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
