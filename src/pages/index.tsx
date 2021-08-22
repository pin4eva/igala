/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { apollo } from "apollo";
import { GET_ARTICLES } from "apollo/queries/articleQuery";
import { ArticlesAtom } from "atoms/ArticlesAtom";
import {
	default as Advertisement,
	default as AdvertisementLandScape,
} from "components/Advertisement";
import ArticleNewsComp from "components/articles/home/ArticleNewsComp";
import CultureComp from "components/articles/home/CultureComp";
import EducationComp from "components/articles/home/EducationComp";
import EntertainmentComp from "components/articles/home/EntertainmentComp";
import MagazinAd from "components/articles/home/MagazinAd";
import SubscribeComp from "components/articles/home/SubscribeComp";
import ChoiceModalComp from "components/ChoiceModal";
import Cookies from "js-cookie";
import ArticleLayout from "Layout/ArticleLayout";
import { NextPage } from "next";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IArticle } from "types/interface";

const Home: NextPage<{ articles: IArticle[] | null }> = ({
	articles,
}): JSX.Element => {
	const [show, setShow] = useState(Boolean(!Cookies.get("consent")));
	const setArticles = useSetRecoilState(ArticlesAtom);

	const handleHide = () => {
		Cookies.set("consent", "true");
		setShow(false);
	};

	useEffect(() => {
		if (articles?.length) {
			setArticles(articles);
		}
	}, []);
	return (
		<Fragment>
			<ChoiceModalComp show={show} onHide={handleHide} />
			<ArticleLayout>
				<Wrapper className="article-home">
					<Advertisement />
					<ArticleNewsComp
						articles={
							articles?.filter((article) => article.category.name === "news") ||
							[]
						}
					/>
					<div className="line bg-warning my-5 container"></div>
					<MagazinAd />
					<EntertainmentComp
						articles={
							articles?.filter(
								(article) =>
									article.category.name.toLowerCase() === "entertainment",
							) || []
						}
					/>
					<EducationComp />
					<CultureComp />
					<SubscribeComp />
					<div className="my-5">
						<AdvertisementLandScape />
					</div>
				</Wrapper>
			</ArticleLayout>
		</Fragment>
	);
};

const Wrapper = styled.div``;

export default Home;

Home.getInitialProps = async (): Promise<{ articles: IArticle[] | null }> => {
	try {
		const { data } = await apollo.query({
			query: GET_ARTICLES,
		});
		const articles: IArticle[] = data.articles;
		return {
			articles,
		};
	} catch (error) {
		console.log(error);
		return {
			articles: null,
		};
	}
};
