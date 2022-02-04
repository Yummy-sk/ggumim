import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 130px;
  height: 130px;

  margin: 8px;

  border: 3px solid transparent;
  border-radius: 18px;

  ${props =>
    props.active
      ? `background-image: linear-gradient(#fff, #fff),
         linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
         margin: 26px 4px;
         padding: 2px;
         border-radius: 18px;
         background-origin: border-box;
         background-clip: content-box, border-box;

              `
      : ''}
`;

export const Wrapper = styled.div`
  position: absolute;   

  width: 100%;
  height: 100%;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  ${props => !props.active && `border: 2px solid #d3d3d3;`}

  border-radius: 18px;

  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat no-repeat;
  background-size: cover;

  border-radius 18px: 


  cursor: pointer;

`;
