import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InformationPageBody = () => {
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [university, setUniversity] = useState('');
  const [universityInfoLists, setUniversityInfoLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUniversityInfo();
  }, [country, type, university]);

  const fetchUniversityInfo = async () => {
    setLoading(true);
    try {
      // Construct the URL based on selected filters
      let apiUrl = `http://boomarvel.com/info`;
      if (country || type || university) {
        apiUrl += `?`;
        if (country) apiUrl += `country=${country}&`;
        if (type) apiUrl += `type=${type}&`;
        if (university) apiUrl += `university=${university}&`;
      }

      // Fetch data using axios with the token in headers
      const response = await axios.get(apiUrl, {
        headers: {
          'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMTU4NzYwOCwiZXhwIjoxNzAyMTkyNDA4fQ.mpDHqhkVl5DUepfqFPiKo_8LEqjumhLaohAegdlAqTk'
        }
      });

      // Set the fetched data to state
      setUniversityInfoLists(response.data.universityInfoLists);
      console.log(response.data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching university info:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Select boxes for country, type, and university */}
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {/* Options for countries */}
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        {/* Options for types */}
      </select>
      <select value={university} onChange={(e) => setUniversity(e.target.value)}>
        {/* Options for universities */}
      </select>

      {/* Display fetched university info */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {universityInfoLists.map((info, index) => (
            <div key={index}>
              <p>University Name: {info.universityName}</p>
              <p>Country: {info.universityCountry}</p>
              <p>Type: {info.universityType}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InformationPageBody;
