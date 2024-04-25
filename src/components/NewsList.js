import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import usePromise from "../lib/usePromise";

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

const Spinner = styled.div`
	box-sizing: border-box;
	display: flex;
	width: 768px;
	height: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 768px) {
		width: 100%; /* 화면 너비가 768px 이하일 때 너비 100%로 조정 */
		padding-left: 1rem; /* 좌측 패딩 */
		padding-right: 1rem; /* 우측 패딩 */
	}
`;

const NewsList = ({ category }) => {
	const [loading, response, error] = usePromise(() => {
		const query = category === "all" ? "" : `&category=${category}`;
		return axios.get(
			`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
		);
	}, [category]);

	// 대기 중일 때
	if (loading) {
		// return <NewsListBlock>대기 중...</NewsListBlock>;
		return (
			<Spinner>
				<BeatLoader color="#22b8cf" size={20} />
			</Spinner>
		);
	}

	// 에러가 발생했을 경우, error 기본값 = null
	if (error) {
		return <NewsListBlock>에러 발생!</NewsListBlock>;
	}

	// 아직 response 값이 설정되지 않았을 때, response 기본값 = null
	if (!response) {
		return null;
	}

	// response 값이 유효할 때
	const { articles } = response.data;
	return (
		<NewsListBlock>
			{articles.map((article) => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewsListBlock>
	);
};

export default NewsList;
