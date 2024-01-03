import axios from "axios";

export const getInfo = async () => {
  try {
    const response = await axios.get('https://boomarble.com/info', {
      headers: {
        'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNDE3Nzc2MiwiZXhwIjoxNzA0NzgyNTYyfQ.VFK3IZu7g_kVQg6bYibjFBGMHwKZJ5lQdmRMcz94lLI',
      }
    });
    
    console.log(response.data); // 받은 데이터를 콘솔에 출력
    return response.data.universityInfoLists;
  } catch (error) {
    console.error('Error fetching university information:', error);
    throw error;
  }
};