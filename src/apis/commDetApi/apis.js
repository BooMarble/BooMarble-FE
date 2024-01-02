import axios from "axios";

// 게시물 받아오는 함수
export const getPostInfo = async (postId) => {
    let nickName = '';
    let title = '';
    let content = '';
    let hashTags = [];

    await axios.get(`http//boomarble.com/posts/${postId}`, {
        headers: {
            'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMzU3MjczOSwiZXhwIjoxNzA0MTc3NTM5fQ.XdcltGt2MDyTnv1kfZghwdYeEZUNyiBEzGB4qUmMma8',
        }
    }).then((response) => {
        nickName = response.data.communityWriter.nickname;
        title = response.data.title;
        content = response.data.content;
        hashTags = response.data.communityTagList;
        console.log(response.data)
    })
    return [nickName, title, content, hashTags]
}