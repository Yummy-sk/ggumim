import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 200px;
  overflow: hidden;

  cursor: pointer;
`;

export const SliderBoundary = styled.div`
  position: absolute;

  height: 100%;
  width: fit-content;

  display: flex;

  justify-content: start;
  align-items: center;

  transition: 0.1s;
`;
