import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPostInfo, getCommentInfo, addComment, scrapping, notScrapping } from "../../apis/commDetApi/apis";
import { useParams } from "react-router-dom";
import notScrapBtn from "../../assets/images/notScrapBtn.png";
import scrapBtn from "../../assets/images/scrapBtn.png";
import { DetailBody } from "./style";

function Body() {
    // postId
    const postId = useParams().communityId;

    // postInfo 가져오기
    const [nickName, setNickName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [hashTags, setHashTags] = useState([]);

    const loadPostInfo = async () => {

        // 정상 접근 시
        try {
            const postInfo = await getPostInfo(postId);
            setNickName(postInfo[0])
            setTitle(postInfo[1])
            setContent(postInfo[2])
            setHashTags(postInfo[3])
        }catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        loadPostInfo();
    },[]);

    // 댓글 가져오기
    const [loadedCommentId, setLoadedCommentId] = useState('');
    const [loadedCommentContent, setLoadedCommentContent] = useState('');
    const [commentsLists, setCommentsLists] = useState([]);
    const loadCommentInfo = async () => {
        try {
            const commentInfo = await getCommentInfo(postId);
            setCommentsLists(commentInfo)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadCommentInfo();
    })

    // 스크랩 상태를 관리하는 state
    const [isScrapOpen, setScrapOpen] = useState(false)
    // 스크랩하는 함수
    function openScrap(){
        setScrapOpen(true)
        scrapping(postId)
    }

    // 스크랩 취소하는 함수
    function closeScrap(){
        setScrapOpen(false)
        notScrapping(postId)
    }

    const navigate = useNavigate();

    // 댓글 내용
    const [commentContent, setCommentContent] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addComment(navigate, postId, commentContent);
        setCommentContent('');
    }
    
    // 댓글이 존재한다면 댓글 띄우기
    const [isComment, setIsComment] = useState(false);

    return(
        <DetailBody>
            <div id="userBox">
                <p id="profile"></p>
                <p id="name">{nickName}</p>
            </div>
            <div id="titleBox">
                <p>{title}</p>
                <p id="scrap" onClick={isScrapOpen ? closeScrap : openScrap} 
                        style={{ backgroundImage: isScrapOpen ? `url(${scrapBtn})` : `url(${notScrapBtn})` }}>
                    </p>
            </div>
            <p id="contentBox">{content}</p>
            <div id="hashTagBox">
                {hashTags.map((hashTag, index) => (
                    <p key={index} value={hashTag}>#{hashTag}</p>
                ) )}
            </div>
            {commentsLists.map((comments, index) => ( 
                <div id="commentBox" key={index}>
                    <div id="commentUserBox">
                        <p id="commentUserProfile"></p>
                        <p id="commentUserName">{comments.writer.nickname}</p>
                        <p id="reply"></p>
                    </div>
                    <p id="commentContents">{comments.content}</p>
                </div>
            ))}
            {!isComment && (
                <div id="ifNoComments-postingCmts">
                    <textarea 
                        value={commentContent}
                        placeholder="댓글을 입력하세요."
                        onChange={(e) => setCommentContent(e.target.value)}></textarea>
                    <button onClick={handleOnSubmit}>등록</button>
                </div>
                )
            }
            {isComment && (
                <div id="ifComments-postingCmts">
                    <textarea 
                        value={commentContent}
                        placeholder="댓글을 입력하세요."
                        onChange={(e) => setCommentContent(e.target.value)}></textarea>
                    <button onClick={handleOnSubmit}>등록</button>
                </div>
                )
            }

        </DetailBody>
    )
}

export default Body;