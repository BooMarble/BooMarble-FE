import { Container,DetailContainer,DormName, DormDes} from './style';
function Body() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;
  // const pagesPerGroup = 5;
  // const startItemIndex = (currentPage - 1) * itemsPerPage;
  // const endItemIndex = startItemIndex + itemsPerPage;
  // const paginatedItems = travelData.slice(startItemIndex, endItemIndex);
  // const totalPage = Math.ceil(travelData.length / itemsPerPage);
  // const totalGroups = Math.ceil(totalPage / pagesPerGroup);
  // const currentGroup = Math.ceil(currentPage / pagesPerGroup);

  // const startPageIndex = (currentGroup - 1) * pagesPerGroup + 1;
  // const endPageIndex = Math.min(startPageIndex + pagesPerGroup - 1, totalPage);

  // const handleMainSortChange = (e) => {
  //   setMainSort(e.target.value);
  //   setCurrentPage(1);
  // }

  // const handleMidSortChange = (e) => {
  //   setMidSort(e.target.value);
  //   setCurrentPage(1);
  // }


    return(
        <Container>
              <h1>기숙사 & 숙소</h1>
                <DetailContainer>
                  <h2>UserName</h2>
                  <DormName>
                    <h3>숙소 형태</h3>
                    <p>기숙사</p>
                  </DormName>
                  <DormDes>
                    <h3>숙소 사용</h3>
                    <p>교환학생 전용</p>
                  </DormDes>
                </DetailContainer>
        </Container>
    )
}

export default Body;