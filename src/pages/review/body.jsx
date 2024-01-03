import { ReviewBody } from "./style";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getReviewInfo, getdropDown } from "../../apis/reviewApi/apis";

function Body() {

    // 드롭다운 state 관리 (드롭다운 열고 닫기)

    // 국가
    const [isCountryOpen, setCountryOpen] = useState(false);
    // 국가 드롭다운 여는 함수 
    function openCountry(){
        setCountryOpen(true)
    }
    // 국가 드롭다운 닫는 함수
    function closeCountry(){
        setCountryOpen(false)
    }

    // 대학
    const [isUniversityOpen, setUniversityOpen] = useState(false)

    // 대학 드롭다운 여는 함수
    function openUniversity(){
        setUniversityOpen(true)
    }

    // 대학 드롭다운 닫는 함수
    function closeUniversity(){
        setUniversityOpen(false)
    }

    // 선발유형 
    const [isSelectionCategoryOpen, setSelectionCategoryOpen] = useState(false)

    // 선발유형 드롭다운 여는 함수
    function openSelectionCategory(){
        setSelectionCategoryOpen(true)
    }

    // 선발유형 드롭다운 닫는 함수
    function closeSelectionCategory(){
        setSelectionCategoryOpen(false)
    }


    // 드롭다운 메뉴 구현
    // 선택된 국가
    const [selectedCountry, setSelectedCountry] = useState('');
    // 해당 국가에 대한 대학
    const [universitiesBySelectedCountry, setUniversitiesBySelectedCountry] = useState([]);
    // 해당 국가의 대학들만 추출
    const [univsByCountry, setUnivsByCountry] = useState([]);

    // 국가 선택하면
    const handleCountryClick = (e) => {
        // 해당 국가 따고
       setSelectedCountry(e.target.innerText);
    }

    // 보여줄 국가
    const [displayedCountry, setDisplayedCountry] = useState(""); 

    useEffect(()=>{
        console.log(selectedCountry) // "리투아니아"
        // 해당 국가만 추출
        const filteredCountry = countries.find((country) => country.name === selectedCountry);
        console.log(filteredCountry) // name == "리투아니아"인 객체만 추출

        // 거기서 다시 대학만 추출
        const universities = filteredCountry?.universities || []; // 리투아니아 대학만 추출 
        setUnivsByCountry(universities);

        // 국가 -> 해당 대학명으로
        setDisplayedCountry(selectedCountry);

        // 국가 드롭다운 닫아주고 
        closeCountry();

    },[selectedCountry]);

    // 선택된 대학
    const [selectedUniv, setSelectedUniv] = useState("");

    // 보여줄 대학
    const [displayedUniv, setDisplayedUniv] = useState("");

    // 리투아니아 대학들만 추출
    const [exTypesByUniv, setExtypesByUniv] = useState([]);

    // 대학 선택하면 
    const handleUnivClick = (e) => {
        setSelectedUniv(e.target.innerText)
    }

    useEffect(()=>{
        console.log(selectedUniv); // 대학 이름: "CONASEP (Lyon College)"
        // (3) 국가 && 대학 && 교환유형 다 선택할 때
        // 저 대학에 해당하는 교환유형 배열로 추출
        // 독일의 모든 대학들(univsByCountry)에서 univesity => university.name === selectedUniv
        const filteredUniv = univsByCountry.filter((university) => university.name === selectedUniv);
        // 그럼 배열 속 객체에 들어가 객체.name을 출력해야 교환유형 띄울 수 있음
        console.log(filteredUniv)
        setExtypesByUniv(filteredUniv)

        // 대학 -> 해당 대학명으로
        setDisplayedUniv(selectedUniv);

        // 대학 드롭다운 닫아주고
        closeUniversity();
    }, [selectedUniv])

    // 선택된 교환유형
    const [selectedExtype, setSelectedExtype] = useState("");

    // 보여줄 교환유형
    const [displayedExtype, setDisplayedExtype] = useState("");
    
    // 선발유형 드롭다운 항목 선택 시 처리할 함수
    const handleExtypeClick = (e) => {
        setSelectedExtype(e.target.innerText);
    }

    useEffect(()=>{
        console.log(selectedExtype);

        // 교환유형 -> 선택한 교환유형
        setDisplayedExtype(selectedExtype);
        //드롭다운 닫아주기
        closeSelectionCategory();
    }, [selectedExtype])

    // 정렬 방식 선택
    // 정렬 드롭다운 상태를 관리하는 state
    const [isSortingOpen, setSortingOpen] = useState(false)

    // 정렬 드롭다운 여는 함수
    function openSorting(){
        setSortingOpen(true)
    }

    // 정렬 드롭다운 닫는 함수
    function closeSorting(){
        setSortingOpen(false)
    }


    // dropdown 가져오기
    const [countries, setCountries] = useState([]);
    const dropdown = async () => {
        try {
            const countryList = await getdropDown();
            setCountries(countryList)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        // dropdown 불러오기
        dropdown();
    },[]);

    // review 가져오기
    const navigate = useNavigate();
    const [review, setReview] = useState('');
    const findReviewInfo = async () => {
        //정상 접근시
        try {
            const reviewInfo = await getReviewInfo();
            setReview(reviewInfo);
        } catch (err) {
            // 비정상 접근시
            console.log(err)
        }
    }
    
    useEffect(() => {
        // review 불러오기
        findReviewInfo();
    }, []);

    // review 띄우기
    const setReviews = (numberOfReviewNumber) => {
        let reviewBox= document.getElementById('reviewBox');
        if (reviewBox) {
            // 초기화
            reviewBox.innerHTML = '';
            if (numberOfReviewNumber == 0) {
                reviewBox.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center;">
                <p3 id="noreview" style="font-size: 18px; color: #dcdcdc;">아직 후기가 없어요</p3>
                </div>
                `; 
            } else {
                for (let i=0; i < numberOfReviewNumber; i++) {
                    // 이전까지의 피드
                    const prev = reviewBox.innerHTML;

                    // 새로 추가될 피드
                    const reviewId = i;
                    const universityName = review[i].universityName;
                    const reviewCount = review[i].universityReviewCnt;
                    const countryName = review[i].universityCountry;
                    const categoryName = review[i].universityType;

                    // 게시물 렌더링
                    reviewBox.innerHTML = prev + `
                    <div id=${reviewId}>
                        <p>${universityName}</p>
                        <p>리뷰 ${reviewCount}</p>
                        <div>
                            <p>#${countryName}</p>
                            <p>#${categoryName}</p>
                        </div>
                    </div>
                    `;
                }
            }
        }
    }
    // review에 뭔가가 들어있으면
    if (review.length > 0) {
        const numberOfReviewNumber = review.length;
        setReviews(numberOfReviewNumber);
    }

    // // 국가, 대학, 교환유형 중 하나라도 선택하면 -> 바로 setReview
    
    // // 국가만 선택했을 때
    // if (selectedCountry.length > 0) {
    //     const postsByCountry = review.filter((post)=>post.universityCountry === selectedCountry);
    //     setReview(postsByCountry);
    // } 

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

    // // 검색 구현
    // const [searchContent, onChangeSearchContent, setSearchContent] = useInput('');
    // const findSearchInfo = async () => {
    //     const post = await getSearchInfo(searchContent);
    //     setPost(post);
    // }
    // if (searchContent) {
    //     findSearchInfo(); 
    // }


    return(
        <ReviewBody>
            {/* <input
                id="searchInput"
                type="text"
                placeholder="검색"
                // onChange={onChangeSearchContent}
            /> */}
            <div id="dropdownContainer">
                <div id="country">
                    <p id="countryName" onClick={isCountryOpen ? closeCountry : openCountry}>
                        {isCountryOpen ? '국가▼' : displayedCountry || '국가▼'}
                    </p>
                    {isCountryOpen && (
                        <div id="countryBox">
                            <input
                                id="searchInput"
                                type="text"
                                placeholder="국가를 검색하세요"
                                // onChange={onChangeSearchContent}
                            />
                            <div id="countryList">
                                {countries.map((country, index) => (
                                    <p key={index} onClick={handleCountryClick}>
                                        {country.name}
                                    </p>
                                ))} 
                            </div>
                        </div>
                    )}
                </div>
                <div id="university">
                    <p onClick={isUniversityOpen ? closeUniversity : openUniversity}>
                        {isUniversityOpen ? '대학▼' : displayedUniv || '대학▼'}
                    </p>
                    {isUniversityOpen && (
                        <div id="universityBox">
                            <input
                                id="searchInput"
                                type="text"
                                placeholder="대학을 검색하세요"
                                // onChange={onChangeUniversity}
                            />
                            <div id="universityList">
                                {univsByCountry.map((university, index)=>(
                                    <p key={index} onClick={handleUnivClick}>
                                        {university.name}
                                    </p>
                                ))}        
                            </div>
                        </div>
                    )}
                </div>
                <div id="selectionCategory">
                    <p onClick={isSelectionCategoryOpen ? closeSelectionCategory : openSelectionCategory}>
                        {isSelectionCategoryOpen ? '선발유형▼' : displayedExtype || '선발유형▲'}
                    </p>
                    {isSelectionCategoryOpen && (
                        <div id="selectionCategoryBox">
                            <input
                                id="searchInput"
                                type="text"
                                placeholder="선발유형을 검색하세요"
                                // onChange={onChangeSelectionCategory}
                            />
                            <div id="selectionCategoryList">
                                {exTypesByUniv.map((university, index)=>(
                                    <p key={index} onClick={handleExtypeClick}>
                                        {university.exType}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div id="sorting">
                    <p onClick={isSortingOpen ? closeSorting : openSorting}>
                        {isSortingOpen ? '최신순▲' : '최신순▼'}
                    </p>
                    {isSortingOpen && (
                        <div id="sortingList">
                            <p>최신순</p>
                            <p>인기순</p>
                        </div>
                    )}
            </div>            
            <div id="reviewBox"></div>
        </ReviewBody>
        
    )
}

export default Body;