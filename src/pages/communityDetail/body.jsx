import { useState, useEffect } from "react";
import { getPostInfo } from "../../apis/commDetApi/apis";
import { useParams } from "react-router-dom";
import notScrapBtn from "../../assets/images/notScrapBtn.png";
import scrapBtn from "../../assets/images/scrapBtn.png";
import { DetailBody } from "./style";

function Body() {
    // // postId
    // const postId = useParams();

    // // postInfo 가져오기
    // const [nickName, setNickName] = useState('');
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    // const [hashTags, setHashTags] = useState([]);

    // const loadPostInfo = async () => {

    //     // 정상 접근 시
    //     try {
    //         const postInfo = await getPostInfo(postId);
    //         setNickName(postInfo[0])
    //         setTitle(postInfo[1])
    //         setContent(postInfo[2])
    //         setHashTags(postInfo[3])
    //     }catch (err){
    //         console.log(err)
    //     }
    // }

    // useEffect(() => {
    //     loadPostInfo();
    // },[]);

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

    return(
        <DetailBody>
            <div id="userBox">
                <p id="profile"></p>
                <p id="name">유저이름</p>
            </div>
            <div id="titleBox">
                <p>제목이랍니다</p>
                <p id="scrap" onClick={isScrapOpen ? closeScrap : openScrap} 
                        style={{ backgroundImage: isScrapOpen ? `url(${scrapBtn})` : `url(${notScrapBtn})` }}>
                    </p>
            </div>
            <p>해시태그</p>
            <p>내용</p>
            <div id="postingCmts">
                <textarea placeholder="댓글을 입력하세요."></textarea>
                <button>등록</button>
            </div>
        </DetailBody>
    )
}

export default Body;