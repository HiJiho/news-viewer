import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
	box-sizing: border-box; /* 패딩과 보더가 너비와 높이에 포함되도록 설정 */
	padding-bottom: 3rem; /* 하단 패딩 */
	width: 768px; /* 고정 너비 */
	margin: 0 auto; /* 좌우 자동 마진으로 중앙 정렬 */
	margin-top: 2rem; /* 상단 마진 */
	@media screen and (max-width: 768px) {
		width: 100%; /* 화면 너비가 768px 이하일 때 너비 100%로 조정 */
		padding-left: 1rem; /* 좌측 패딩 */
		padding-right: 1rem; /* 우측 패딩 */
	}
`;

const sampleArticle = {
	title: "제목",
	description: "내용",
	url: "https://google.com",
	urlToImage: "https://via.placeholder.com/160",
};

const NewsList = () => {
	return (
		<NewsListBlock>
			<NewsItem article={sampleArticle} />
			<NewsItem article={sampleArticle} />
			<NewsItem article={sampleArticle} />
			<NewsItem article={sampleArticle} />
			<NewsItem article={sampleArticle} />
			<NewsItem article={sampleArticle} />
		</NewsListBlock>
	);
};

export default NewsList;
