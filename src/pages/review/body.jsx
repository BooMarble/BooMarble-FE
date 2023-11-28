import { ReviewBody } from "./style";
import useInput from "../../hooks/useInput";
import { useState } from "react";

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
                        <div className="dropdown-menu">
                            <div onClick={() => handleCountryClick('미국')}>미국</div>
                            <div onClick={() => handleCountryClick('캐나다')}>캐나다</div>
                            <div onClick={() => handleCountryClick('독일')}>독일</div>
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
                                // onChange={onChangeCountry}
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
                        <div className="dropdown-menu">
                            <p onClick={() => handleSelectionCategoryClick('항목 1')}>항목 1</p>
                            <p onClick={() => handleSelectionCategoryClick('항목 2')}>항목 2</p>
                            <p onClick={() => handleSelectionCategoryClick('항목 3')}>항목 3</p>
                        </div>
                    )}
                </div>
            </div>
            <div id="sorting">
                    <p onClick={isSortingOpen ? closeSorting : openSorting}>
                        {isSortingOpen ? '인기순▲' : '인기순▼'}
                    </p>
                    {isSortingOpen && (
                        <div className="dropdown-menu">
                            <p onClick={() => handleSortingClick('인기순')}>인기순</p>
                            <p onClick={() => handleSortingClick('스크랩순')}>스크랩순</p>
                        </div>
                    )}
                </div>            
            <div id="feedBox"></div>
            <button>후기 쓰러 가기✏</button>
        </ReviewBody>
        
    )
}

export default Body;