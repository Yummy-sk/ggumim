import styled from 'styled-components';
import { badgeUrl } from 'utils';

export const Container = styled.div`
  position: absolute;

  top: 0;
  right: 5px;

  width: 30px;
  height: 34px;

  background-image: url(${badgeUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  font-size: 13px;
  font-weight: bold;
  text-align: center;
  line-height: 33px;
  color: #fff;
`;
