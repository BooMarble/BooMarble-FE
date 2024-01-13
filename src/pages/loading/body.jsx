function Body() {

    // <pre> 태그 찾기
    const preTag = document.querySelector('pre');

    if (preTag) {
    // <pre> 태그에서 텍스트 추출
    const textContent = preTag.innerText || preTag.textContent;

    // 파싱된 데이터 사용 예시
    console.log(textContent);
    } else {
    console.error('No <pre> tag found.');
    }

    return(
        <p>부마블</p>
    )
}

export default Body;