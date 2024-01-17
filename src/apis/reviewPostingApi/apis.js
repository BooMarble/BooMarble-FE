import axios from "axios";
// 게시물 작성하는 함수
export const posting = async(semester, dormitoryName, ) => {
    await axios.post(`https://boomarble.com/reviews`, 
    {reviewCreateDTO: {
      'semester': semester,
      'dormitoryName': dormitoryName,
      'dormitoryDesc': dormitoryDesc,
      'admission': admission,
      'fee': fee,
      'preparationEtc': preparationEtc,
      'transportation': transportation,
      'enrollment': enrollment,
      'program': program,
      'activities': activities,
      'totalCost': totalCost,
      'airfare': airfare,
      'insurance': insurance,
      'costEtc': costEtc,
      'etc': etc,
      'acceptedGrade': '',
      'message': '',
      'universityInfo': {
        'id':selectedUniversity
      },
    },
    subjectListDTO: [
      {
        'code': code,
        'className': className,
        'grade': grade,
        'satisfied': satisfied,
      },
    ]},
    {
        headers: {'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',},
    }).then((response)=>{
        try{
            console.log(response.data);
        } catch (err) {
            console.log(err)
        }
    })
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