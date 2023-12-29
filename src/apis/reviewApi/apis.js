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
          'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMzU3MjczOSwiZXhwIjoxNzA0MTc3NTM5fQ.XdcltGt2MDyTnv1kfZghwdYeEZUNyiBEzGB4qUmMma8',
        }
      }).then((response)=>{
        review = response.data.universityInfoLists;
        console.log(response.data)
    })
    return review;
}

