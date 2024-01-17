import axios from "axios";

export const getInfo = async () => {
  try {
    const response = await axios.get('https://boomarble.com/info', {
      headers: {
        'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',
      }
    });
    console.log(response.data); // 받은 데이터를 콘솔에 출력
    return response.data.universityInfoLists;
  } catch (error) {
    console.error('Error fetching university information:', error);
    throw error;
  }
};
//좋아요 post
export const liking = async (universityId) => {
  try {
    const response = await axios.post(
      `https://boomarble.com/info/${universityId}/like`,
      {},
      {
        headers: {
          'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',
        },
      }
    );

    if (response.status === 200) {
      console.log('좋아요 완료');
    } else {
      console.log('좋아요 실패', response.status);
    }
  } catch (error) {
    console.error('에러 발생:', error);
  }
};


//좋아요 취소하는 함수
export const notLiking = async(universityId) => {
  await axios.delete(`https://boomarble.com/info/${universityId}/like`, 
  {
      headers: {
      'X-AUTH-TOKEN' : 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',
  },
}).then((response) => {
  if (response.status === 200) {
      console.log("좋아요 취소")
  }
})
}