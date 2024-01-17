import { useState, useEffect } from "react";
import { Container, StyledCalendar,PopularKeywordsList, KeywordItem, CommunityPostsContainer, CommunityPostItem} from './style';
import styled from 'styled-components';

function Body() {
  //캘린더
  const [date, setDate] = useState(new Date());
  const headers = {
    'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwNTQxMTkzNCwiZXhwIjoxNzA2MDE2NzM0fQ.t0PaVOz4OO1lY6Pj5cGDOQzL_vArxMbeT6EgHL0pDiE',}
  const onChange = (newDate) => {
    setDate(newDate);};
  const tileContent = ({ date, view }) => {
    const startDate = new Date(2024, 1, 1);
    const endDate = new Date(2024, 1, 18);
    const onClickDate = () => {
      if (date >= startDate && date <= endDate) {
        alert('모집기간');}};
    if (view === 'month') {
      if (date >= startDate && date <= endDate) {
        return <PinkHighlight onClick={onClickDate} />;
      }}
    return null;};
  const PinkHighlight = styled.div`
    width: 100%;height: 20%;
    background-color: pink;
    cursor: pointer;`;
 //인기검색어 조회 
  const [popularKeywords, setPopularKeywords] = useState([]);
  
  useEffect(() => {
    const fetchPopularKeywords = async () => {
      try {
        const response = await fetch('https://boomarble.com/hotKeyWord', {
          headers: headers
        });
        if (response.ok) {
          const data = await response.json();
          setPopularKeywords(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }};
    fetchPopularKeywords();
  }, []);

  //인기 커뮤니티 글
  const [hotPosts, setHotPosts] = useState([]);
  useEffect(() => {
    const fetchHotPosts = async () => {
      try {
        const response = await fetch('https://boomarble.com/posts/hotPosts', {
          headers: headers
        });
        if (response.ok) {
          const data = await response.json();
          setHotPosts(data.communityLists);
        } else {
          throw new Error(`Failed to fetch data. Status: ${response.status}, ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }};
    fetchHotPosts();
  }, []);


  return (
    <div>
      <Container>
      <PopularKeywordsList>
      <h2>인기 검색어</h2>
        {popularKeywords.map((keyword, index) => (
          <KeywordItem key={index}>
            <span>{keyword.rankKeyword}</span>
          </KeywordItem>
        ))}
      </PopularKeywordsList>
      
        <StyledCalendar
          onChange={onChange}
          value={date}
          locale="en-US"
          tileContent={tileContent}
        />
        <CommunityPostsContainer>
        <h2>커뮤니티 인기글</h2>
        {hotPosts.map((post, index) => (
          <CommunityPostItem key={index}>
            <h3>{post.communityTitle}</h3>
            <ul>
              {post.communityTagList.map((tag, tagIndex) => (
                <li key={tagIndex}>{tag}</li>
              ))}
            </ul>
          </CommunityPostItem>
        ))}
      </CommunityPostsContainer>
      </Container>
    </div>
  );
}

export default Body; 