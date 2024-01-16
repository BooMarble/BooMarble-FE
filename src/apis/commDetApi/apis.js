import axios from "axios";

// 게시물 받아오는 함수
export const getPostInfo = async (postId) => {
    let nickName = '';
    let title = '';
    let content = '';
    let hashTags = [];

    await axios.get(`https://boomarble.com/posts/${postId}`, {
        headers: {
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o`,
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

// 댓글 받아오는 함수
export const getCommentInfo = async (postId) => {
    let commentsLists = []
    await axios.get(`https://boomarble.com/posts/${postId}/comments`, {
        headers: {
            'X-AUTH-TOKEN' : 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
        },  
    }).then((response)=>{
        commentsLists = response.data;
    })
    return commentsLists
}

// 댓글 작성하는 함수
export const addComment = async(navigate, postId, commentContent) => {
    let commentId = '';
    await axios.post(`https://boomarble.com/posts/${postId}/comments`,{"content": commentContent}, 
    {
        headers: {
            'X-AUTH-TOKEN' : 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
        },
    }).then((response)=>{
        console.log(response)
        // 성공 시
        if (response.status === 200){
            commentId = response.data.slice(23,25);
            console.log(commentId)
            // navigate(`/posts/${postId}`, {state: {'commentId': commentId}});
        }
        //실패 시
        else{
            alert("잠시 후 다시 시도해주세요.");
        }
    })
}

// 스크랩하는 함수
export const scrapping = async (postId) => {
    try {
      const response = await axios.post(
        `https://boomarble.com/posts/${postId}/scrap`,
        {},
        {
          headers: {
            'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
          },
        }
      );
  
      if (response.status === 200) {
        console.log('스크랩 완료');
      } else {
        console.log('스크랩 실패', response.status);
      }
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };
  

// 스크랩 취소하는 함수
export const notScrapping = async(postId) => {
    await axios.delete(`https://boomarble.com/posts/${postId}/scrap`, 
    {
        headers: {
        'X-AUTH-TOKEN' : 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
    },
}).then((response) => {
    if (response.status === 200) {
        console.log("스크랩 취소")
    }
})
}
