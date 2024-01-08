import React, { useState, useEffect } from "react";

function Body() {
  const [countries, setCountries] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [exTypes, setExTypes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedExType, setSelectedExType] = useState('');
  
  const headers = {
    'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDE3Nzc2MiwiZXhwIjoxNzA0NzgyNTYyfQ.VFK3IZu7g_kVQg6bYibjFBGMHwKZJ5lQdmRMcz94lLI'};

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedUniversity('');
    setSelectedExType('');
  }; 

  const handleUniversityChange = (event) => {
    setSelectedUniversity(event.target.value);
    setSelectedExType('');
  };

  const handleExTypeChange = (event) => {
    setSelectedExType(event.target.value);
  };

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

  const handleSearch = async () => {
    try {
      let languageType = 'english'; // 기본적으로 영어권으로 설정
      
      const selectedCountryInfo = countries.find(country => country.englishName === selectedCountry);
      if (selectedCountryInfo) {
        const { englishName } = selectedCountryInfo;
        if (englishName === 'CHN') {
          languageType = 'chinese';
        } else if (englishName === 'JPN') {
          languageType = 'japanese';
        }
      }

      const response = await fetch(`https://boomarble.com/prediction?country=${selectedCountry}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-AUTH-TOKEN': headers['X-AUTH-TOKEN']
        }
      });

      if (response.ok) {
        const data = await response.text();
        console.log('API 응답 데이터:', data);
      } else {
        throw new Error('Failed to fetch language data');
      }
    } catch (error) {
      console.error('Error fetching language data:', error);
    }
  };

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

        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Body;
