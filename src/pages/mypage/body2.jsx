import React, { useState, useEffect } from "react";
import { fetchCountries, getLangRegion, postEnglishUser } from "../../apis/mypageApi/apis";

function Body() {
    // 드롭다운들 담을 곳
    const [countries, setCountries] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [exTypes, setExTypes] = useState([]);
    //선택한 애들
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('');
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
            } else {
                console.error('Selected university not found');
            }
        }
    },  [selectedUniversity, countries, selectedCountry]);

    // search 누르지 말고 언어권 바로 분류받기
    const [langRegion, setLangRegion] = useState('');
    const findLangRegion = async () => {
        // 정상 접근 시
        try {
            const langRegionInfo = await getLangRegion(selectedCountry);
            setLangRegion(langRegionInfo);
        } catch (err) {
            // 비정상 접근 시
            console.log(err)
        }
    }

    useEffect(() => {
        // 언어권 받아오기
        if (selectedCountry !== '') {
            findLangRegion();
        }
    }, [selectedCountry]);

    const [countryFlag, setCountryFlag] = useState(0);

    useEffect(() => {
        // 그 언어권에 맞게 드롭다운 다르게 띄우기
        if (langRegion === 'english') {
            setCountryFlag(1)
        } else if (langRegion === 'japanese') {
            setCountryFlag(2)
        } else if (langRegion === 'chinese') {
            setCountryFlag(3)
        }
    }, [langRegion])

    // search 누를 시
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await postEnglishUser(semester, selectedCountry, selectedUniversity, selectedExType, grade, testType, score)
    }

    return (
        <form onSubmit={handleOnSubmit}>
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
            {countryFlag === 1 && (
                <div id="english">
                    <label htmlFor="semesterInput">Semester</label>
                    <input
                        type="text"
                        id="semesterInput"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                    />
                    <label htmlFor="gradeInput">Grade</label>
                    <input
                        type="text"
                        id="gradeInput"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                    <label htmlFor="testTypeDropdown">Test Type</label>
                    <select
                        id="testTypeDropdown"
                        onChange={(e) => setTestType(e.target.value)}
                        value={testType}
                    >
                        <option value="">Select Test Type</option>
                        <option value="IBT">IBT</option>
                        <option value="TOEFL">TOEFL</option>
                        <option value="IELTS">IELTS</option>
                    </select>
                    <label htmlFor="scoreInput">Score</label>
                    <input
                        type="text"
                        id="scoreInput"
                        value={score}
                        placeholder="점수를 입력하세요"
                        onChange={(e) => setScore(e.target.value)}
                    />
                </div>
            )}
            <button type="submit" id="completeBtn">Search</button>            
        </form>
    );
}

export default Body;