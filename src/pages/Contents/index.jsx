import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PhotoView } from 'components';
import * as S from './style';

export function Contents({ data }) {
  const { imageUrl, productList } = data;
  console.log(productList);
  const [lists, setLists] = useState(
    productList.map(product => {
      return { ...product, isClick: false };
    }),
  );

  const onClick = id => {
    console.log(id);
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
      <div>
        <PhotoView lists={lists} imageUrl={imageUrl} onClick={onClick} />
      </div>
    </S.Container>
  );
}

Contents.propTypes = {
  data: PropTypes.object.isRequired,
};
