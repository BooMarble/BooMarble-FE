import axios from "axios";

// 게시물 받아오는 함수
export const getPostInfo = async (postId) => {
    let nickName = '';
    let title = '';
    let content = '';
    let hashTags = [];

    await axios.get(`https://boomarble.com/posts/${postId}`, {
        headers: {
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDE3Nzc2MiwiZXhwIjoxNzA0NzgyNTYyfQ.VFK3IZu7g_kVQg6bYibjFBGMHwKZJ5lQdmRMcz94lLI`,
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