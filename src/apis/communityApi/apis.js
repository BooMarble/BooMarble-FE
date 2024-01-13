import axios from "axios";

// 검색 게시물 받아오는 함수
export const getSearchInfo = async(searchContent) => {
    let post = [];
    await axios.get(`https://boomarble.com/posts?search=${searchContent}`, {
      headers: {
        'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
      }
    }).then((response)=> {
        post = response.data.post;
    })
    return post;
}

// 게시물 받아오는 함수
export const getPostInfo = async() => {
    let post = [];
    await axios.get('https://boomarble.com/posts', {
        headers: {
          'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJramltaW5AaHVmcy5hYy5rciIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNzA1MTM5NTU1LCJleHAiOjE3MDU3NDQzNTV9.DpKl33LcFYc1jLUwpeRxt4z4KZGZZBBX7QbUXHpTnGk',
        }
      }).then((response)=>{
        post = response.data.communityLists;
        console.log(response.data)
    })
    return post;
}
