import React, { useState } from 'react';
import isEmpty from '../../hooks/isEmpty';
import useInput from "../../hooks/useInput";
import { useNavigate } from 'react-router-dom';
import { PostBody, DropdownContainer, CountryDropdown, UniversityDropdown, TypeDropdown } from './style';
// import posting from "../../apis/postingApi";

function Body() {

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
    // const handleOnSubmit = (e) => {
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
                <div id="hashTag">
                    <p>해시태그</p>
                    <div>
                        {hashTags.length > 0 &&
                            hashTags.map((hashTag) => {
                                return (
                                    <div key={hashTag}>
                                        #{hashTag}
                                    </div>
                                );
                            })}
                    </div>
                    <input 
                        id="hashTagInput"
                        value={input}
                        onChange={onChangeInput}
                        onKeyUp={addTags}
                        onKeyDown={enterHandler}
                        placeholder="#해시태그를 등록해보세요."
                    />
                </div>

                {/* <DropdownContainer>
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
                </DropdownContainer> */}
                <button type='submit' id='completeBtn'>등록하기</button>
            </form>
        </PostBody>


    )
}

export default Body;