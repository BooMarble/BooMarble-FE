import React, { useState, useEffect } from "react";
import { fetchCountries, getLangRegion, postEnglishUser, postJapaneseUser, postChineseUser } from "../../apis/predictionApi/apis";
import {FormContainer,Label,Select,Button,Container,Input} from "./style";
function Body() {
    // 드롭다운들 담을 곳
    const [countries, setCountries] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [exTypes, setExTypes] = useState([]);
    //선택한 애들
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [selectedExType, setSelectedExType] = useState('');
    const [exTypesEng, setExTypesEng] = useState('');
    // 각 언어권에서 필요한 정보
    const [testType, setTestType] = useState('');
    const [semester, setSemester] = useState('');
    const [grade, setGrade] = useState('');
    const [level, setLevel] = useState('');
    const [score, setScore] = useState('');
    const [recommendationLetter, setRecommendationLetter] = useState(false);
    const [chineseType, setChineseType] = useState('');
    const headers = {'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE'};
    //모의지원 최종 결과 보여주기
    const [searchResult, setSearchResult] = useState(null);
    const [precautions, setPrecautions] = useState([]);
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
                setExTypesEng(selectedUniversityInfo.englishExType);
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
    const handleApiResponse = (response) => {
        setSearchResult(response.data);
        setPrecautions(response.data.precautions);};
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
    
            if (langRegion === 'english') {
                response = await postEnglishUser(semester, selectedCountry, selectedUniversity, exTypesEng, grade, testType, score);
            } else if (langRegion === 'japanese') {
                response = await postJapaneseUser(semester, selectedCountry, selectedUniversity, exTypesEng, grade, level, score, recommendationLetter);
            } else if (langRegion === 'chinese') {
                response = await postChineseUser(semester, selectedCountry, selectedUniversity, exTypesEng, grade, level, score, chineseType, testType);
            }
    
            console.log('API Response:', response); // Log the entire response object
    
            handleApiResponse(response);
        } catch (error) {
            console.log('Error in handleOnSubmit:', error);
            // Handle the error as needed
        }
    };
    return (
        <FormContainer onSubmit={handleOnSubmit}>
            <Label htmlFor="countryDropDown">국가</Label>
            <Select id="countryDropDown" onChange={handleCountryChange} value={selectedCountry}>
                <option value="">국가를 선택하세요</option>
                {countries.map((country, index) => (
                    <option key={index} value={country.englishName}>
                        {country.name}
                    </option>
                ))}
            </Select>
            <Label htmlFor="universityDropDown">대학</Label>
            <Select id="universityDropDown" onChange={handleUniversityChange} value={selectedUniversity}>
                <option value="">대학을 선택하세요</option>
                {universities.map((university, index) => (
                    <option key={index} value={university.id}>
                        {university.name}
                    </option>
                ))}
            </Select>
            <Label htmlFor="exTypeDropDown">교환유형</Label>
            <Select id="exTypeDropDown" onChange={handleExtypeChange} value={selectedExType} disabled={!selectedUniversity}>
                <option value="">교환 유형을 선택하세요</option>
                {exTypes.map((exType, index) => (
                    <option key={index} value={exType}>
                        {exType}
                    </option>
                ))}
            </Select>
            <Container>
            {countryFlag === 1 && (
                <div id="english">
                    <Label htmlFor="semesterInput">Semester</Label>
                    <Input
                        type="text"
                        id="semesterInput"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                    />
                    <Label htmlFor="gradeInput">Grade</Label>
                    <Input
                        type="text"
                        id="gradeInput"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                    <Label htmlFor="testTypeDropdown">Test Type</Label>
                    <Select
                        id="testTypeDropdown"
                        onChange={(e) => setTestType(e.target.value)}
                        value={testType}
                    >
                        <option value="">Select Test Type</option>
                        <option value="IBT">IBT</option>
                        <option value="TOEFL">TOEFL</option>
                        <option value="IELTS">IELTS</option>
                    </Select>
                    <Label htmlFor="scoreInput">Score</Label>
                    <Input
                        type="text"
                        id="scoreInput"
                        value={score}
                        placeholder="점수를 입력하세요"
                        onChange={(e) => setScore(e.target.value)}
                    />
                </div>
            )}

            {countryFlag === 2 && (
                <div id="japanese">
                    <Label htmlFor="semesterInput">Semester</Label>
                    <Input
                        type="text"
                        id="semesterInput"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                    />
                    <Label htmlFor="gradeInput">Grade</Label>
                    <Input
                        type="text"
                        id="gradeInput"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                    <Label htmlFor="levelDropdown">Level</Label>
                    <Select
                        id="levelDropdown"
                        onChange={(e) => setLevel(e.target.value)}
                        value={level}
                    >
                        <option value="">Select Level</option>
                        <option value="N1">N1</option>
                        <option value="N2">N2</option>
                        <option value="N3">N3</option>
                        <option value="N4">N4</option>
                        <option value="N5">N5</option>
                    </Select>
                    <Label htmlFor="scoreInput">Score</Label>
                    <Input
                        type="text"
                        id="scoreInput"
                        value={score}
                        placeholder="점수를 입력하세요"
                        onChange={(e) => setScore(e.target.value)}
                    />
                    <Label htmlFor="recommendationLetterDropdown">Recommendation Letter</Label>
                    <Select
                     id="recommendationLetterDropdown"
                     onChange={(e) => setRecommendationLetter(e.target.value === 'true')}
                     value={recommendationLetter ? 'true' : 'false'}
>
                   <option value="">Select Recommendation Letter</option>
                   <option value="true">Yes</option>
                   <option value="false">No</option>
                   </Select>
                </div>
            )}
            {countryFlag === 3 && (
                <div id="chinese">
                    <Label htmlFor="semesterInput">Semester</Label>
                    <Input
                        type="text"
                        id="semesterInput"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                    />
                    <Label htmlFor="gradeInput">Grade</Label>
                    <Input
                        type="text"
                        id="gradeInput"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                    <Label htmlFor="levelDropdown">Level</Label>
                    <Select
                        id="levelDropdown"
                        onChange={(e) => setLevel(e.target.value)}
                        value={level}
                    >
                        <option value="">Select Level</option>
                        <option value="1급">1급</option>
                        <option value="2급">2급</option>
                        <option value="3급">3급</option>
                        <option value="4급">4급</option>
                        <option value="5급">5급</option>
                    </Select>
                    <Label htmlFor="scoreInput">Score</Label>
                    <Input
                        type="text"
                        id="scoreInput"
                        value={score}
                        placeholder="점수를 입력하세요"
                        onChange={(e) => setScore(e.target.value)}
                    />
                    <Select
                        id="chineseTypeDropdown"
                        onChange={(e) => setChineseType(e.target.value)}
                        value={chineseType}>
                        <option value="">Select Chinese Type</option>
                        <option value="LT">LT</option>
                        <option value="UG">UG</option>
                        <option value="etc">etc</option>
                    </Select>
                    <Select
                        id="testType"
                        onChange={(e) => setTestType(e.target.value)}
                        value={testType}>
                        <option value="">Select Test Type</option>
                        <option value="HSK">HSK</option>
                        <option value="TOCFL">TOCFL</option>
                    </Select>
                </div>
            )}
            </Container>
            <Button type="submit" id="completeBtn">Search</Button>   
              {/*Result*/}
              {searchResult && searchResult.numOfApplicant !== undefined && (
    <div>
        <p>지원자 수: {searchResult.numOfApplicant}</p>
        {/*rangkings*/}
        {searchResult.rankings && searchResult.rankings.map((ranking, index) => (
            <div key={index}>
                <p>Score: {ranking.score}</p>
                <p>Rank: {ranking.rankNum}</p>
                <p>User ID: {ranking.userId}</p>
                <p>User: {ranking.user.toString()}</p>
            </div>
        ))}
        {/*precautions*/}
        <ul>
            {precautions && precautions.map((precaution, index) => (
                <li key={index}>{precaution}</li>
            ))}
        </ul>
    </div>
)}
        </FormContainer>

    );
}

export default Body;