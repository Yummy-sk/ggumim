import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const GoodsContext = createContext();

export function Store({ data, children }) {
  return <GoodsContext.Provider value={data}>{children}</GoodsContext.Provider>;
}

Store.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
