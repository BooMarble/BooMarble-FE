import axios from "axios";

// const serverApi = axios.create({
//     headers: {
//         'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMTU4NzYwOCwiZXhwIjoxNzAyMTkyNDA4fQ.mpDHqhkVl5DUepfqFPiKo_8LEqjumhLaohAegdlAqTk',
//     },
// });



// review 게시물 받아오는 함수
export const getReviewInfo = async() => {
    let review = [];
    await axios.get('https://boomarble.com/reviews?', {
        headers: {
          'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
        }
      }).then((response)=>{
        review = response.data.universityInfoLists;
        console.log(response.data)
    })
    return review;
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


