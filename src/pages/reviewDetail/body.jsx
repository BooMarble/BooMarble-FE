import { ReviewDetailBody } from "./style";
import { useState } from "react";
import notScrapBtn from "../../assets/images/notScrapBtn.png";
import scrapBtn from "../../assets/images/scrapBtn.png";
import { useNavigate } from "react-router-dom";

function Body() {
    // 기숙사/숙소 드롭다운 상태를 관리하는 state
    const [isToggleOpen, setToggleOpen] = useState(false)
    // 드롭다운 여는 함수
    function openToggle(){
        setToggleOpen(true)
    }

    // 드롭다운 닫는 함수
    function closeToggle(){
        setToggleOpen(false)
    }

    // 드롭다운 항목 선택 시 처리할 함수
    function handleToggleClick(item){
        console.log(`선택된 항목: ${item}`);
    }

    // 스크랩 상태를 관리하는 state
    const [isScrapOpen, setScrapOpen] = useState(false)
    // 스크랩하는 함수
    function openScrap(){
        setScrapOpen(true)
    }

    // 스크랩 취소하는 함수
    function closeScrap(){
        setScrapOpen(false)
    }

    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(`/textDataPage`);
    }

    return(
        <ReviewDetailBody>
            <div id="generalInfo">
                <p>학기: 2024-1</p>
                <p id="scrap" onClick={isScrapOpen ? closeScrap : openScrap} 
                    style={{ backgroundImage: isScrapOpen ? `url(${scrapBtn})` : `url(${notScrapBtn})` }}>
                </p>
                <p>교환유형: 7+1</p>
                <p>국가: 일본</p>
                <p>대학: 도쿄대학교</p>
                <p id="toggleBtn" onClick={isToggleOpen ? closeToggle : openToggle}><span>기숙사/숙소</span></p>
                {isToggleOpen && (
                    <div id="domInfo">
                        <p>기숙사/숙소명</p>
                        <p> - 어쩌구 저쩌구</p>
                        <p>기숙사/숙소 정보</p>
                        <p> - 어쩌구 저쩌구</p>
                    </div>
                    )}
            </div>
            <div id="uniqueInfo1">
                <p onClick={handleOnClick}><br />출국 전 준비사항</p>
                <p><br />파견 대학 관련</p>
                <p><br />수강<br />교과목<br />리스트</p>
                <p><br />교내<br />활동</p>
            </div>
            <div id="uniqueInfo2">
                <p><br />소요<br />비용</p>
                <p><br />학점 인정 관련</p>
                <p><br />후배들<br />한 마디</p>
                <p><br />기타</p>
            </div>
        </ReviewDetailBody>
    )
}

export default Body;