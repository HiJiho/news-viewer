import { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

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

const NewsList = () => {
	const [articles, setArticles] = useState(null); // 리스트
	const [loading, setLoading] = useState(false); // API 요청이 대기 중인지 판별

	useEffect(() => {
		// async를 사용하는 함수 따로 선언
		const fetchData = async () => {
			setLoading(true); // 요청 대기 중
			try {
				const response = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
				);
				setArticles(response.data.articles);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	// 대기 중일 때
	if (loading) {
		// return <NewsListBlock>대기 중...</NewsListBlock>;
		return (
			<Spinner>
				<BounceLoader color="#000000" size={50} />
			</Spinner>
		);
	}

	// 아직 articles 값이 설정되지 않았을 때
	if (!articles) {
		return null;
	}

	// articles 값이 유효할 때
	return (
		<NewsListBlock>
			{articles.map((article) => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewsListBlock>
	);
};

export default NewsList;
