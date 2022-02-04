import styled from 'styled-components';
import { modalHeadUrl } from 'utils';

export const Container = styled.div`
  position: absolute;
  z-index: 1000;
  display: ${props => (props.isClick ? 'flex' : 'none')};
  align-items: center;

  width: 220px;
  height: 86px;

  padding: 8px 0 8px 8px;
  margin-top: 16px;

  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  background-color: rgba(255, 255, 255, 0.95);

  font-size: 14px;
  color: #4a4a4a;

  ${props =>
    props.isBottom &&
    !props.isOverflow &&
    `top: 30px;
     left: -20px;`}

  ${props =>
    !props.isBottom &&
    !props.isLeft &&
    `bottom: 15px;
     left: -20px;`}

   ${props =>
    props.isOverflow &&
    `top: 30px;
     left: -175px;`}
    
    ${props =>
    props.isLeft &&
    `bottom:15px;
     right: -60px;`}

  &::before {
    content: '';

    position: absolute;

    width: 12px;
    height: 8px;

    background-image: url(${modalHeadUrl});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;

    ${props =>
      props.isBottom &&
      !props.isOverflow &&
      `top: -8px;
       left: 34px;`}

    ${props =>
      !props.isBottom &&
      !props.isLeft &&
      `bottom: -8px;
       left: 33px;
       transform: rotate(180deg);`}

   ${props =>
      props.isOverflow &&
      `top: -8px;
       right: 30px;`}
    
    ${props =>
      props.isLeft &&
      `bottom: -8px;
       right: 36px;
       transform: rotate(180deg);`}
  }
`;

export const Image = styled.div`
  width: 70px;
  height: 70px;

  margin-right: 8px;
  background-image: ${props => `url('${props.imgUrl}')`};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  padding-bottom: 2px;
  overflow: hidden;
  text-align: left;
`;

export const FurnitureName = styled.div`
  width: 100%;

  margin-top: 5px;

  overflow: hidden;
  color: #333c45;

  white-space: normal;
  line-height: 1.3em;

  font-size: 15.8px;
  font-weight: bold;
`;

export const FurniturePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const PriceDiscount = styled.div`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 20px;
  line-height: 16px;
  font-weight: bold;
`;

export const DiscountRate = styled.span`
  color: #ff585d;
  margin-right: 4px;
`;

export const ExpectedPriceLabel = styled.span`
  color: #898f94;
  font-size: 15px;
  line-height: 11px;
  font-weight: bold;
  margin-right: 4px;
`;

export const MoveIconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

export const MoveIcon = styled.img`
  width: 20px;
  height: 20px;
  aspect-ratio: auto 20 / 20;
`;
