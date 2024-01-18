import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { getPostInfo, getSearchInfo } from "../../apis/communityApi/apis";
import { CommunityBody } from "./style";

function Body() {
    // // 검색 구현
    // const [searchContent, onChangeSearchContent, setSearchContent] = useInput('');
    // const findSearchInfo = async () => {
    //     const post = await getSearchInfo(searchContent);
    //     setPost(post);
    // }
    // if (searchContent) {
    //     findSearchInfo(); 
    // }

    // // 검색어 자동완성 기능 구현
    // // 사용자가 검색한 내용
    // const [searchContent, onChangeSearchContent, setSearchContent] = useInput(''); 
    // // 자동완성 검색 결과 리스트 (최다 검색/최다 태그 순으로 올 것 같음)
    // const [searchResults, setSearchResults] = useState([]);
    // // 드롭다운 열고 닫을 state -> false이면 드롭다운 닫고, true이면 드롭다운 열고
    // const [showDropdown, setShowDropdown] = useState(false);

    // // 검색 내용이 있으면 호출
    // const findSearchInfo = async () => {
    //     // 자동완성 검색 결과를 받아와서 
    //     const results = await getSearchInfo(searchContent);
    //      // 드롭다운 열고
    //     setShowDropdown(true);
    //     // searchResults 업데이트
    //     setSearchResults(results);
    // }
    // if (searchContent) {
    //     findSearchInfo();
    // }

    // // 드롭다운에서 특정 검색어를 선택하면 호출
    // const handleResultClick = (result) => {
    //     // 그게 검색창에 검색어로 입력되고
    //     setSearchContent(result);
    //     // 드롭다운은 꺼짐
    //     setShowDropdown(false);
    // };

    // useEffect(() => {
    //     if (searchContent) {
    //     findSearchInfo();
    //     } else {
    //     setShowDropdown(false);
    //     }
    // }, [searchContent]);

    // 정렬 방식 선택
    // post 가져오기
    const navigate = useNavigate();
    const [post, setPost] = useState([]);

    const findPostInfo = async () => {
        //정상 접근시
        try {
            const postInfo = await getPostInfo();
            setPost(postInfo);
        } catch (err) {
            // 비정상 접근시
            console.log(err)
        }
    }

    // post 띄우기
    const setPosts = (numberOfPostNumber) => {
        let postBox= document.getElementById('postBox');
        if (postBox) {
            // 초기화
            postBox.innerHTML = '';
            for (let i=0; i < numberOfPostNumber; i++) {
                // 이전까지의 피드
                const prev = postBox.innerHTML;

                // 새로 추가될 피드
                const postId = post[i].communityId;
                const title = post[i].communityTitle;
                const tagList = post[i].communityTagList;

                // 만약 태그가 하나도 없다면
                if (tagList.length == 0) {
                    postBox.innerHTML = prev + `
                    <div id=${postId}>
                        <p>${title}</p>                
                    </div>
                    `
                } 

                // 태그가 하나라도 있다면
                if (tagList.length > 0) {
                    postBox.innerHTML = prev + `
                    <div id=${postId}>
                        <p>${title}</p>
                        <div id="tagBox-${postId}"></div>                    
                    </div>
                    `
                } 

                // tag 띄우기
                const setTags = (numberOfTagNumber, currPostId) => {
                    let tagBox = document.getElementById(`tagBox-${currPostId}`);
                    if (tagBox) {
                        //초기화
                        tagBox.innerHTML = '';
                        for (let j=0; j < numberOfTagNumber; j++){
                            // 이전까지의 tag
                            const prevTags = tagBox.innerHTML;

                            // 태그 렌더링
                            tagBox.innerHTML = prevTags + `
                                <p id="${currPostId}-${j}">#${tagList[j]}</p>
                            `
                        }
                    }
                }
                if (tagList.length > 0) {
                    const numberOfTagNumber = tagList.length;
                    setTags(numberOfTagNumber, postId)
                } 

            }
        }
    }
    if (post.length > 0) {
        const numberOfPostNumber = post.length;
        setPosts(numberOfPostNumber);
    }

    useEffect(() => {
        // post 불러오기
        findPostInfo();
    }, []);

    const handleOnClick = async (e) => {
        e.preventDefault();
        let postId = e.target.parentNode.id;
        console.log(postId);
        if (postId.slice(0,7) === 'tagBox-'){
            postId = postId.slice(7);
        }
        navigate(`/posts/${postId}`);
    }

    return(
        <CommunityBody>
            <input
                id="searchInput"
                type="text"
                placeholder="검색"
                // onChange={onChangeSearchContent}
            />
            <Link to="/communityPosting"><button >글쓰기</button></Link>
            <div id="postBox" onClick={handleOnClick}></div>
        </CommunityBody>
    )
}

export default Body;