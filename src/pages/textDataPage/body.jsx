import useInput from "../../hooks/useInput";
import { useState } from "react";
import ReactPaginate from 'react-js-pagination';
import { TextDataPageBody } from "./style";

function Body() {
    // 페이지네이션 구현 필요 : react-js-pagination
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
        // 다음 페이지에 필요한 데이터를 가져오는 등의 작업 수행
      };

    return(
        <TextDataPageBody>
            <p>출국 전 준비사항</p>
            <input
                id="searchInput"
                type="text"
                placeholder="검색"
                // onChange={onChangeSearchContent}
            />
            <p>UserName</p>
            <p>입학허가서 신청 시 유의사항</p>
            <p>ENMU는 작성해야 하는 서류가 많지 않습니다. 국제교류팀이나 해외대학에서 오는 메일이나 연락 확인만 잘 하시고 시키는대로 하면 어려운 점은 특별히 없습니다.</p>
            <p>비자 취득, 항공권 및 유학생 보험 구입</p>
            <p>ENMU는 작성해야 하는 서류가 많지 않습니다. 국제교류팀이나 해외대학에서 오는 메일이나 연락 확인만 잘 하시고 시키는대로 하면 어려운 점은 특별히 없습니다.</p>
            <p>기타 유의사항</p>
            <p>ENMU는 작성해야 하는 서류가 많지 않습니다. 국제교류팀이나 해외대학에서 오는 메일이나 연락 확인만 잘 하시고 시키는대로 하면 어려운 점은 특별히 없습니다.</p>
            {/* <ReactPaginate 
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={450}
                previousLabel={"〈"}
                nextLabel={"〉"}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />          */}
        </TextDataPageBody>
    )
}

export default Body;