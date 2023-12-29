import axios from "axios";

// 검색 게시물 받아오는 함수
export const getSearchInfo = async(searchContent) => {
    let post = [];
    await axios.get(`https://boomarble.com/posts?search=${searchContent}`, {
      headers: {
        'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMzU3MjczOSwiZXhwIjoxNzA0MTc3NTM5fQ.XdcltGt2MDyTnv1kfZghwdYeEZUNyiBEzGB4qUmMma8',
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
          'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMzU3MjczOSwiZXhwIjoxNzA0MTc3NTM5fQ.XdcltGt2MDyTnv1kfZghwdYeEZUNyiBEzGB4qUmMma8',
        }
      }).then((response)=>{
        post = response.data.communityLists;
        console.log(response.data)
    })
    return post;
}
