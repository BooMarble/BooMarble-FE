import axios from "axios";

// 게시물 작성하는 함수
export const posting = async(navigate, title, content, country, universityId, exType, semester, hashTags) => {
    await axios.post(`https://boomarble.com/posts`, 
    {
        'postTitle':title, 
        'postContent':content, 
        'postCountry':country, 
        'postUniversityId':universityId, 
        'postExType':exType, 
        'postSemester':semester, 
        'postTags':hashTags
    },
    {
        headers: {
            'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMzU3MjczOSwiZXhwIjoxNzA0MTc3NTM5fQ.XdcltGt2MDyTnv1kfZghwdYeEZUNyiBEzGB4qUmMma8',
        },
    }).then((response)=>{
        //성공 시
        if (response.request.status === 200) {
            alert('완료');
        }
        // 실패 시
        else{
            alert('잠시 후 다시 시도해주세요.')
        }
    })
}

// 드롭다운 받아오는 함수
export const getdropDown = async() => {
    await axios.get(`https://boomarble.com/info`, {
        headers: {
            'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMzU3MjczOSwiZXhwIjoxNzA0MTc3NTM5fQ.XdcltGt2MDyTnv1kfZghwdYeEZUNyiBEzGB4qUmMma8',
        }
    }).then((response)=>{
        countries = response.data.countries;
        console.log(response.data)
    })
    return countries;
}