import mypage from'../../../assets/images/mypage_img.png';
import alarm_icon from'../../../assets/images/alarm_icon.jpg'
import {Link } from 'react-router-dom';
import { HeaderContainer, HeaderLink } from './style';
function Header() {
    return(
        <HeaderContainer>
        <HeaderLink as={Link} to='../mypage'>
            <img src={mypage} alt="mypage"/>
        </HeaderLink>
        <HeaderLink as={Link} to= '../prediction'>
            <img src={alarm_icon} alt="prediction"/>
        </HeaderLink>
        </HeaderContainer>
    )
}

export default Header;