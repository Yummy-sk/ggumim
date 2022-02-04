import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PhotoView, Swiper } from 'components';
import * as S from './style';

export function Contents({ data }) {
  const { imageUrl, productList } = data;

  const [lists, setLists] = useState(
    productList.map(product => {
      return { ...product, isClick: false };
    }),
  );

  const onClick = (id, e) => {
    console.log('클릭!');

    console.log(e);
    setLists(
      lists.map(list =>
        list.productId === id
          ? { ...list, isClick: !list.isClick }
          : { ...list, isClick: false },
      ),
    );
  };

  return (
    <S.Container>
      <S.Wrapper>
        <PhotoView lists={lists} imageUrl={imageUrl} onClick={onClick} />
        <Swiper lists={lists} onClick={onClick} />
      </S.Wrapper>
    </S.Container>
  );
}

Contents.propTypes = {
  data: PropTypes.object.isRequired,
};
