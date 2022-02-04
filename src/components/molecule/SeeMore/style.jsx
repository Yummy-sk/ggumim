import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  top: ${props => `${props.x}px`};
  left: ${props => `${props.y}px`};

  cursor: pointer;
`;
