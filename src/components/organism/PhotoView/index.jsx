import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Photo, SeeMore } from 'components';

export function PhotoView({ lists, imageUrl, onClick }) {
  return (
    <Photo imageUrl={imageUrl}>
      {lists.map(list => (
        <SeeMore key={list.productId} list={list} onClick={onClick} />
      ))}
    </Photo>
  );
}

PhotoView.propTypes = {
  lists: PropTypes.arrayOf(object).isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
