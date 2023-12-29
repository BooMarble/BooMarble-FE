import React, { useEffect, useState } from 'react';
import { getInfo } from '../../apis/infoApi/apis';
import { Link } from 'react-router-dom';
import { LinkStyle, CountryDropdown, UniversityDropdown, TypeDropdown,
  DropdownContainer, UniversityInfoContainer, UniversityList, UniversityListItem, Univlist } from './style';

const Body = () => {
  const [universityInfo, setUniversityInfo] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [universitiesBySelectedCountry, setUniversitiesBySelectedCountry] = useState([]);
  const [typesBySelectedUniversity, setTypesBySelectedUniversity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await getInfo();
        setUniversityInfo(info);

        // 국가 목록 추출
        const countriesList = info.map((info) => info.universityCountry);
        const uniqueCountries = Array.from(new Set(countriesList));
        setCountries(uniqueCountries);

        // 모든 대학 및 타입 목록 추출
        const universitiesList = info.map((info) => info.universityName);
        const uniqueUniversities = Array.from(new Set(universitiesList));
        setUniversitiesBySelectedCountry(uniqueUniversities);

        const typesList = info.map((info) => info.universityType);
        const uniqueTypes = Array.from(new Set(typesList));
        setTypesBySelectedUniversity(uniqueTypes);
      } catch (error) {
        console.error('Error fetching university information:', error);
      }
    };

    fetchData();
  }, []);

  // 국가 선택 시 해당 국가의 대학 목록을 설정
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);

    // 선택한 국가에 해당하는 대학 및 타입 목록 추출
    const universitiesByCountry = universityInfo
      .filter((info) => info.universityCountry === selectedCountry)
      .map((info) => info.universityName);
    setUniversitiesBySelectedCountry(universitiesByCountry);

    // 모든 대학에서 선택된 국가에 해당하는 타입 목록 추출
    const typesByUniversity = universityInfo
      .filter((info) => info.universityCountry === selectedCountry)
      .map((info) => info.universityType);
    const uniqueTypes = Array.from(new Set(typesByUniversity));
    setTypesBySelectedUniversity(uniqueTypes);

    setSelectedUniversity(''); // 국가 변경 시 대학 선택 초기화
    setSelectedType(''); // 국가 변경 시 타입 선택 초기화
  };

  return (
    <UniversityInfoContainer>
      <DropdownContainer>
      <CountryDropdown onChange={handleCountryChange} value={selectedCountry}>
        <option value="">국가</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </CountryDropdown>

      <UniversityDropdown onChange={(e) => setSelectedUniversity(e.target.value)} value={selectedUniversity}>
        <option value="">대학</option>
        {universitiesBySelectedCountry.map((university, index) => (
          <option key={index} value={university}>
            {university}
          </option>
        ))}
      </UniversityDropdown>

      <TypeDropdown onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
        <option value="">선발유형</option>
        {typesBySelectedUniversity.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </TypeDropdown>
      </DropdownContainer>

      <UniversityList>
        {universityInfo
          .filter(
            (info) =>
              (selectedCountry === '' || info.universityCountry === selectedCountry) &&
              (selectedUniversity === '' || info.universityName === selectedUniversity) &&
              (selectedType === '' || info.universityType === selectedType)
          )
          .map((info, index) => (
            <UniversityListItem key={index}>
              <LinkStyle as={Link} to={`/info/${info.id}`}>
                <b>{info.universityName}</b>
                <p>#{info.universityCountry}</p>
                <p>#{info.universityType}</p>
              </LinkStyle>
            </UniversityListItem>
          ))}
      </UniversityList>

    </UniversityInfoContainer>
  );
};

export default Body;