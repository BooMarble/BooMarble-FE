import React, { useState, useEffect } from 'react';
import isEmpty from '../../hooks/isEmpty';
import useInput from "../../hooks/useInput";
import { useNavigate } from 'react-router-dom';
import { PostBody } from './style';
import{ posting, getdropDown } from "../../apis/postingApi/apis";

function Body() {
    // 드롭다운들 담을 곳
    const [countries, setCountries] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [exTypes, setExTypes] = useState([]);
    //선택한 애들
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryEngName, setCountryEngName] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [universityId, setUniversityId] = useState('');
    const [selectedExType, setSelectedExType] = useState('');
    // 각 언어권에서 필요한 정보
    const [testType, setTestType] = useState('');
    const [semester, setSemester] = useState('');
    const [grade, setGrade] = useState('');
    const [level, setLevel] = useState('');
    const [score, setScore] = useState('');
    const [recommendationLetter, setRecommendationLetter] = useState('');
    const [chineseType, setChineseType] = useState('');
    const headers = {'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o'};

    // 드롭다운
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedUniversity('');
        setSelectedExType('');
    }

    const handleUniversityChange = (e) => {
        setSelectedUniversity(e.target.value);
        setSelectedExType('');
    }

    const handleExtypeChange = (e) => {
        setSelectedExType(e.target.value);
    }

    useEffect(() => {
        const fetchCountries = async () => {
            try {
              const response = await fetch('https://boomarble.com/universities', {
                headers: headers,
              });
              if (response.ok) {
                const data = await response.json();
                setCountries(data.countries);
              } else {
                throw new Error('Failed to fetch countries data');
              }
            } catch (error) {
              console.error('Error fetching countries data:', error);
            }
          };
        fetchCountries();
    }, []);

    useEffect(() => {
        if (selectedCountry !== '') {
            const selectedCountryInfo = countries.find(country => country.englishName === selectedCountry);
            if (selectedCountryInfo) {
                setUniversities(selectedCountryInfo.universities);
                setCountryEngName(selectedCountryInfo.englishName);
            } else {
                console.error('Selected country not found');
            }
        }
    }, [selectedCountry, countries]);

    useEffect(() => {
        if (selectedUniversity !== '') {
            const selectedCountryInfo = countries.find(country => country.englishName === selectedCountry);
            const selectedUniversityInfo = selectedCountryInfo?.universities.find(university => university.id === parseInt(selectedUniversity));
            if (selectedUniversityInfo) {
                setExTypes([selectedUniversityInfo.exType]);
                setUniversityId(selectedUniversityInfo.id);
            } else {
                console.error('Selected university not found');
            }
        }
    },  [selectedUniversity, countries, selectedCountry, countryEngName]);

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

    // 등록하기 버튼 누를 시
    const navigate = useNavigate();
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (!title){
            alert('제목을 작성해주세요.');
        }
        else if(!content){
            alert('내용을 작성해주세요.');
        }
        else{
            posting(navigate, title, content, countryEngName, universityId, selectedExType, semester, hashTags)
        }
    }

    return(
        <PostBody>
            <form onSubmit={handleSubmitClick}>
                <input type='text' id='titleInput' placeholder='제목' onChange={onChangeTitle}/>
                <textarea id='textarea' placeholder='내용을 입력하세요.' onChange={onChangeContent}></textarea>
                <div id="dropdownContainer">
                    <label htmlFor="countryDropDown">국가</label>
                    <select id="countryDropDown" onChange={handleCountryChange} value={selectedCountry}>
                        <option value="">대학을 선택하세요</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country.englishName}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="universityDropDown">대학</label>
                    <select id="universityDropDown" onChange={handleUniversityChange} value={selectedUniversity}>
                        <option value="">대학을 선택하세요</option>
                        {universities.map((university, index) => (
                            <option key={index} value={university.id}>
                                {university.name}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="exTypeDropDown">교환유형</label>
                    <select id="exTypeDropDown" onChange={handleExtypeChange} value={selectedExType} disabled={!selectedUniversity}>
                        <option value="">대학을 선택하세요</option>
                        {exTypes.map((exType, index) => (
                            <option key={index} value={exType}>
                                {exType}
                            </option>
                        ))}
                    </select>
                    <input type='text' id='semesterInput' value={semester} placeholder='학기' onChange={(e) => setSemester(e.target.value)} />
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