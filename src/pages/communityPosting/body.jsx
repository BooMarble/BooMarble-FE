import React, { useState, useEffect } from 'react';
import isEmpty from '../../hooks/isEmpty';
import useInput from "../../hooks/useInput";
import { useNavigate } from 'react-router-dom';
import { PostBody } from './style';
import{ getdropDown } from "../../apis/postingApi/apis";

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
    

    // form 내의 정보
    const [title, onChangeTitle, setTitle] = useInput('');
    const [content, onChangeContent, setContent] = useInput('');
    const [input, onChangeInput, setInput] = useInput('');

    // 해시태그 
    const [hashTags, setHashTags] = useState('');

    // 입력한 내용 해시태그에 추가해주기
    const addTags = (e) => {
        if (e.key !== 'Enter') return;

        // 미입력 상태로 엔터 누르면 
        if (isEmpty(input.trim())){
            return setInput(''); 
        }

        setHashTags((prevHashTags) => {
            const newHashTag = input.trim();
            if (prevHashTags.includes(newHashTag)){
                // 중복된 해시태그는 추가하지 않음
                return prevHashTags;
            }
            return [...prevHashTags, newHashTag];
        });

        setInput('');
        

    }

    // 해시태그 입력에서 엔터 쳤을 때 form 전송 안 되게 막아주는 함수
    const enterHandler = (e) => {
        if (e.key !== 'Enter') return;
        e.preventDefault();
    }

    // // 등록하기 버튼 누를 시
    // const navigate = useNavigate();
    // const handleSubmitClick = (e) => {
    //     e.preventDefault;
    //     if (!title){
    //         alert('제목을 작성해주세요.');
    //     }
    //     else if(!content){
    //         alert('내용을 작성해주세요.');
    //     }
    //     else{
    //         posting(navigate, title, content, selectedCountry, universityId, exType, semester, hashTags)
    //     }
    // }

    return(
        <PostBody>
            <form>
                <input type='text' id='titleInput' placeholder='제목' onChange={onChangeTitle}/>
                <textarea id='textarea' placeholder='내용을 입력하세요.' onChange={onChangeContent}></textarea>
                <div id="dropdownContainer">
                    <div id="country">
                        <p id="countryName" onClick={isCountryOpen ? closeCountry : openCountry}>
                            {isCountryOpen ? '국가▲' : displayedCountry || '국가▼'}
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
                            {isUniversityOpen ? '대학▲' : displayedUniv || '대학▼'}
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
                            {isSelectionCategoryOpen ? '선발유형▲' : displayedExtype || '선발유형▼'}
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
                <div id="hashTagBox">
                    <p>해시태그</p>
                    <div id="hashTags">
                        {hashTags.length > 0 &&
                            hashTags.map((hashTag) => {
                                return (
                                    <div id="hashTag" key={hashTag}>
                                        <p>#{hashTag}</p>
                                    </div>
                                );
                            })}
                        <input 
                            id="hashTagInput"
                            value={input}
                            onChange={onChangeInput}
                            onKeyUp={addTags}
                            onKeyDown={enterHandler}
                            placeholder="#해시태그를 등록해보세요."
                        />
                    </div>
                </div>
                <button type='submit' id='completeBtn'>완료</button>
            </form>
        </PostBody>


    )
}

export default Body;