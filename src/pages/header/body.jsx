import alarm from '../../assets/images/alarm.png'
import mypage from'../../assets/images/mypage_img.png'
import alarm_icon from'../../assets/images/alarm_icon.jpg'
import {Link } from 'react-router-dom';
import { HeaderContainer, HeaderLink } from './style';
function Header() {
    return(
        <HeaderContainer>
        <HeaderLink as={Link} to='../mypage'>
            <img src={mypage} alt="mypage"/>
        </HeaderLink>
        <HeaderLink as={Link} to= '/'>
            <img src={alarm} alt="alarm"/>
        </HeaderLink>
        <HeaderLink as={Link} to= '/'>
            <img src={alarm_icon} alt="alarm_icon"/>
        </HeaderLink>
        </HeaderContainer>
    )
}

export default Header;