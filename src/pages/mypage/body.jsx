import React, { useState, useEffect } from "react";
import { getLangRegion, postEnglishUser } from "../../apis/mypageApi/apis";
//모의지원 검색 결과(내 등수, 내 위 2명 등수, 내 아래 2명 등수)는 아직 구현 못한 상태
function Body() {
  const [countries, setCountries] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [exTypes, setExTypes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedExType, setSelectedExType] = useState('');
  const [testType, setTestType] = useState('');
  const [semester, setSemester] = useState('');
  const [grade, setGrade] = useState('');
  const [level, setLevel] = useState('');
  const [score, setScore] = useState('');
  const [recommendationLetter, setRecommendationLetter] = useState('');
  const [chineseType, setChineseType] = useState('');
  const headers = {'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o'};

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedUniversity('');
    setSelectedExType('');}; 

  const handleUniversityChange = (event) => {
    setSelectedUniversity(event.target.value);
    setSelectedExType('');};

  const handleExTypeChange = (event) => {
    setSelectedExType(event.target.value);};

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
  }, [selectedUniversity, countries, selectedCountry]);

  // search 누르지 말고 언어권 바로 분류받기
  const [langRegion, setLangRegion] = useState('');
  const findLangRegion = async () => {
    //정상 접근 시
    try {
      const langRegionInfo = await getLangRegion(selectedCountry);
      setLangRegion(langRegionInfo);
    } catch (err) {
      // 비정상 접근 시
      console.log(err)
    }
  }

  useEffect(()=>{
    // 언어권 받아오기
    if (selectedCountry !== '') {
      findLangRegion();
    } 
  }, [selectedCountry]);

  const [countryFlag, setCountryFlag] = useState(0);

  useEffect(()=>{
    // 그 언어권에 맞게 드롭다운 다르게 띄우기
    if (langRegion === 'english') {
      setCountryFlag(1)
    } else if (langRegion === 'japanese') {
      setCountryFlag(2)
    } else if (langRegion === 'chinese') {
      setCountryFlag(3)
    }
  },[langRegion]);

  // search 버튼 눌렀을 때

  // const handleSearch = async () => {
  //   try {
  //     let apiUrl = '';
  //     let requestBody = {};

  //     if (selectedCountry === 'Japanese') {
  //       apiUrl = 'https://boomarble.com/prediction/japanese';
  //       requestBody = {
  //         semester: semester,
  //         country: selectedCountry,
  //         universityId: selectedUniversity,
  //         exType: selectedExType,
  //         grade: parseFloat(grade),
  //         level: level,
  //         score: parseInt(score),
  //         hasRecommendationLetter: recommendationLetter === 'yes' ? true : false
  //       };
  //     } else if (selectedCountry === 'Chinese') {
  //       apiUrl = 'https://boomarble.com/prediction/chinese';
  //       requestBody = {
  //         semester: semester,
  //         country: selectedCountry,
  //         universityId: selectedUniversity,
  //         exType: selectedExType,
  //         grade: parseFloat(grade),
  //         level: level,
  //         score: parseInt(score),
  //         chineseType: chineseType,
  //         testType: testType
  //       };
  //     } else if (selectedCountry === 'English') {
  //       apiUrl = 'https://boomarble.com/prediction/english';
  //       requestBody = {
  //         semester: semester,
  //         country: selectedCountry,
  //         universityId: selectedUniversity,
  //         exType: selectedExType,
  //         grade: parseFloat(grade),
  //         testType: testType,
  //         score: parseFloat(score)
  //       };
  //     }

  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'X-AUTH-TOKEN': headers['X-AUTH-TOKEN']
  //       },
  //       body: JSON.stringify(requestBody)
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log('API 응답 데이터:', data);
  //     } else {
  //       throw new Error('Failed to fetch prediction data');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching prediction data:', error);
  //   }
  // };
  return (
    <div>
      <div>
        <label htmlFor="countryDropdown">Country</label>
        <select id="countryDropdown" onChange={handleCountryChange} value={selectedCountry}>
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.englishName}>
              {country.name}
            </option>
          ))}
        </select>
  
        <label htmlFor="universityDropdown">University</label>
        <select id="universityDropdown" onChange={handleUniversityChange} value={selectedUniversity}>
          <option value="">Select University</option>
          {universities.map((university, index) => (
            <option key={index} value={university.id}>
              {university.name}
            </option>
          ))}
        </select>
  
        <label htmlFor="exTypeDropdown">Exchange Type</label>
        <select id="exTypeDropdown" onChange={handleExTypeChange} value={selectedExType} disabled={!selectedUniversity}>
          <option value="">Select Exchange Type</option>
          {exTypes.map((exType, index) => (
            <option key={index} value={exType}>
              {exType}
            </option>
          ))}
        </select>
  
  { countryFlag === 2 && (
  <>
    {/*Japanese */}
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
    <label htmlFor="levelInput">Level</label>
    <input
      type="text"
      id="levelInput"
      value={level}
      onChange={(e) => setLevel(e.target.value)}
    />
    <label htmlFor="scoreInput">Score</label>
    <input
      type="text"
      id="scoreInput"
      value={score}
      onChange={(e) => setScore(e.target.value)}
    />
    <label htmlFor="recommendationLetterDropdown">Recommendation Letter</label>
    <select
      id="recommendationLetterDropdown"
      onChange={(e) => setRecommendationLetter(e.target.value)}
      value={recommendationLetter}>
      <option value="">Select</option>
      <option value="T">Yes</option>
      <option value="F">No</option>
    </select>
  </>
)}
  
  {countryFlag === 3 && (
  <>
    {/*Chinese*/}
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

    <label htmlFor="levelInput">Level</label>
    <input
      type="text"
      id="levelInput"
      value={level}
      onChange={(e) => setLevel(e.target.value)}
    />

    <label htmlFor="scoreInput">Score</label>
    <input
      type="text"
      id="scoreInput"
      value={score}
      onChange={(e) => setScore(e.target.value)}
    />

    <label htmlFor="chineseTypeInput">Chinese Type</label>
    <input
      type="text"
      id="chineseTypeInput"
      value={chineseType}
      onChange={(e) => setChineseType(e.target.value)}
    />

    <label htmlFor="testTypeInput">Test Type</label>
    <input
      type="text"
      id="testTypeInput"
      value={testType}
      onChange={(e) => setTestType(e.target.value)}
    />
  </>
)}

  
  {countryFlag === 1 && (
  <>
    {/*English*/}
    <label htmlFor="semesterInput">Semester</label>
    <input
      type="text"
      id="semesterInput"
      value={semester}
      placeholder="학기를 입력하세요"
      onChange={(e) => setSemester(e.target.value)}
    />

    <label htmlFor="gradeInput">Grade</label>
    <input
      type="text"
      id="gradeInput"
      value={grade}
      placeholder="학점을 입력하세요"
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
  </>
)}
  
        <button>Search</button>
      </div>
    </div>
  );
}
  export default Body;