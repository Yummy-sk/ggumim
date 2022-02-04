import styled from 'styled-components';
import { seeMoreUrl, closeUrl } from 'utils';

export const Image = styled.span`
  position: absolute;
  width: 32px;
  height: 32px;

  top: ${props => `${props.x}px`};
  left: ${props => `${props.y}px`};

  background-image: url(${props =>
    props.isClick ? `${closeUrl}` : `${seeMoreUrl}`});
  background-size: cover;
  background-repeat: no-repeat;
`;
