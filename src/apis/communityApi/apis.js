import axios from "axios";

// 검색 게시물 받아오는 함수
export const getSearchInfo = async(searchContent) => {
    let post = [];
    await axios.get(`https://boomarble.com/posts?search=${searchContent}`, {
      headers: {
        'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',
      }
    }).then((response)=> {
        post = response.data.post;
    })
    return post;
}

// 게시물 받아오는 함수
export const getPostInfo = async() => {
    let post = [];
    await axios.get('https://cors-anywhere.herokuapp.com/https://boomarble.com/posts', {
        headers: {
          'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',
        }
      }).then((response)=>{
        post = response.data.communityLists;
        console.log(response.data)
    })
    return post;
}
