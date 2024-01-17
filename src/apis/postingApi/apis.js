import axios from "axios";

// 게시물 작성하는 함수
export const posting = async(navigate, title, content, selectedCountry, selectedUniversity, exTypesEng, selectedSemester, hashTags) => {
    await axios.post(`https://boomarble.com/posts`, 
    {
        'postTitle':title, 
        'postContent':content, 
        'postCountry':selectedCountry, 
        'postUniversityId': selectedUniversity, 
        'postExType': exTypesEng, 
        'postSemester': selectedSemester, 
        'postTags':hashTags
    },
    {
        headers: {
            'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',
        },
    }).then((response)=>{
        try{
            console.log(response.data);
        } catch (err) {
            console.log(err)
        }
        // //성공 시
        // if (response.request.status === 200) {
        //     alert('완료');
        // }
        // // 실패 시
        // else{
        //     alert('잠시 후 다시 시도해주세요.')
        // }
    })
}

// 드롭다운 받아오는 함수
export const getdropDown = async() => {
    let countries = []
    await axios.get(`https://boomarble.com/universities`, {
        headers: {
            'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
        }
    }).then((response)=>{
        countries = response.data.countries;
        console.log(response.data)
    })
    return countries;
  }