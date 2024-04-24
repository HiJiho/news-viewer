import styled from "styled-components";
import React from "react";

const NewsItemBlock = styled.div`
	display: flex; /* 요소들을 가로로 나란히 배치 */
	.thumbnail {
		margin-right: 1rem; /* 썸네일과 내용 사이의 오른쪽 여백 설정 */
		img {
			display: block; /* 이미지를 블록 요소로 설정하여 줄바꿈 */
			width: 160px; /* 이미지의 너비 */
			height: 100px; /* 이미지의 높이 */
			object-fit: cover; /* 이미지 비율을 유지하면서 요소에 완전히 채우도록 설정 */
		}
	}
	.contents {
		h2 {
			margin: 0; /* 제목 위아래 여백 제거 */
			a {
				color: black; /* 링크 색상 검은색으로 설정 */
			}
		}
		p {
			margin: 0; /* 문단 위아래 여백 제거 */
			line-height: 1.5; /* 줄 간격 설정 */
			margin-top: 0.5rem; /* 문단 윗부분에 여백 추가 */
			white-space: normal; /* 공백 문자 처리 방식을 정상으로 설정 */
		}
	}
	& + & {
		/* 인접한 뉴스 항목 사이의 상단 여백 설정 */
		margin-top: 3rem;
	}
`;

const NewsItem = ({ article }) => {
	const { title, description, url, urlToImage } = article;
	return (
		<NewsItemBlock>
			{urlToImage && (
				<div className="thumbnail">
					<a href="url" target="_blank" rel="noopener noreferrer">
						<img src={urlToImage} alt="thumbnail" />
					</a>
				</div>
			)}
			<div className="contents">
				<h2>
					<a href={url} target="_blank" rel="noopener noreferrer">
						{title}
					</a>
				</h2>
				<p>{description}</p>
			</div>
		</NewsItemBlock>
	);
};

export default NewsItem;
