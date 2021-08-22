/* eslint-disable @next/next/no-img-element */
import { apollo } from "apollo";
import { GET_MAGAZINES } from "apollo/queries/magazineQuery";
import dayjs from "dayjs";
import MagazineLayout from "Layout/MagazineLayout";
import Link from "next/link";
import React from "react";
import Tilt from "react-tilt";
import styled from "styled-components";
import { IMagazine } from "types/interface";
import { HTTP_URI } from "utils/constants";

const Index = ({ magazines }: { magazines: IMagazine[] }): JSX.Element => {
	const options = {
		scale: 1,
		reverse: true,
	};

	return (
		<MagazineLayout>
			<div>
				<main>
					<section className="bg-dark first-wrapper py-2 text-white">
						<div className="container mb-2 first-main d-flex flex-column-reverse flex-md-row align-items-md-center">
							<div className="left">
								<h1 className="fw-bold mb-3 fs-1 georgia">
									Lorem ipsum dolor sit amet.
								</h1>
								<p className="poppins fs-5 mb-4 p-0 ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Egestas in vivamus nisi non vivamus etiam tincidunt nec
									aliquam. Adipiscing purus a tincidunt faucibus felis mattis
									elementum massa
								</p>
								<Link href="/subscribe">
									<a className="btn poppins border text-white border-1 px-5 fs-5 py-3">
										Buy Issue
									</a>
								</Link>
							</div>
							<div className="right">
								<Tilt {...options}>
									<img src="/images/book.png" alt="" />
								</Tilt>
							</div>
						</div>
						<div className="container">
							<span className="d-block mb-2 text-center ">More issues</span>
							<i className="d-block text-center fas fa-chevron-down fa-2x fw-bold"></i>
						</div>
					</section>
					<section className="py-5 ">
						<div className="container">
							<h1 className="mb-5 fw-bold">January - Febuary, 2021</h1>
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
								{magazines?.map((magazine, i) => (
									<SingleMagazine key={i} magazine={magazine} />
								))}
							</div>
						</div>
					</section>

					<section className="py-5 ">
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
								{magazines?.map((magazine, i) => (
									<SingleMagazine key={i} magazine={magazine} />
								))}
							</div>
						</div>
					</section>
					<div className="container">
						<Ads className="ads img-fluid bg-light shadow-lg"></Ads>
					</div>
					<div className="d-flex mb-5 justify-content-center py-2">
						<button className="btn border-2 border-dark px-4 fw-bold py-2">
							Load More
						</button>
					</div>
				</main>
			</div>
		</MagazineLayout>
	);
};

export default Index;

const SingleMagazine = ({ magazine }: { magazine: IMagazine }) => {
	return (
		<Link href={`/magazine/${magazine?.id}`}>
			<a
				className="text-decoration-none text-inherit"
				data-aos="zoom-in"
				data-aos-duration="1000"
				data-aos-easing="linear"
			>
				<div className="card  border-0 h-100">
					<img
						src={`${HTTP_URI}${magazine?.cover?.url}`}
						alt={magazine?.title}
						className="card-img"
					/>
					<div className="card-body">
						<p className="card-title mb-2 fw-bold text-center fs-4">
							{magazine?.issue}
						</p>
						<p className="text-center fs-5 georgia">
							{dayjs(magazine?.date).format("MMMM DD, YYYY")}
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
};

export const getStaticProps = async (): Promise<{
	props: { magazines: IMagazine[] | null };
}> => {
	try {
		const { data } = await apollo.query({
			query: GET_MAGAZINES,
		});

		const magazines: IMagazine[] = data?.magazines;
		return {
			props: {
				magazines,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				magazines: null,
			},
		};
	}
};

const Ads = styled.div`
	height: 500px;
`;
