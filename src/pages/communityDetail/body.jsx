import { useState, useEffect } from "react";
import { getPostInfo } from "../../apis/commDetApi/apis";
import { useParams } from "react-router-dom";

function Body() {
    // postId
    const postId = useParams();

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
    return(
        <div>
            <p>{nickName}</p>
        </div>
    )
}

export default Body;