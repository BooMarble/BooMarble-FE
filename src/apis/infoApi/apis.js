import axios from "axios";

export const getInfo = async () => {
  try {
    const response = await axios.get('https://boomarble.com/info', {
      headers: {
        'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDgxMTI5NywiZXhwIjoxNzA1NDE2MDk3fQ.cuY3iR5xtDlQ4XmLvxG_J0v1zBSRjDgQ5T7lk8Oim7o',
      }
    });
    console.log(response.data); // 받은 데이터를 콘솔에 출력
    return response.data.universityInfoLists;
  } catch (error) {
    console.error('Error fetching university information:', error);
    throw error;
  }
};