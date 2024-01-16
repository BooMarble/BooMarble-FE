import community_img from'../../../assets/images/community_img.png';
import review_img from'../../../assets/images/review_img.png'
import mainpage_img from'../../../assets/images/mainpage_img.png'
import info_img from'../../../assets/images/info_img.png'
import chat_img from'../../../assets/images/chat_img.png'
import {Link} from 'react-router-dom';
import { FooterContainer, FooterLink } from './style';
function Footer() {
    return(
        <FooterContainer>

        <FooterLink as={Link} to='../community'>
            <img src={community_img} alt="community"/>
        </FooterLink>
        <FooterLink as={Link} to= '../reviews'>
            <img src={review_img} alt="review"/>
        </FooterLink>
        <FooterLink as={Link} to= '../'>
            <img src={mainpage_img} alt="mainpage"/>
        </FooterLink>
        <FooterLink as={Link} to= '../info'>
            <img src={info_img} alt="info_img"/>
        </FooterLink>
        <FooterLink as={Link} to= '../chat'>
            <img src={chat_img} alt="chat_img"/>
        </FooterLink>

        </FooterContainer>
    )
}
export default Footer;