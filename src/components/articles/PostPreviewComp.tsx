/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { IArticles } from "types/articles";

const PostPreviewComp = ({ article }: { article: IArticles }): JSX.Element => {
	return (
		<Wrapper>
			<div className="inner">
				<img src={article.image} alt={article.title} />
				<p className="inner-excerpt mt-3">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
					reiciendis. Vero, placeat deleniti.
				</p>
				<div className="line bg-warning w-50 mb-2" />
				<small>By Sola Oyebanji</small>
			</div>
		</Wrapper>
	);
};

export default PostPreviewComp;

const Wrapper = styled.div`
	.line {
		height: 2px;
	}
	img {
		width: 100%;
	}
`;
