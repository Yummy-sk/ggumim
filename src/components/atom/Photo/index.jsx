import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function Photo({ imageUrl, children }) {
  return (
    <S.Container>
      <img src={imageUrl} alt="컨텐츠 이미지" />
      {children}
    </S.Container>
  );
}

Photo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
