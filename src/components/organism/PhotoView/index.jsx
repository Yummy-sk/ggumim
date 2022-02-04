import React from 'react';
import PropTypes from 'prop-types';
import { Photo, SeeMore } from 'components';

export function PhotoView({ lists, imageUrl, onClick }) {
  return (
    <Photo imageUrl={imageUrl}>
      {lists.map(list => {
        return <SeeMore key={list.productId} list={list} onClick={onClick} />;
      })}
    </Photo>
  );
}

PhotoView.propTypes = {
  lists: PropTypes.array.isRequired,
  imageUrl: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
