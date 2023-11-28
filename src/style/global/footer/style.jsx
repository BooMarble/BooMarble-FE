import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const FooterContainer = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
background-color: #ffffff;
display: flex;
justify-content: space-around;
align-items: center;
padding: 15px 0;
box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #333333;
  transition: color 0.3s ease;
  position:relative;

  img {
    width: 25px;
    height: 25px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -3px;
    border-bottom: 2px solid transparent;
  }

  &:hover::after {
    border-color: black;
  }
`;