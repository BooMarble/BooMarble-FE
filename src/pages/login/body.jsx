import { Link } from 'react-router-dom';
import { StyledBody, Image, StyledLink } from './style'; // style.jsx 파일에서 가져오기

import boo_circle_1 from '../../assets/images/boo_circle_1.png';

function Body() {
  return (
    <StyledBody>
      <Image src={boo_circle_1} alt="boo_circle" />
      <StyledLink as={Link} to="../">google로 시작하기</StyledLink>
    </StyledBody>
  );
}

export default Body;