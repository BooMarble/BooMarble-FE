import { ReviewBody } from "./style";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { getReviewInfo } from "../../apis/reviewApi/apis";

function Body() {

    // // 검색 구현
    // const [searchContent, onChangeSearchContent, setSearchContent] = useInput('');
    // const findSearchInfo = async () => {
    //     const post = await getSearchInfo(userId, searchContent);
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

    // 드롭다운 메뉴 구현
    // 국가
    // 국가 드롭다운 상태를 관리하는 state
    const [isCountryOpen, setCountryOpen] = useState(false)

    // 국가 드롭다운 여는 함수 
    function openCountry(){
        setCountryOpen(true)
    }

    // 국가 드롭다운 닫는 함수
    function closeCountry(){
        setCountryOpen(false)
    }

    // 국가 드롭다운 항목 선택 시 처리할 함수
    function handleCountryClick(item){
        console.log(`선택된 항목: ${item}`);
    }

    // 대학
    // 대학 드롭다운 상태를 관리하는 state
    const [isUniversityOpen, setUniversityOpen] = useState(false)

    // 대학 드롭다운 여는 함수
    function openUniversity(){
        setUniversityOpen(true)
    }

    // 대학 드롭다운 닫는 함수
    function closeUniversity(){
        setUniversityOpen(false)
    }

    // 대학 드롭다운 항목 선택 시 처리할 함수
    function handleUniversityClick(item){
        console.log(`선택된 항목: ${item}`);
    }

    //선발유형
    // 선발유형 드롭다운 상태를 관리하는 state
    const [isSelectionCategoryOpen, setSelectionCategoryOpen] = useState(false)

    // 선발유형 드롭다운 여는 함수
    function openSelectionCategory(){
        setSelectionCategoryOpen(true)
    }

    // 선발유형 드롭다운 닫는 함수
    function closeSelectionCategory(){
        setSelectionCategoryOpen(false)
    }

    // 선발유형 드롭다운 항목 선택 시 처리할 함수
    function handleSelectionCategoryClick(item){
        console.log(`선택된 항목: ${item}`);
    }

    // 정렬 방식 선택
    // 정렬 드롭다운 상태를 관리하는 state
    const [isSortingOpen, setSortingOpen] = useState(false)

    // 학기 드롭다운 여는 함수
    function openSorting(){
        setSortingOpen(true)
    }

    // 학기 드롭다운 닫는 함수
    function closeSorting(){
        setSortingOpen(false)
    }

    // 학기 드롭다운 항목 선택 시 처리할 함수
    function handleSortingClick(item){
        console.log(`선택된 항목: ${item}`);
    }

    // // review 가져오기
    // const navigate = useNavigate();
    // const [review, setReview] = useState('');
    // const findReviewInfo = async () => {
    //     //정상 접근시
    //     try {
    //         // const reviewInfo = await getReviewInfo();
    //         // setReview(reviewInfo);
    //         setReview([
    //             [
    //                 {
    //                     "reviewId" : 1,
    //                     "universityName" : "도쿄대학교",
    //                     "reviewCount" : 3,
    //                     "countryName" : "일본",
    //                     "categoryName" : "7+1"
    //                 }
    //             ]
    //         ])
    //     } catch (err) {
    //         // 비정상 접근시
    //     }
    // }

    // // review 띄우기
    // const setReviews = (numberOfReviewNumber) => {
    //     let reviewBox= document.getElementById('reviewBox');
    //     if (reviewBox) {
    //         // 초기화
    //         reviewBox.innerHTML = '';
    //         if (numberOfReviewNumber == 0) {
    //             reviewBox.innerHTML = `
    //             <div style="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center;">
    //             <p3 id="noreview" style="font-size: 18px; color: #dcdcdc;">아직 후기가 없어요</p3>
    //             </div>
    //             `; 
    //         } else {
    //             for (let i=numberOfReviewNumber - 1; i >= 0; i--) {
    //                 // 이전까지의 피드
    //                 const prev = reviewBox.innerHTML;

    //                 // 새로 추가될 피드
    //                 const reviewId = review[i].reviewId;
    //                 const universityName = review[i].university;
    //                 const reviewCount = review[i].reviewCount;
    //                 const countryName = review[i].country;
    //                 const categoryName = review[i].category;

    //                 // 게시물 렌더링
    //                 reviewBox = prev + `
    //                 <div id=${reviewId}>
    //                     <p>${universityName}</p>
    //                     <p>${reviewCount}</p>
    //                     <p># ${countryName}</p>
    //                     <p># ${categoryName}</p>
    //                 </div>
    //                 `;
    //             }
    //         }
    //     }
    // }
    // // // review에 뭔가가 들어있으면
    // // if (review) {
    // //     const numberOfReviewNumber = review.length;
    // //     setReviews(numberOfReviewNumber)
    // // }

    // // review에 뭔가가 들어있으면
    // useEffect(() => {
    //     if (review) {
    //         const numberOfReviewNumber = review.length;
    //         setReviews(numberOfReviewNumber);
    //     }
    // }, [review]); // review가 변경될 때마다 호출

    // // 후기 쓰러 가기 버튼 누를 시
    // const handleOnClickPosting = () => {
    //     navigate(`/reviewPosting`)
    // }
    
    // useEffect(() => {
    //     // review 불러오기
    //     findReviewInfo();
    // }, []);

    // // reviewBox 클릭 시
    // const handleOnClick = async (e) => {
    //     e.preventDefault();
        
    //     // reviewId 따기
    //     const currReviewId = e.target.parentNode.id;

    //     // 해당 reviewDetail 페이지로 이동
    //     navigate(`/reviewDetail`)
        
    // }

    return(
        <ReviewBody>
            <input
                id="searchInput"
                type="text"
                placeholder="검색"
                // onChange={onChangeSearchContent}
            />
            <div id="dropdownContainer">
                <div id="country">
                    <p onClick={isCountryOpen ? closeCountry : openCountry}>
                        {isCountryOpen ? '국가▲' : '국가▼'}
                    </p>
                    {isCountryOpen && (
                        <div id="countryBox">
                            <input
                                id="searchInput"
                                type="text"
                                placeholder="검색"
                                // onChange={onChangeCountry}
                            />                            
                            <div id="countryList">
                                <p onClick={() => handleUniversityClick('항목 1')}>항목 1</p>
                                <p onClick={() => handleUniversityClick('항목 2')}>항목 2</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                            </div>
                        </div>
                    )}
                </div>
                <div id="university">
                    <p onClick={isUniversityOpen ? closeUniversity : openUniversity}>
                        {isUniversityOpen ? '대학▲' : '대학▼'}
                    </p>
                    {isUniversityOpen && (
                        <div id="universityBox">
                            <input
                                id="searchInput"
                                type="text"
                                placeholder="검색"
                                // onChange={onChangeUniversity}
                            />
                            <div id="universityList">
                                <p onClick={() => handleUniversityClick('항목 1')}>항목 1</p>
                                <p onClick={() => handleUniversityClick('항목 2')}>항목 2</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleUniversityClick('항목 3')}>항목 3</p>
                            </div>
                        </div>
                    )}
                </div>
                <div id="selectionCategory">
                    <p onClick={isSelectionCategoryOpen ? closeSelectionCategory : openSelectionCategory}>
                        {isSelectionCategoryOpen ? '선발유형▲' : '선발유형▼'}
                    </p>
                    {isSelectionCategoryOpen && (
                        <div id="selectionCategoryBox">
                            <input
                                id="searchInput"
                                type="text"
                                placeholder="검색"
                                // onChange={onChangeSelectionCategory}
                            />
                            <div id="selectionCategoryList">
                                <p onClick={() => handleSelectionCategoryClick('항목 1')}>항목 1</p>
                                <p onClick={() => handleSelectionCategoryClick('항목 2')}>항목 2</p>
                                <p onClick={() => handleSelectionCategoryClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleSelectionCategoryClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleSelectionCategoryClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleSelectionCategoryClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleSelectionCategoryClick('항목 3')}>항목 3</p>
                                <p onClick={() => handleSelectionCategoryClick('항목 3')}>항목 3</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div id="sorting">
                    <p onClick={isSortingOpen ? closeSorting : openSorting}>
                        {isSortingOpen ? '인기순▼' : '인기순▼'}
                    </p>
                    {isSortingOpen && (
                        <div id="sortingList">
                            <p onClick={() => handleSortingClick('인기순')}>인기순</p>
                            <p onClick={() => handleSortingClick('스크랩순')}>스크랩순</p>
                        </div>
                    )}
            </div>            
            <div id="reviewBox">
                <div id="firstUniv">
                    <p>도쿄대학교</p>
                    <p>리뷰 10</p>
                    <div id="firstTags">
                        <p>#일본</p>
                        <p>#7+1</p>
                    </div>
                </div>
                <div id="secondUniv">
                    <p>하버드대학교</p>
                    <p>리뷰 10</p>
                    <div id="secondTags">
                        <p>#말레이시아</p>
                        <p>#7+1</p>
                    </div>
                </div>
                <div id="thirdUniv">
                    <p>예일대학교</p>
                    <p>리뷰 10</p>
                    <div id="secondTags">
                        <p>#말레이시아</p>
                        <p>#7+1</p>
                    </div>
                </div>
            </div>
            <button>후기 쓰러 가기✏</button>
        </ReviewBody>
        
    )
}

export default Body;