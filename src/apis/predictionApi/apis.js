import axios from "axios";

// 영어권/비영어권인지 받아오는 함수
export const getLangRegion = async(selectedCountry) => {
    let langRegion = '';
    await axios.get(`https://boomarble.com/prediction?country=${selectedCountry}`, {
        headers: {
            'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',
        }
    }).then((response) => {
        langRegion = response.data;
        console.log(response.data)
    })
    return langRegion;
}

// 영어권: 유저 스펙 보내는 함수
export const postEnglishUser = async (semester, selectedCountry, selectedUniversity, exTypesEng, grade, testType, score) => {
    try {
        const response = await axios.post(`https://boomarble.com/prediction/english`,
            {
                "semester": semester,
                "country": selectedCountry,
                "universityId": parseInt(selectedUniversity),
                "exType": exTypesEng,
                "grade": parseFloat(grade),
                "testType": testType,
                "score": parseFloat(score)
            },
            {
                headers: {
                    'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
                },
            });
        console.log(response.data.numOfApplicant);
    } catch (error) {
        console.log(error.response.data);

    }
}
// 일본어권: 유저 스펙 보내는 함수
export const postChineseUser = async (semester, selectedCountry, selectedUniversity, exTypesEng, grade, level, score,hasRecomendationLetter) => {
    let pre=[]
    try {
        const response = await axios.post(`https://boomarble.com/prediction/japanese`,
            {
                "semester": semester,
                "country": selectedCountry,
                "universityId": parseInt(selectedUniversity),
                "exType": exTypesEng,
                "grade": parseFloat(grade),
                "level": level,
                "score": parseFloat(score),
                "hasRecomendationLetter":hasRecomendationLetter
            },
            {
                headers: {
                    'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
                },
            });
        console.log(response.data.rankings);
        pre=response.data.rangkings
    } catch (error) {
        console.log(error.response.data);
    }
    return pre;
}
// 중국어권: 유저 스펙 보내는 함수
export const postJapaneseUser = async (semester, selectedCountry, selectedUniversity, exTypesEng, grade, level, score, chineseType, testType) => {
    try {
        const response = await axios.post(`https://boomarble.com/prediction/chinese`,
            {
                "semester": semester,
                "country": selectedCountry,
                "universityId": parseInt(selectedUniversity),
                "exType": exTypesEng,
                "grade": parseFloat(grade),
                "level": level,
                "score": parseFloat(score),
                "chineseType": chineseType,
                "testType": testType
            },
            {
                headers: {
                    'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
                },
            });
        console.log(response.data.numOfApplicant);
    } catch (error) {
        console.log(error.response.data);

    }
}