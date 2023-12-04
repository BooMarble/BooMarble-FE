// import { ReviewBody } from "./style";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getReviewInfo } from "../../apis/reviewApi/apis";
import { CommunityBody } from "./style";

function Body() {

    // review 가져오기
    const navigate = useNavigate();
    const [review, setReview] = useState([]);

    const findReviewInfo = async () => {
        //정상 접근시
        try {
            const reviewInfo = await getReviewInfo();
            setReview(reviewInfo);
        } catch (err) {
            // 비정상 접근시
            console.log(err)
        }
    }

    // review 띄우기
    const setReviews = (numberOfReviewNumber) => {
        let reviewBox= document.getElementById('reviewBox');
        if (reviewBox) {
            // 초기화
            reviewBox.innerHTML = '';
            for (let i=0; i < numberOfReviewNumber; i++) {
                // 이전까지의 피드
                const prev = reviewBox.innerHTML;

                // 새로 추가될 피드
                const reviewId = i;
                const universityName = review[i].universityName;
                const reviewCount = review[i].universityReviewCnt;
                const countryName = review[i].universityCountry;
                const categoryName = review[i].universityType;

                // 게시물 렌더링
                reviewBox.innerHTML = prev + `
                <div id=${reviewId}>
                    <p>${universityName}</p>
                    <p>${reviewCount}</p>
                    <p># ${countryName}</p>
                    <p># ${categoryName}</p>
                </div>
                `
                console.log(review[i])
                ;
            }
        }
    }
    if (review.length > 0) {
        const numberOfReviewNumber = review.length;
        setReviews(numberOfReviewNumber);
    }

    useEffect(() => {
        // review 불러오기
        findReviewInfo();
    }, []);

    return(
        <CommunityBody>
            <div id="reviewBox">
            </div>
        </CommunityBody>
    )
}

export default Body;