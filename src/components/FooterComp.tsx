/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CategoryNavComp } from "./articles/ArticleHeaderComp";

const MagazineFooter = (): JSX.Element => {
	return (
		<footer className="py-4">
			<div className="d-flex justify-content-center">
				<div>
					<img src="/images/logo.png" alt="" className="d-block" />
					<div className="d-flex text-warning mt-3 gap-1 justify-content-between">
						<i className="fab fa-instagram"></i>
						<i className="fab fa-youtube ms-1"></i>
						<i className="fab fa-facebook ms-1"></i>
						<i className="fab fa-twitter ms-1"></i>
					</div>
				</div>
			</div>
			<hr />
			<div className="py-2">
				<CategoryNavComp />
				<p className="text-center mb-3 georgia fa-2x">Arise Igala</p>
				<div className="container">
					<p className="text-center">
						© Arise Igala 2021 All Rights Reserved. Use of this site constitutes
						acceptance of our Terms of Service, Privacy Policy and Do Not Sell
						My Personal Information. Arise Igala may receive compensation for
						some links to products and services on this website. Offers may be
						subject to change without notice. This site is protected by
						reCAPTCHA and the Google Privacy Policy Terms of Service apply.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default MagazineFooter;
