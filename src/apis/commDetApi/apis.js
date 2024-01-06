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

// // 댓글 받아오는 함수
// export const getCommentInfo = async (postId) => {
//     let commentId = '';
//     let commentContent = '';
//     await axios.get(`https://boomarble.com/posts/${postId}/comments`, {
//         headers: {
//             'X-AUTH-TOKEN' : 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDE3Nzc2MiwiZXhwIjoxNzA0NzgyNTYyfQ.VFK3IZu7g_kVQg6bYibjFBGMHwKZJ5lQdmRMcz94lLI',
//         },  
//     }).then((response)=>{
//         console.log(response.data)
//     })
// }

// 댓글 작성하는 함수
export const addComment = async(navigate, postId, commentContent) => {
    let commentId = '';
    await axios.post(`https://boomarble.com/posts/${postId}/comments`,{"content": commentContent}, 
    {
        headers: {
            'X-AUTH-TOKEN' : 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDE3Nzc2MiwiZXhwIjoxNzA0NzgyNTYyfQ.VFK3IZu7g_kVQg6bYibjFBGMHwKZJ5lQdmRMcz94lLI',
        },
    }).then((response)=>{
        // 성공 시
        if (response.data.slice(0,18) === '댓글이 정상적으로 등록되었습니다.'){
            commentId = response.data.slice(23,25);
            navigate(`/posts/${postId}`, {state: {'commentId': commentId}});
        }
        //실패 시
        else{
            alert("잠시 후 다시 시도해주세요.");
        }
    })
}