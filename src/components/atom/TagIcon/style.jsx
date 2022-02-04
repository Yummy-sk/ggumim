import styled from 'styled-components';
import { seeMoreUrl, closeUrl } from 'utils';

export const Icon = styled.span`
  position: absolute;
  width: 32px;
  height: 32px;

  background-image: url(${props =>
    props.isClick ? `${closeUrl}` : `${seeMoreUrl}`});
  background-size: cover;
  background-repeat: no-repeat;
`;
