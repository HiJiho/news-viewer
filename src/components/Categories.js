import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
	{
		name: "all",
		text: "전체보기",
	},
	{
		name: "business",
		text: "비즈니스",
	},
	{
		name: "entertainment",
		text: "엔터테인먼트",
	},
	{
		name: "health",
		text: "건강",
	},
	{
		name: "science",
		text: "과학",
	},
	{
		name: "sports",
		text: "스포츠",
	},
	{
		name: "technology",
		text: "기술",
	},
];

const CategoriesBlock = styled.div`
	display: flex;
	padding: 1rem;
	width: 768px;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		width: 100%; // 768px 이하 일 때 화면 안에 모든 요소 표시
		overflow-x: auto;
	}
`;

const Category = styled(NavLink)`
	font-size: 1.125rem;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	color: inherit;
	padding-bottom: 0.25rem;

	&:hover {
		color: #495057;
	}

	&.active {
		font-weight: 600; // 글꼴 두께
		border-bottom: 2px solid #22b8cf; // 활성 카테고리 아래에 푸른색 하단 테두리를 추가
		color: #22b8cf;
		&:hover {
			color: #3bc9db;
		}
	}

	& + & {
		margin-left: 1rem;
	}
`;

const Categories = () => {
	return (
		<CategoriesBlock>
			{categories.map((c) => (
				<Category
					key={c.name}
					className={({ isActive }) => (isActive ? "active" : undefined)}
					to={c.name === "all" ? "/" : `/${c.name}`}
				>
					{c.text}
				</Category>
			))}
		</CategoriesBlock>
	);
};

export default Categories;
