import axios from "axios";

// 영어권/비영어권인지 받아오는 함수
export const getLangRegion = async(selectedCountry) => {
    let langRegion = '';
    await axios.get(`https://boomarble.com/prediction?country=${selectedCountry}`, {
        headers: {
            'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
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